'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ae7cd5d50dd24aa2f778067c0a4062da",
"assets/AssetManifest.bin.json": "e3d5a83913986ad5df58369ee3e47aab",
"assets/AssetManifest.json": "ea5b001858f1c091f0106a89e2a2a2fa",
"assets/assets/fonts/digi.ttf": "1467e2d37ec60cc50117a8db7c24f626",
"assets/assets/fonts/host_grotesk.ttf": "f0c6f2d039ef124995cee5285b876252",
"assets/assets/images/background.webp": "0e74199a8bc51edb5ab28e8737173bee",
"assets/assets/images/board_background.webp": "7af5733a547f60eb266373bd32de142c",
"assets/assets/images/board_background_border.webp": "becf88f02a9f6530743d17c809889637",
"assets/assets/images/ic_logo.webp": "2070d18548e77cfb33d0b4661bf8a5f8",
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
"assets/assets/images/style/metal.webp": "f2929c7d685e03afb537d98a8262a5c1",
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
"assets/assets/translations/de.json": "ad6c7c9fd009596d6c458172ad419e24",
"assets/assets/translations/en.json": "466a4fbdc869f14de114b99b3f9b6628",
"assets/assets/translations/es.json": "bed7e1c406b9b387f951833b8ae5e93c",
"assets/assets/translations/fr.json": "7da342ff695593879de04fc1cc3a8234",
"assets/assets/translations/ja.json": "d6bcc966d4c970b0aa22f5c8fe1e741f",
"assets/assets/translations/ko.json": "04b7752a43183a340cbfacdec78668ba",
"assets/assets/translations/pt.json": "56af69dac9d5f9b773d80a5ec0710c83",
"assets/assets/translations/ru.json": "b49f2eb4b08beaf813a52e7fb604b90e",
"assets/assets/translations/vi.json": "c4a47261405a0d5ccfee6971464e1874",
"assets/assets/translations/zh.json": "22b9bd2acfe40a5dcc642130950409f6",
"assets/FontManifest.json": "8a94c3266ef507e63cebebd35ab05115",
"assets/fonts/MaterialIcons-Regular.otf": "01491f1da6828fa412aa36a5f188d57a",
"assets/NOTICES": "0054fab9ef83ffcec8a18edb1a6628fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_neumorphic_plus/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
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
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "fb491590de382fc58352cc4e8f1bf695",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d19ce6c4b7a1afee668d08a81341e800",
"icons/Icon-192.png": "f8e8a1283ecb700f79a03fca9a278984",
"icons/Icon-512.png": "8d877e034148e7ac8a769eb502ebf40b",
"icons/Icon-maskable-192.png": "f8e8a1283ecb700f79a03fca9a278984",
"icons/Icon-maskable-512.png": "8d877e034148e7ac8a769eb502ebf40b",
"index.html": "8dfa298cca90ea4d41c3e9c8f0a1f509",
"/": "8dfa298cca90ea4d41c3e9c8f0a1f509",
"main.dart.js": "f1b317b03ec23dc6695c99b49af41368",
"manifest.json": "6427c74215f933cd320b0ddcc260642b",
"version.json": "5b37454ad48e8da55e8db330e41579c4"};
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
