'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "7dc290cfaa685d195cad6a2a38ac6cad",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/fonts/Pacifico-Regular.ttf": "c1a28478f7a0cc5e25bb395d0543274d",
"/assets/FontManifest.json": "df699b1212d757ecedd3ea22791ed5d8",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "38b16909af58cc6a875608f26813a90c",
"/assets/LICENSE": "8633c2030fc0875b8d7b533498ded797",
"/main.dart.js": "73e2f401a39299db42c61be543990309",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
