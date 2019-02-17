if ('serviceWorker' in navigator) {
    console.log('Registering service worker');

    _run().catch(error => console.log(error));
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

async function subscribeForPushNotification(reg) {
    const applicationServerKey = urlBase64ToUint8Array(publicVapidKey);
    const sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey }).catch(error => error);
    console.log(sub)
    await fetch('https://ev-server.ddns.net/api/tlacrm/users/subscribe', {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify(sub)
    }).catch(error => error)
}

async function _run() {

    const reg = await navigator.serviceWorker.register('sw.js', { scope: '/tlacrm/' }).catch(error => console.log(error));

    let sw;
    if (reg.installing) sw = reg.installing;
    if (reg.waiting) sw = reg.waiting;
    if (reg.active) sw = reg.active;
    if (sw.state === 'activated') console.log('ServiceWorker Activated');

    sw.addEventListener('statechange', async function (e) {
        if (e.target.state === "activated") {
            // use pushManger for subscribing here.
            console.log("Just now activated. now we can subscribe for push notification")
            const applicationServerKey = urlBase64ToUint8Array(publicVapidKey);
            const sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey }).catch(error => error);
            console.log(sub)
            await fetch('https://ev-server.ddns.net/api/tlacrm/users/subscribe', {
                headers: { "Content-Type": "application/json" },
                method: "post",
                body: JSON.stringify(sub)
            }).catch(error => error)
        }
    })

}