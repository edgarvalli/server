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

async function runServiceWorker() {
    const reg = await navigator.serviceWorker.register('sw.js', { scope: '/tlacrm/' })
        .catch(error => console.log(`Service Worker failed to register, Error: ${error}`))
    console.log(reg.scope)
    const sub = await reg.pushManager.getSubscription();
    (sub === null) ? getPushSubscription() : console.log('You are subscribe to push notificaction')
}

async function getPushSubscription() {
    if (Notification.permission === 'granted') {
        const applicationServerKey = urlBase64ToUint8Array(publicVapidKey);
        const url = 'https://ev-server.ddns.net/api/tlacrm/users/subscribe';
        const reg = await navigator.serviceWorker.ready;
        const sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey })
        await fetch(url, {
            headers: { "Content-Type": "Application/Json" },
            method: "post",
            body: JSON.stringify(sub)
        })
    }
}

if ('serviceWorker' in navigator) runServiceWorker();

if ('Notification' in window) {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}