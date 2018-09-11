self.addEventListener('install', function(ev){
    ev.waitUntil(
        caches.open('tlacrm').then(cache => {
            return cache.addAll(
                [
                    '/css/styles.css',
                    'js/bundle.js',
                    '/index.html',
                    '/images/icons/icon_16x16.png'
                ]
            )
        })
    )
});

self.addEventListener('fetch', function(ev){
    ev.respondWidth(
        caches.match(ev.request).then(response => {
            return response || fetch(ev.request)
        })
    )
})
