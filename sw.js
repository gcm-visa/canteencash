const CACHE_NAME = "canteen-pwa-v1";

self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  return self.clients.claim();
});

self.addEventListener("fetch", event => {
  // just pass through (no caching needed for now)
});
