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
        }).catch(error => console.log(error))
    )
});

self.addEventListener('push', e => {
    const n = e.data.json();
    e.waitUntil(
        self.registration.showNotification(n.title, {
            body: n.message,
            icon: n.icon
        })
    )
})

self.addEventListener('notificationclick', function (e) {
    const url = 'https://ev-server.ddns.net/tlacrm/';

    e.notification.close();

    if (clients.openWindow) {
        return clients.openWindow(url);
    }
});