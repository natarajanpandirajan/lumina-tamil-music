// Kill-switch SW: wipe every cache from previous versions, then do nothing.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// No fetch handler — every request goes straight to the network.
