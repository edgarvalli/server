if ('serviceWorker' in navigator) {
    console.log('Registering service worker');

    _run()
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
    reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey }).then(sub => {
        console.log(sub)
        fetch('https://ev-server.ddns.net/api/tlacrm/users/subscribe', {
            headers: { "Content-Type": "application/json" },
            method: "post",
            body: JSON.stringify(sub)
        }).catch(error => error)
    }).catch(error => console.log(`Error al suscribirse ${error}`))
}

function _run() {

    navigator.serviceWorker.register('sw.js', { scope: '/tlacrm/' }).then(reg => {
        let sw;
        if (reg.installing) sw = reg.installing;
        if (reg.waiting) sw = reg.waiting;
        if (reg.active) sw = reg.active;
        if (sw.state === 'activated') console.log('ServiceWorker Activated');

        sw.addEventListener('statechange', async function (e) {
            if (e.target.state === "activated") {
                // use pushManger for subscribing here.
                console.log("Just now activated. now we can subscribe for push notification");
                const applicationServerKey = urlBase64ToUint8Array(publicVapidKey);
                reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey }).then(sub => {
                    fetch('https://ev-server.ddns.net/api/tlacrm/users/subscribe', {
                        headers: { "Content-Type": "application/json" },
                        method: "post",
                        body: JSON.stringify(sub)
                    }).catch(error => error)
                }).catch(error => console.log(`Error al suscribirse ${error}`))
            }
        })
    }).catch(error => console.log(`Error al registrar el service worker ${error}`))


}