const CACHE_NAME = "clutch-hotel-v1";

const urlsToCache = [
    "/",
    "/login",
    "/signup",
    "/home",
    "/rooms"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});