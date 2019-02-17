const webpush = require('web-push');
const publicVapidKey = "BH54HR9NEeTIQ36JskmMCoKMsM1EseYPAEv7O575VrgJ9xtXW3gh8nVO23PVwNWB8CDUCypLRBGU9jCiXkQVUZY";
const privateVapidKey  = "ZZjM202Zbg5qeyiIapP1s07xSJcGw9Tpbsn6iSkNNC8";
webpush.setVapidDetails('mailto:edgarvalli80@gmail.com', publicVapidKey, privateVapidKey);
module.exports = (sub, payload) => webpush.sendNotification(sub, JSON.stringify(payload))