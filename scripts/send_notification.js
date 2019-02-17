const webpush = require('web-push');
const publicVapidKey = "BH54HR9NEeTIQ36JskmMCoKMsM1EseYPAEv7O575VrgJ9xtXW3gh8nVO23PVwNWB8CDUCypLRBGU9jCiXkQVUZY";
const privateVapidKey  = "ZZjM202Zbg5qeyiIapP1s07xSJcGw9Tpbsn6iSkNNC8";

webpush.setVapidDetails('mailto:edgarvalli80@gmail.com', publicVapidKey, privateVapidKey);
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