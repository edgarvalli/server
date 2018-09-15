self.addEventListener('install', function(ev){
    ev.waitUntil(
        caches.open('tlacrm').then(cache => {
            return cache.addAll(
                [
                    '/tlacrm/css/styles.css',
                    '/tlacrm/js/bundle.js',
                    '/tlacrm/index.html',
                    '/tlacrm/images/icons/icon_16x16.png'
                ]
            )
        })
    )
});

self.addEventListener('fetch', function(ev){
    if(ev.request.clone().clone().method === 'GET') {
        ev.respondWith(
            caches.open('tlacrm').then(function(cache){
                return cache.match(ev.request).then(function(resp) {
                    return resp || fetch(ev.request).then(function(resp) {
                        cache.put(ev.request, resp.clone());
                        return resp;
                    })
                })
            })
        )
    }
})
