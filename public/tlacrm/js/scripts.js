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

const run = async () => {

    const reg = await navigator.serviceWorker.register('/tlacrm/sw.js', { scope: '/tlacrm/' }).catch(err => err);
    if ('pushManager' in reg) {

        const subscription = await reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: convertDataURIToBinary(publicVapidKey)
        })

        console.log(subscription)

        await fetch('https://ev-server.ddns.net/api/users/subscribe', {
            headers: { "Content-Type": "application/json" },
            method: "post",
            body: JSON.stringify(subscription)
        })

    } else {
        alert('Push manager no supported')
    }
}

if ('serviceWorker' in navigator) {
    console.log('Registering service worker');

    run().catch(error => console.error("Ocurrio un error: " + error));
}