const VERSION = 'v1'

// pre cache
self.addEventListener('install', event => {
    event.waitUntil(precache())
})

// request the fetched data
self.addEventListener('fetch', event => {
    const request = event.request
    // only get, since post, delete or put gives undesired data
    if (request.method !== 'GET') return

    // search in cachec
    event.respondWith(cachedResponse(request))

    // Avoidance user loading old versions requires updating cache
    // update cache
    event.waitUntil(updateCache)
})

// list of all files wanted to save on cache
async function precache () {
    const cache = await caches.open(VERSION)
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.js',
        // '/assets/index.css',
        // '/assets/Rumbling.mp4',
        // '/assets/icons/pause.png',
        // '/assets/icons/play.png',
        // '/assets/icons/favicon.ico',
    ])
}

// If user loads website offline, will see all cached website still.
async function cachedResponse (request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}

// Update Cache Handler
async function updateCache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}