self.addEventListener('activate', function (ev) {
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

self.addEventListener('push', event => {
    const data = event.data.json();
    event.waitUntil(
        self.registration.showNotification(data.title, {
            icon: data.icon,
            body: data.message
        })
    )
})