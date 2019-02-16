if ('Notification' in window) {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}

const publicVapidKey = '';

const run = async () => {
    if ('serviceWorker' in navigator) {

        const reg = await navigator.serviceWorker.register('/tlacrm/sw.js', { scope: '/tlacrm/' }).catch(err => console.log(err));
        if ('pushManager' in reg) {

            const subscription = await reg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUnit8Array(publicVapidKey)
            })

            await fetch('https://ev-server.ddns.net/api/users/subscribe', {
                headers: { "Content-Type": "application/json" },
                method: "post",
                body: JSON.stringify(subscription)
            })

        } else {
            alert('Push manager no supported')
        }
    }
}