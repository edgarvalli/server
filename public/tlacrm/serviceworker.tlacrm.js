self.addEventListener('install', ev => ev.waitUntil(Promise.reject()))
self.addEventListener('activated', function (ev) {
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
        }).catch(error => console.log(error))
    )

});