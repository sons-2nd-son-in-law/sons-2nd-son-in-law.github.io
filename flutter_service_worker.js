'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2fd8aed452f7b1f46b65e00a384ec833",
"index.html": "960d8c3893b85c9831944965caf730fd",
"/": "960d8c3893b85c9831944965caf730fd",
"main.dart.js": "ffcad3c58df41b2592bab0151f24418f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cef7b3a29f1f5c16b7d32051583374a0",
"assets/AssetManifest.json": "58faa50e348fd37d8c9bf0849ea577d8",
"assets/NOTICES": "d356fba7fe9ecded952b8cdcc82f1b7c",
"assets/FontManifest.json": "00e7e0405d8d990fb25a313185682196",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "af794d95f1542acd0238faaa06a92d2b",
"assets/fonts/MaterialIcons-Regular.otf": "18344c94fec0857f047f3554a6e78674",
"assets/assets/images/correct_temp.jpg": "64c3c50329df5024d1affff9fbaa95b1",
"assets/assets/images/problems/8.jpg": "a68adb016bd0de790e5532f2f65c1a5c",
"assets/assets/images/problems/9.jpg": "b96dae15bd84ed41e19652ce0ed1ce45",
"assets/assets/images/problems/14.jpg": "e672e6e2e778693bc6316b2819a35393",
"assets/assets/images/problems/15.jpg": "506b3053c6837c2f99cdda383b0c35f6",
"assets/assets/images/problems/12.jpg": "49565ce8b4367fe3b816a1eac9ad23e9",
"assets/assets/images/problems/13.jpg": "feee7c6bc0e971c04d5f8007c311efb4",
"assets/assets/images/problems/11.jpg": "5e145af91c363212390fd93ff2bd4f0f",
"assets/assets/images/problems/10.jpg": "5f777f7bb54da0c125ca0b485e0451e4",
"assets/assets/images/problems/hidden_3.png": "ff5cfbb6ee9652e878d2d8b3b18d92f3",
"assets/assets/images/problems/hidden_2.png": "0a0a267013e18725b1f5d59715dcbb1a",
"assets/assets/images/problems/hidden_1.png": "c69e2a2eb0344361e7568bfb5e8ab0dc",
"assets/assets/images/problems/4.jpg": "230e68109f60d4f6d20a1298e6816ec4",
"assets/assets/images/problems/5.jpg": "ecdb0fd277ed4b2a2bb93b6528f3ac1a",
"assets/assets/images/problems/7.jpg": "0a400b636f80ae2e2d4cedda0f8d0a63",
"assets/assets/images/problems/6.jpg": "a03567317195ccf2cb75f2feb2d690ae",
"assets/assets/images/problems/2.jpg": "6b54ea4b6b7d5022d624199bfa06528c",
"assets/assets/images/problems/3.jpg": "38365b0c638a13cb0d9add3f27bb4649",
"assets/assets/images/problems/1.jpg": "8dfeea006261f8308badc392a55aa981",
"assets/assets/images/problems/0.jpg": "7d80a2ecaa2f845817bf0e4b8ac4e19f",
"assets/assets/images/main_1.jpeg": "3602bcf481e0401af1380f43e4ae2eb3",
"assets/assets/images/wrong.gif": "741d901db0c74d133d5e10b4871ce682",
"assets/assets/images/wrong_temp.jpg": "1277c6394f351a2ac6ed2657a66ecab3",
"assets/assets/images/correct.gif": "415bf789ee228240bdac9fe06c1b19f7",
"assets/assets/images/main_2.jpeg": "65e92fc42be6e2170eafa091372d6a0d",
"assets/assets/images/main_3.jpeg": "2910e9fac1883edd0de0af9144df203a",
"assets/assets/images/example_img_1.png": "630da6f95a5649fb714e515ff90fe213",
"assets/assets/images/main_4.jpeg": "49e87564cf653fee4e781dcfb0c5a26f",
"assets/assets/images/badges/8.png": "1e44b9c0d59ff9f41e749395f4432984",
"assets/assets/images/badges/9.png": "381aa0b136425148931317ec6d79d0b0",
"assets/assets/images/badges/14.png": "4727dd8c364913dddc898986de3341cc",
"assets/assets/images/badges/15.png": "ae118eb7a173f26b9f38cc38942880c0",
"assets/assets/images/badges/12.png": "4278a90e9ad74844090a2625fae2376d",
"assets/assets/images/badges/13.png": "a1dcd947a7b333f95a25d52771754e5e",
"assets/assets/images/badges/11.png": "5dbf5a42c322ae5b995eeaf3d79baa19",
"assets/assets/images/badges/10.png": "90ee654f34e8c16f2422522804c23e32",
"assets/assets/images/badges/last.png": "e7dc6bf7bbfb81cc9b9cb5880ad9b06b",
"assets/assets/images/badges/4.png": "a2197bca91c13c562893c131cd0d862f",
"assets/assets/images/badges/5.png": "f43a09879bef6856d79c889bca22e5b8",
"assets/assets/images/badges/7.png": "e01c8121cc722b63fa1675c64ac2be24",
"assets/assets/images/badges/6.png": "ff13fb054ca14393af67c711f4b032da",
"assets/assets/images/badges/2.png": "ed4f49ace8ceff1842f739cff46fd5e0",
"assets/assets/images/badges/3.png": "8c074ae67a8eec7888e9d5be1e1e2403",
"assets/assets/images/badges/1.png": "ae6dac69e3a799936b38742619d2e062",
"assets/assets/images/finale.jpeg": "0c9ee9771699b1a49b0f6e8167ac274e",
"assets/assets/fonts/DidotRegular.ttf": "251039e6849ad977a8bfc40b564dce89",
"assets/assets/fonts/AtlantideStarlight.ttf": "d6fe9d1ea72e87c8f43e0e4456e2d466",
"assets/assets/fonts/210_L.ttf": "60ab85363038f7b22c26fe0860153b39",
"assets/assets/fonts/NanumBarunGothicBold.otf": "4f50b8678a5cf8f3c39e6b2e5430af24",
"assets/assets/fonts/NanumBarunGothic.otf": "d11ade1ea8c7ce5896e5806c45e30eda",
"assets/assets/fonts/NanumBarunGothicLight.otf": "a78ff05521dd156eac459117836eb6a0",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
