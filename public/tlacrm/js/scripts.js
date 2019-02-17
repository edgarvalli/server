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

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/')
        ;
    const rawData = window.atob(base64);
    return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

function subscribeForPushNotification(reg) {
    const applicationServerKey = urlBase64ToUint8Array(publicVapidKey);
    console.log(applicationServerKey)
    reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey
    }).then(sub => {
        fetch('https://ev-server.ddns.net/api/users/subscribe', {
            headers: { "Content-Type": "application/json" },
            method: "post",
            body: JSON.stringify(sub)
        })
    }).catch(error => console.error("Ocurrio un error: " + error));
}

function _run() {

    navigator.serviceWorker.register('sw.js', { scope: '/tlacrm/' })
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
                if (e.target.state === "activated") {
                    // use pushManger for subscribing here.
                    console.log("Just now activated. now we can subscribe for push notification")

                    console.log(reg.pushManager)
                    subscribeForPushNotification(reg);
                }
            })
        })
        .catch(error => console.log(error))
}