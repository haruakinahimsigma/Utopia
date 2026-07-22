self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Only intercept Scramjet traffic
  if (url.pathname.startsWith("/scram/")) {
    event.respondWith(handleScramjet(event.request));
    return;
  }

  // Everything else → normal
  event.respondWith(fetch(event.request));
});

async function handleScramjet(req) {
  // Lazy-load Scramjet engine
  if (!self.scramjetEngine) {
    importScripts("/scram/scramjet.bundle.js");
    importScripts("/scram/scramjet.sync.js");
    importScripts("/scram/scramjet.all.js");

    const configModule = await import("/scram/proxy.config.js");
    self.scramjetEngine = await self.Scramjet.start(configModule.default);
  }

  return self.scramjetEngine.fetch(req);
}
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Only intercept Scramjet traffic
  if (url.pathname.startsWith("/scram/")) {
    event.respondWith(handleScramjet(event.request));
    return;
  }

  // Everything else → normal
  event.respondWith(fetch(event.request));
});

async function handleScramjet(req) {
  // Lazy-load Scramjet engine
  if (!self.scramjetEngine) {
    importScripts("/scram/scramjet.bundle.js");
    importScripts("/scram/scramjet.sync.js");
    importScripts("/scram/scramjet.all.js");

    const configModule = await import("/scram/proxy.config.js");
    self.scramjetEngine = await self.Scramjet.start(configModule.default);
  }

  return self.scramjetEngine.fetch(req);
}
