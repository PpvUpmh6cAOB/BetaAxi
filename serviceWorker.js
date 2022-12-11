const staticDevAxi = "Axolo-Quest"
const assets = [
  "index.html",
  "css/estilos.css",
  "js/nucleo.js",
  "img/arena.png",
  "img/axi.png",
  "img/basura1.png",
  "img/basura2.png",
  "img/burbujas.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevAxi).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })