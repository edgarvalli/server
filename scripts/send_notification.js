const webpush = require('web-push');
const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails('edgarvalli80@gmail.com', publicVapidKey, privateVapidKey);
const sub = {
    endpoint:
        'https://fcm.googleapis.com/fcm/send/d6LrQ0CAiBM:APA91bHkuvRahLZUAkrN-xRuIgnjIKinObdbKdX-FtmRsXRwUhkxi-mUgaimpdA2msw161xRBAy57zm_qHHKQzToVJlP5KKYoYnPgRttC6Qxi_6RVh3x9-zoO9_sCgnVCrHWQtkgacIR',
    expirationTime: null,
    keys:
    {
        p256dh:
            'BN0yCO6OxgIZUCTZG33_9SD8x2zAuRiCUlRh9c057kkAmcKdkQmJcUJv4_t96ZF1kytK2F8rKettvS4HQ40zmCQ',
        auth: 'Ip688n2xsLMi3CRR_mnsTQ'
    }
}

webpush.sendNotification(sub, {title: 'TlaCrm Notification', message:'Prueba de notificación'})