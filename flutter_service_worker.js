'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3a131c3f563f767e7e60b4591c882ad2",
"assets/assets/allied_app_icon.png": "79f87576fb9d0b0741a81902951e6255",
"assets/assets/allied_app_icon_old.png": "12d4abe2803b8a92a78f65031feb502b",
"assets/assets/allied_bg.jpg": "37c6d940dfe82b077fa56671b8cdd1b9",
"assets/assets/allied_handshake.png": "f7c39091467306a4f89415026d9e188c",
"assets/assets/allied_handshake_trans.png": "c512201e6a6e8c512f36175c1f4c335f",
"assets/assets/allied_handshake_trans_new.png": "4909f01dcd5f44176ca76a2cf80808ee",
"assets/assets/allied_login_bg.png": "aa9fd2e95e7d9e94e6a278d8943f8eae",
"assets/assets/allied_logo.png": "6e51604614ccb886f85bddf3e3f2f199",
"assets/assets/Approved.png": "ed68a2e03e23c7298929650408078655",
"assets/assets/br_bg.png": "349a19a23bd3df87ebb0ffa462c57190",
"assets/assets/br_login_logo.png": "8063365d2daad058864e8c022baca687",
"assets/assets/burque_app_icon.jpg": "85b45c275e580af5b69798c78f021467",
"assets/assets/cat_baby_kids.jpg": "1eebe5b7385eb1a84617e1d35ac00ae1",
"assets/assets/cat_grocery.jpg": "817cf1f7ea2258c0820846bec13354b8",
"assets/assets/cat_home_kitchen.jpg": "8e1d77811b585127032017ffbc2522a8",
"assets/assets/cat_household.jpg": "2c7e9745683ee6c6033f33c92eb5cb58",
"assets/assets/cat_personal_care.jpg": "b16482f47fa38313213b49ca14d6b26a",
"assets/assets/cat_pharmacy.jpg": "1d1602efb065abe26e5418b2a071faa7",
"assets/assets/cat_snacks.jpg": "22d9f0cc6932c7e604f2ef92dd3b6d8a",
"assets/assets/cat_tobacco.jpg": "a7bf4360d3691ac003b6eacad34b02f3",
"assets/assets/cat_tobacco_leaf.jpeg": "383d52a1ff2bc28bfd3421e2a47b170e",
"assets/assets/google_fonts/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/assets/google_fonts/Poppins-BoldItalic.ttf": "5bda2710554b202e3e69cf2ec4e0e663",
"assets/assets/google_fonts/Poppins-Italic.ttf": "89c81a3cbc00c32cbe1b28561029be0d",
"assets/assets/google_fonts/Poppins-Medium.ttf": "ba95810b56f476990ca71d15139d5111",
"assets/assets/google_fonts/Poppins-MediumItalic.ttf": "9e911c68b683bfce45bb6effc5403b1d",
"assets/assets/google_fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/google_fonts/Poppins-SemiBold.ttf": "342ba3d8ac29ac8c38d7cef8efbf2dc9",
"assets/assets/google_fonts/Poppins-SemiBoldItalic.ttf": "0fc816cbaaddf3d5b8c6b00c4acddf58",
"assets/assets/green_handshake.png": "17c884cabacd91e44acc2443927db893",
"assets/assets/ic_placeholder.png": "e9be2d8f75c2f706ea7a7bbf1cb92ea6",
"assets/assets/lng/en.json": "b018cfb97e793224ec0b12ab6221a8fc",
"assets/assets/lng/ur.json": "17e3f79f5b1ef4fe0d45a41392381e92",
"assets/assets/lotte_logo.png": "4866bc1d40336dc0a4b585d84dd02519",
"assets/assets/ltab_7up.png": "e4a749940877a9d02ea411c24b12a18f",
"assets/assets/ltab_aquafina.png": "520a1c74963cdb2f1ceec6acd5ed8f29",
"assets/assets/ltab_banner.png": "20e13466a4c12f9fee948cd20cf73a7b",
"assets/assets/ltab_dew.png": "3a710ff2363847ea3701d41545daac18",
"assets/assets/ltab_gatorade.png": "81adbd82eaea8e39f2e03d6442850a3b",
"assets/assets/ltab_mirinda.png": "8e2b6e2c03054d02d8e84b541da72784",
"assets/assets/ltab_pepsi.png": "d3c71bf16a6e93abb914146a1651a230",
"assets/assets/ltab_sect_01.png": "34d8fd9b0da38fd5e73ba9915ad0caf1",
"assets/assets/ltab_sect_02.png": "8a3fd3e209189c6626dff88c9b566894",
"assets/assets/ltab_sect_03.png": "5c8329a32636629900243592d02ed892",
"assets/assets/ltab_slice.png": "390a797e5c9a9331faabc876e9c4c09b",
"assets/assets/ltab_sting.png": "ecd87cdbb2ea00059294b8fbcccf77a7",
"assets/assets/pak_tobacco_logo.png": "0b2119c89548d36c30085a920493ff71",
"assets/assets/Pending.png": "0a62564e885e9967273b482190c66235",
"assets/assets/sect_01.png": "98467b7f4c513aba981ca491659c5d6b",
"assets/assets/sect_02.png": "b6b60fa07ee933491c4b24892bbb70b5",
"assets/assets/sect_03.png": "46876c804ab5e284e349fd7360e8a880",
"assets/assets/tmx_app_icon.png": "1f15dd2c344a2a87c8910267d9a81a72",
"assets/assets/tmx_logo.png": "5c53fb10b2bcbbcf54e5f264de584308",
"assets/assets/tobacco_leaf_2.jpg": "789427b043b1563411d2c6a52237c8ac",
"assets/assets/velo_banner.jpg": "0c7b48b348d5ce71a4aaf95d08edf57b",
"assets/FontManifest.json": "c199e0ac790d25d24172253a0e1ba65e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "753cb43443024b7b09cc9d66ebe71a44",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b627bafec37ab4cd52101e5b62bd3a8e",
"/": "b627bafec37ab4cd52101e5b62bd3a8e",
"main.dart.js": "6400d3437ec84fe19bfc248a801e624e",
"manifest.json": "7d174d0ba2ecd35d4426e5519424158a",
"version.json": "d873273f49bb25b535d6f8a4a1101cc2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
