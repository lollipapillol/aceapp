const CACHE = 'aceapp-v23-made-to-stick-20260912';
const APP_SHELL = ['/', '/manifest.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  // HTML navigations are network-first so published UI fixes appear immediately.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req, { cache: 'no-store' }).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((cache) => cache.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((cached) => cached || caches.match('/')))
    );
    return;
  }

  // Static anatomy plates can render instantly from cache while refreshing in the background.
  event.respondWith(
    caches.match(req).then((cached) => {
      const refresh = fetch(req).then((res) => {
        if (res.ok) caches.open(CACHE).then((cache) => cache.put(req, res.clone()));
        return res;
      }).catch(() => cached);
      return cached || refresh;
    })
  );
});
