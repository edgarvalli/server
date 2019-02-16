if ('Notification' in window) {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}

const publicVapidKey = 'BBEfQAx0ElNnHqshBMXFwq1S1v1ATenBeMF3z5-hQ9X8lwFIiwkYmunwBv3pamrzYDvw2H-A3K2qwrcNlc6jfm0';

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

run();


self.addEventListener('push', ev => {
    const data = ev.data.json();
    self.registration.showNotification(data.title, {
        body: data.message
    })
})