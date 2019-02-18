self.addEventListener('install', function (ev) {
    console.log(ev)
    ev.waitUntil(
        caches.open('tlacrm').then(cache => {
            return cache.addAll(
                [
                    '/tlacrm/',
                    '/tlacrm/js/bundle.js',
                    '/tlacrm/js/bundle.chunk.js',
                    '/tlacrm/images/icons/icon_16x16.png',
                    '/tlacrm/css/styles.css',
                    '/tlacrm/css/roboto.css',
                    '/tlacrm/css/material-icons.css'
                ]
            )
        }).catch(error => console.log(error))
    )
});

self.addEventListener('fetch', e => {
    console.log(e)
})

self.addEventListener('push', e => {
    const n = e.data.json();
    e.waitUntil(
        self.registration.showNotification(n.title, {
            body: n.message,
            icon: n.icon,
            badge: 'https://ev-server.ddns.net/tlacrm/images/icons/icon_16x16.png'
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