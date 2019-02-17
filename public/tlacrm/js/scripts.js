if ('serviceWorker' in navigator) {
    runServiceWorker();
    // console.log('Registering service worker');

    // navigator.serviceWorker.register('serviceworker.tlacrm.js', { scope: '/tlacrm/' }).then(reg => {
    //     let sw;
    //     if (reg.installing) sw = reg.installing;
    //     if (reg.waiting) sw = reg.waiting;
    //     if (reg.active) sw = reg.active;

    //     sw.addEventListener('statechange', function (e) {
    //         if (e.target.state === "activated") {

    //             console.log("Just now activated. now we can subscribe for push notification");
    //             const applicationServerKey = urlBase64ToUint8Array(publicVapidKey);

    //             reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey })
    //                 .then(sub => {
    //                     fetch('https://ev-server.ddns.net/api/tlacrm/users/subscribe', {
    //                         headers: { "Content-Type": "application/json" },
    //                         method: "post",
    //                         body: JSON.stringify(sub)
    //                     }).catch(error => error)
    //                 })
    //                 .catch(error => console.log(`Error al suscribirse ${error}`))
    //         }
    //     })
    // }).catch(error => console.log(`Error al registrar el service worker ${error}`))
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

async function runServiceWorker() {
    const reg = await navigator.serviceWorker.register('sw.js').catch(error => console.log(`Service Worker failed to register, Error: ${error}`))
    console.log(reg.scope)
}