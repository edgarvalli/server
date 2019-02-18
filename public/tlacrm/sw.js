self.addEventListener('install', function (ev) {
    console.log(ev)
    ev.waitUntil(
        caches.open('tlacrm').then(cache => {
            return cache.addAll(
                [
                    'https://ev-server.ddns.net/tlacrm/js/bundle.js',
                    'https://ev-server.ddns.net/tlacrm/js/bundle.chunk.js',
                    'https://ev-server.ddns.net/tlacrm/index.html',
                    'https://ev-server.ddns.net/tlacrm/images/icons/icon_16x16.png',
                    'https://ev-server.ddns.net/tlacrm/css/styles.css',
                    'https://ev-server.ddns.net/tlacrm/css/roboto.css',
                    'https://ev-server.ddns.net/tlacrm/css/material-icons.css'
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