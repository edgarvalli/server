/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/precache-manifest.cb7ff94821c6caa046aa976bad6642cd.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html", {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});

self.addEventListener('push', e => {
  const n = e.data.json();
  e.waitUntil(
      self.registration.showNotification(n.title, {
          body: n.message,
          icon: n.icon,
          badge: 'https://ev-server.ddns.net/tlacrm/images/icons/icon_16x16.png'
      })
  )
})

self.addEventListener('notificationclick', function (e) {
  const url = 'https://ev-server.ddns.net/tlacrm/';

  e.notification.close();

  if (clients.openWindow) {
      return clients.openWindow(url);
  }
});
