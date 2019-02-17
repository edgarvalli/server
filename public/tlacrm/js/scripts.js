if ('serviceWorker' in navigator) {
    console.log('Registering service worker');

    _run().catch(error => console.error("Ocurrio un error: " + error));
}

if ('Notification' in window) {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}

const publicVapidKey = 'BH54HR9NEeTIQ36JskmMCoKMsM1EseYPAEv7O575VrgJ9xtXW3gh8nVO23PVwNWB8CDUCypLRBGU9jCiXkQVUZY';

var BASE64_MARKER = ';base64,';
const convertDataURIToBinary = dataURI => {
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

async function run() {
    console.log('Registering service worker');
    const reg = await navigator.serviceWorker.
        register('/tlacrm/sw.js', { scope: '/tlacrm/' });
    console.log('Registered service worker');

    console.log('Registering push');
    const subscription = await window.pushManager.
        subscribe({
            userVisibleOnly: true,
            // The `urlBase64ToUint8Array()` function is the same as in
            // https://www.npmjs.com/package/web-push#using-vapid-key-for-applicationserverkey
            applicationServerKey: convertDataURIToBinary(publicVapidKey)
        });
    console.log('Registered push');

    console.log('Sending push');
    await fetch('https://ev-server.ddns.net/api/users/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json'
        }
    });
    console.log('Sent push');
}

function _run  () {

    navigator.serviceWorker.register('/tlacrm/sw.js', { scope: '/tlacrm/' })
        .then(reg => {
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
        })
}