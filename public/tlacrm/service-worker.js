"use strict";
const filesCached = [
    "/tlacrm/index.html",
    "/tlacrm/js/bundle.js",
    "https://file.myfontastic.com/LpaNVieK9xfRW9cGNAmv4F/icons.css"
];

["main", "profile","home","login", "navbar", "buttons", "inputs", "list_view","checkbox", "jobs", "modal", "card"].forEach(el => {
    filesCached.push(`/tlacrm/static/css/components/${el}_style.css`)
})

self.addEventListener("install", function(ev){
    console.log("Services Worker installed")
    ev.waitUntil(
        caches.open("TlaCrm_Cache").then(cache => {
            return cache.addAll(filesCached)
        })
    )
})