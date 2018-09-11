if('Notification' in window) {
    if(Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}

if('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/sw.js', { scope: '/tlacrm/' })
    .then(reg => {
        if('pushManager' in  reg) {
            console.log(`Services Worker registered`)
        } else {
            alert('Push manager no supported')
        }
    })
    .catch(err => console.log(err));

}