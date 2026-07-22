export default {
  wasm: "/scram/scramjet.wasm.wasm",
  bundle: "/scram/scramjet.bundle.js",
  sync: "/scram/scramjet.sync.js",
  all: "/scram/scramjet.all.js",

  html: "/scram/proxy.html",

  rewrite: {
    prefix: "/scram/",
    inject: true,
    cookies: true,
    headers: true,
  },

  engine: {
    wasmThreads: true,
    streaming: true,
    optimize: true,
  }
};
