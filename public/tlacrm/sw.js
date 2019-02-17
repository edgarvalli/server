const publicVapidKey = 'BH54HR9NEeTIQ36JskmMCoKMsM1EseYPAEv7O575VrgJ9xtXW3gh8nVO23PVwNWB8CDUCypLRBGU9jCiXkQVUZY';

var BASE64_MARKER = ';base64,';
function convertDataURIToBinary(dataURI) {
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
}


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

self.addEventListener('activate', function () {
    // `claim()` sets this worker as the active worker for all clients that
    // match the workers scope and triggers an `oncontrollerchange` event for
    // the clients.
    console.log('activeted');
    navigator.serviceWorker.ready.then(reg => {
        reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: convertDataURIToBinary(publicVapidKey)
        })
            .then(sub => {
                fetch('https://ev-server.ddns.net/api/users/subscribe', {
                    headers: { "Content-Type": "application/json" },
                    method: "post",
                    body: JSON.stringify(sub)
                })
            })
            .catch(error => console.error("Ocurrio un error: " + error));
    })
    return self.clients.claim();
});