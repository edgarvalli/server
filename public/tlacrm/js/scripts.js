if ('serviceWorker' in navigator) {
    console.log('Registering service worker');

    _run();
}

if ('Notification' in window) {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}

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

function subscribeForPushNotification(reg) {
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
}

function _run() {

    navigator.serviceWorker.register('/tlacrm/sw.js', { scope: '/tlacrm/' })
        .then(reg => {
            let sw;
            if (reg.installing) {
                console.log('Service worker installing');
                sw = reg.installing;
            } else if (reg.waiting) {
                sw = reg.waiting;
                console.log('Service worker installed');
            } else if (reg.active) {
                sw = reg.active;
                console.log('Service worker active');
            }

            if (sw.state === 'activated') {
                console.log('ServiceWorker Activated');
            }

            sw.addEventListener('statechange', function (e) {
                if(e.target.state === "activated") {
                // use pushManger for subscribing here.
                console.log("Just now activated. now we can subscribe for push notification")
                subscribeForPushNotification(reg);
            }
        })
})
        .catch (error => console.log(error))
}