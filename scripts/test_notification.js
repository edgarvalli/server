const sendNotification = require('web-push');
const sub = {
    endpoint:
        'https://fcm.googleapis.com/fcm/send/cCAliKEvWnc:APA91bFaCl4rYgH2HaLP4NZdmMMDz7z_inD7o8Yn2z-6a7GuSvHYQcPOeTFTtZvY5dfoh2-Q4DXUwFngtshVesy0JUpH1oBA5vRvPMXuRDQ3PQtTZs2Kj6kcQOMH_oBwS3pGnu9yCWkZ',
    expirationTime: null,
    keys:
    {
        p256dh:
            'BMrISt2lq14RiAwxB0QykX2Vn2rwCqRpHAPZaLIVjyqlyb5PGoxN0DoMxVHaD3YV1tP55aCuBPe1WoFRPM_f_oE',
        auth: 'NiUoO0nBQ4E6LTaumUJT2w'
    }
}

sendNotification(sub, {
    title: 'Tlacrm Notification',
    message: 'Esto es una prueba',
    icon: 'https://ev-server.ddns.net/tlacrm/images/icons/icon_16x16.png'
})