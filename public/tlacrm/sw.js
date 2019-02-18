self.addEventListener('install', function (ev) {
    console.log(ev.scope)
    ev.waitUntil(
        caches.open('tlacrm').then(cache => {
            return cache.addAll(
                [
                    'js/bundle.js',
                    'js/bundle.chunk.js',
                    'index.html',
                    'images/icons/icon_16x16.png',
                    'css/styles.css',
                    'css/roboto.css',
                    'css/material-icons.css'
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