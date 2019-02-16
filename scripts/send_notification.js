const webpush = require('web-push');
const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails('edgarvalli80@gmail.com', publicVapidKey, privateVapidKey);

webpush.sendNotification()