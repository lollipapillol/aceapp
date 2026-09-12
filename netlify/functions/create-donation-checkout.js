const CHANNELS = {
  all: null,
  card: ['CARDS'],
  gcash: ['GCASH'],
  maya: ['PAYMAYA'],
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify(body),
  };
}

function safeText(value, max = 120) {
  return String(value || '').replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, max);
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: { 'Cache-Control': 'no-store' }, body: '' };
  }
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed.' });

  const secret = process.env.XENDIT_SECRET_KEY;
  if (!secret) {
    return json(503, { error: 'Secure payments are not activated yet. Add XENDIT_SECRET_KEY in Netlify environment variables.' });
  }

  let input;
  try {
    input = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { error: 'Invalid checkout request.' });
  }

  const amount = Number(input.amount);
  if (!Number.isFinite(amount) || amount < 1 || amount > 100000) {
    return json(400, { error: 'Support amount must be between ₱1 and ₱100,000.' });
  }

  const preferredMethod = CHANNELS.hasOwnProperty(input.preferredMethod) ? input.preferredMethod : 'all';
  const allowed = CHANNELS[preferredMethod];
  if (preferredMethod === 'card' && amount < 20) {
    return json(400, { error: 'Card support payments must be at least ₱20. Choose another method or increase the amount.' });
  }
  const name = safeText(input.name, 60);
  const email = safeText(input.email, 50);
  const note = safeText(input.note, 180);

  // Payment Sessions are created server-side so the Xendit secret key never reaches the browser.
  const now = Date.now();
  const rand = Math.random().toString(36).slice(2, 10);
  const referenceId = `aceapp${now}${rand}`.slice(0, 64);
  const customerReference = `supporter${now}${rand}`.replace(/[^a-zA-Z0-9]/g, '').slice(0, 64);

  const proto = (event.headers['x-forwarded-proto'] || 'https').split(',')[0].trim();
  const host = event.headers['x-forwarded-host'] || event.headers.host;
  const origin = host ? `${proto}://${host}` : '';

  const payload = {
    reference_id: referenceId,
    session_type: 'PAY',
    mode: 'PAYMENT_LINK',
    amount: Math.round(amount * 100) / 100,
    currency: 'PHP',
    country: 'PH',
    locale: 'en',
    description: 'Support Aceapp development',
    customer: {
      reference_id: customerReference,
      type: 'INDIVIDUAL',
      ...(email ? { email } : {}),
    },
    ...(allowed ? { allowed_payment_channels: allowed } : {}),
    ...(origin ? {
      success_return_url: `${origin}/?support=success`,
      cancel_return_url: `${origin}/?support=cancelled`,
    } : {}),
    metadata: {
      source: 'aceapp',
      preferred_method: preferredMethod,
      ...(name ? { supporter_name: name } : {}),
      ...(note ? { supporter_note: note } : {}),
    },
  };

  try {
    const response = await fetch('https://api.xendit.co/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${secret}:`).toString('base64')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const unavailable = data?.error_code === 'INVALID_PAYMENT_CHANNEL';
      return json(response.status >= 500 ? 502 : 400, {
        error: unavailable
          ? 'That payment method is not activated for Aceapp yet. Choose “All available” or another method.'
          : (safeText(data?.message, 220) || 'Secure checkout could not be created.'),
        code: safeText(data?.error_code, 80) || undefined,
      });
    }

    if (!data?.payment_link_url) {
      return json(502, { error: 'Xendit did not return a hosted checkout URL.' });
    }

    return json(200, {
      url: data.payment_link_url,
      sessionId: data.payment_session_id || null,
    });
  } catch (error) {
    console.error('Xendit session error', error);
    return json(502, { error: 'Payment provider could not be reached. Please try again.' });
  }
};
