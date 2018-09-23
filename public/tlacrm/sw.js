self.addEventListener('install', function(ev){
    const api = 'https://ev-server.ddns.net/'
    ev.waitUntil(
        caches.open('tlacrm').then(cache => {
            return cache.addAll(
                [
                    api + '/tlacrm/css/styles.css',
                    api + '/tlacrm/js/bundle.js',
                    api + '/tlacrm/index.html',
                    api + '/tlacrm/images/icons/icon_16x16.png'
                ]
            )
        })
    )
});