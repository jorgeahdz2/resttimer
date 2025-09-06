const CACHE = 'resttimer-cache-v3';
const ASSETS = [
  './',
  './index.html',
  './site.webmanifest',
  './resttimer-roundcap-light.svg',
  './resttimer-roundcap-dark.svg',
  './apple-touch-icon-180.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))),
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  try {
    const url = new URL(req.url);
    if (req.method !== 'GET' || url.origin !== location.origin) return;
  } catch (e) { return; }

  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return r;
    }).catch(() => caches.match('./index.html')))
  );
});

// Keep this simple: bring an existing window to front or open the app.
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientsArr => {
      if (clientsArr.length > 0) {
        return clientsArr[0].focus();
      }
      return clients.openWindow('./');
    })
  );
});
