const CACHE_NAME = "bima";
var urlsToCache = [
    "/",
    "/nav.html",
    "/index.html",
    "/pages/home.html",
    "/pages/kuliner.html",
    "/pages/sejarah.html",
    "/pages/tentang.html",
    "/css/materialize.min.css",
    "/js/nav.js",
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});