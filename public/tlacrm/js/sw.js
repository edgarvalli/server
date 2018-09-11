self.addEventListener('install', ev => {
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

self.addEventListener('sync', ev=> {
    ev.waitUntil(function() {
        setTimeout(() => {
            
        }, 10000)
    })
})