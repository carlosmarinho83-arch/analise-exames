// Chronia Service Worker — habilita instalação como PWA
const CACHE = 'chronia-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

// Sem cache offline — passa tudo para a rede
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
