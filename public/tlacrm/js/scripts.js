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
    const reg = await navigator.serviceWorker.register('sw.js')
        .catch(error => console.log(`Service Worker failed to register, Error: ${error}`))
    let sw;
    if (reg.installing) sw = reg.installing;
    if (reg.waiting) sw = reg.waiting;
    if (reg.active) sw = reg.active;

    sw.addEventListener('statechange', event => {
        if(event.target.state === 'redundant') {
            console.log(reg)
        }
    })
}

async function removeOldServiceWorkers() {
    const regs = await navigator.serviceWorker.getRegistrations();
    console.log(regs)
    if (regs.length > 0) {
        for (let reg in regs) {
            reg.unregister();
        }
    }
}

if ('serviceWorker' in navigator) {
    runServiceWorker();
}

if ('Notification' in window) {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}
