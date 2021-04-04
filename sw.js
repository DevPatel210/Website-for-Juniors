self.addEventListener("install", e =>{
   e.waitUntil(
       caches.open("static").then(cache =>{
           return cache.addAll(["./", "./css/styles.css", "./images/logo192.png"]);
       })
   );

});

self.addEventListener("fetch", e =>{
    console.log('Intercepting fetch request for: ${e.request.url}');
});