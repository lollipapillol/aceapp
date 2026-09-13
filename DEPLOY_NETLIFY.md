# Deploy Aceapp from GitHub to Netlify

Aceapp is a static site. The repository should contain `index.html`, `plates/`, `assets/`, `manifest.webmanifest`, `sw.js`, and `netlify.toml` at the repository root.

## Netlify build settings

Because the website is already built, **do not unzip a ZIP in the Netlify build command**.

Use:

- **Build command:** blank (or `true` only if the UI refuses blank)
- **Publish directory:** `.`

The included `netlify.toml` also declares the publish directory and security headers.

If an older Netlify site still shows a command such as:

`rm -rf dist && mkdir dist && unzip -q aceapp-site.zip -d dist`

remove that command in the Netlify UI. A UI-saved build command can continue overriding the repository setup.

After changing an old configuration, use **Trigger deploy → Deploy project without cache** once.

## Firebase after deploying

In Firebase Authentication → Settings → Authorized domains, add the active Netlify domain and any future custom domain.

## Voluntary support

The Support page uses only public donation routes:

- PayPal hosted payment link
- BPI / InstaPay QR image

There is no Xendit function or payment backend in this release. See `SUPPORT_SETUP.md`.
