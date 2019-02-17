self.addEventListener('install', function (ev) {
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

self.addEventListener('push', ev => {
    const data = ev.data.json();
    self.registration.showNotification(data.title, {
        body: data.message
    })
})