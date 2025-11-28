'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4648693f250f27002c5f59461ef72c7c",
"assets/AssetManifest.bin.json": "cef23b4b5a6ba053f4d3efcdb7d6ffd9",
"assets/AssetManifest.json": "83c7c7aad429698a52b271850dc705f4",
"assets/assets/fonts/digi.ttf": "1467e2d37ec60cc50117a8db7c24f626",
"assets/assets/fonts/host_grotesk.ttf": "f0c6f2d039ef124995cee5285b876252",
"assets/assets/fonts/stack_sans_text_bold.ttf": "48cc556e29c130ce4620e45d00faec42",
"assets/assets/images/background.webp": "0e74199a8bc51edb5ab28e8737173bee",
"assets/assets/images/board_background.webp": "7af5733a547f60eb266373bd32de142c",
"assets/assets/images/board_background_border.webp": "becf88f02a9f6530743d17c809889637",
"assets/assets/images/digital/board_background.webp": "0be373abb1b9f488c3481544dc8368be",
"assets/assets/images/ic_logo.webp": "49baed2509bdcc6a9d1e6e5202d0dbbd",
"assets/assets/images/metal/1.webp": "1135b925bd11dbf87cf64019835bab25",
"assets/assets/images/metal/10.webp": "f2d8dc0b887525220b5cffb7578d4726",
"assets/assets/images/metal/11.webp": "7409f6470faa7c9c8f4fef4f008b1156",
"assets/assets/images/metal/12.webp": "40b72d28c895f99ac21c3c661951b12c",
"assets/assets/images/metal/13.webp": "c9ee660db036cc792fec7f749fe1e1d8",
"assets/assets/images/metal/14.webp": "e6109e7e5e52b036a1132e3a59b79d65",
"assets/assets/images/metal/15.webp": "a5005f8325f7abcd984c459dcdc20769",
"assets/assets/images/metal/16.webp": "76e57044d70bfd72a88fe3ed9db1c62a",
"assets/assets/images/metal/2.webp": "5da908f30c289bbc1e135ebcf6e1670f",
"assets/assets/images/metal/3.webp": "b1b9720a78f7797483524c6dfa056876",
"assets/assets/images/metal/4.webp": "2db2cd470e094a2eb380b7362c9bbf87",
"assets/assets/images/metal/5.webp": "fb1750319a890eec50f0ccab727c2431",
"assets/assets/images/metal/6.webp": "995526e3a7f02a05911875f229f5a7e3",
"assets/assets/images/metal/7.webp": "626d8f6a05f9dee69bae1282c15b9f6c",
"assets/assets/images/metal/8.webp": "958c5cbdb45d9b9094eb99de6d581137",
"assets/assets/images/metal/9.webp": "df83f76fba5b3111df54e0a520238834",
"assets/assets/images/metal/board_background.webp": "ce7a8f172153a1cf1bf7044534d978bb",
"assets/assets/images/style/digital.webp": "500d7fd3bec0c49064e1f6348af981af",
"assets/assets/images/style/glass.webp": "1d45246c8e070a0d637a0395cb657225",
"assets/assets/images/style/metal.webp": "f2929c7d685e03afb537d98a8262a5c1",
"assets/assets/images/style/neon.webp": "a5ed62644de7724b73e831522a33534a",
"assets/assets/images/style/wood.webp": "c5179e02ca5ef8514db777d4430a9fc5",
"assets/assets/images/wood/1.webp": "54fef1def66df888f9d992229aae3361",
"assets/assets/images/wood/10.webp": "cbb545acb617bf5cabc7ed9992c1b34f",
"assets/assets/images/wood/11.webp": "19809bb299b54c19e433350dd9ddd9ee",
"assets/assets/images/wood/12.webp": "d2af9e69a321d3e39bf38cabf64c2105",
"assets/assets/images/wood/13.webp": "615d766da51f99e386a6035830c968c0",
"assets/assets/images/wood/14.webp": "8f0e90f03218984cddc42f878bdeadf5",
"assets/assets/images/wood/15.webp": "2c5e5c81c9eafe625d0c82bb9de8cfd2",
"assets/assets/images/wood/16.webp": "024da7f6a67415808f8889959bcd6cec",
"assets/assets/images/wood/2.webp": "0517cc817e4eb7dc8f9150ea61c75f3d",
"assets/assets/images/wood/3.webp": "c732a09ff4063980fcbc51ea08722cf2",
"assets/assets/images/wood/4.webp": "e09377893bb907df902ec813305462c0",
"assets/assets/images/wood/5.webp": "c6a845171f2d72529a096d0396975246",
"assets/assets/images/wood/6.webp": "ec42253ad84f6bc6ebef772d393a1a82",
"assets/assets/images/wood/7.webp": "8fab419977d15d7f3ab3cc47d08ff3e7",
"assets/assets/images/wood/8.webp": "305c0103675694e4dd54d73f2dae39c0",
"assets/assets/images/wood/9.webp": "e9a97a354cbda3d9e21c426c10e24c47",
"assets/assets/images/wood/board_background.webp": "7af5733a547f60eb266373bd32de142c",
"assets/assets/sounds/metal.mp3": "2b34ce88f88ca8861c322ea7826aaf03",
"assets/assets/sounds/move.mp3": "1d6fb1bcec6e1450bf6dbdf95b0c4753",
"assets/assets/sounds/wood.mp3": "1d6fb1bcec6e1450bf6dbdf95b0c4753",
"assets/assets/translations/de.json": "982fa8c68f333cb74a434c5678fed1bf",
"assets/assets/translations/en.json": "5d056c0e21baf92eca2271a496621fe6",
"assets/assets/translations/es.json": "a634124915c54eba96118f5e67d90b82",
"assets/assets/translations/fr.json": "a7bbe53e00f89a299db90c1c28b61472",
"assets/assets/translations/ja.json": "013946cf48d8cf425a3c2f0c73fe0fc4",
"assets/assets/translations/ko.json": "d4b02b208b5b4ee2e968adc8855bdefd",
"assets/assets/translations/pt.json": "267f3762d8930f17413c9d9698e64d7e",
"assets/assets/translations/ru.json": "3476c0118a4953e4da283ae6d9b1b4f3",
"assets/assets/translations/vi.json": "4aa3f95732270899cc77feca2d244ab0",
"assets/assets/translations/zh.json": "f3181a437ec9bcee3807f24d9de8c076",
"assets/FontManifest.json": "a7d8ef3754bb75ab716153256a345acc",
"assets/fonts/MaterialIcons-Regular.otf": "131dbe5e8ca1f01d155edd8b4b579c8b",
"assets/NOTICES": "29eba9e2593085f11df3b28977b1444d",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_neumorphic_plus/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/packages/sst_base/assets/fonts/NotoSans-Bold.ttf": "28c191ce33ca36e0f75106491846de68",
"assets/packages/sst_base/assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/packages/sst_base/assets/images/achievement.webp": "179e1bc0c88d378ff4cb011d92be044b",
"assets/packages/sst_base/assets/translations/de.json": "6a131aa6505813fa9b3aaa51c83ae0c5",
"assets/packages/sst_base/assets/translations/en.json": "0f178be98183c23d7c655ece5dc6c8d9",
"assets/packages/sst_base/assets/translations/es.json": "03b9863885ed312128e4c4556a45a1dc",
"assets/packages/sst_base/assets/translations/fr.json": "f9c59ab9412b4d626dc6de3ebe8db00c",
"assets/packages/sst_base/assets/translations/ja.json": "71f3c4708d59f761f0cc60661d18be4a",
"assets/packages/sst_base/assets/translations/ko.json": "657b17a760d136f9384e922b155c311f",
"assets/packages/sst_base/assets/translations/pt.json": "cc7f26174da1332ca3c625184a5c25d0",
"assets/packages/sst_base/assets/translations/ru.json": "f8bac1550fc4c6fabd6f950eae5adf2f",
"assets/packages/sst_base/assets/translations/vi.json": "49a5e33822b876f46ae44927326be247",
"assets/packages/sst_base/assets/translations/zh.json": "972a3d708c456eda1e4a3308cd81e41e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "bc178dd7aac064061aa39abd94a6a9af",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "68de104ae558a9ec14105c1bdbdbaac1",
"icons/Icon-192.png": "252111c799463d921eb815267cf529df",
"icons/Icon-512.png": "e80265802e5dbc3e2f2cb8353dd24841",
"icons/Icon-maskable-192.png": "252111c799463d921eb815267cf529df",
"icons/Icon-maskable-512.png": "e80265802e5dbc3e2f2cb8353dd24841",
"index.html": "ab3ffa4181d8f037b705c7b5be13d343",
"/": "ab3ffa4181d8f037b705c7b5be13d343",
"main.dart.js": "777af4955f881117386da8160e4a3743",
"manifest.json": "db5a28cb464ac09ad88785ae09d7c83e",
"version.json": "52fbd5d00e9591a74715180049a67412"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
