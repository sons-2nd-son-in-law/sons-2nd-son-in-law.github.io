'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2fd8aed452f7b1f46b65e00a384ec833",
"index.html": "645c2c8135de5f20b44cbb499245f4bd",
"/": "645c2c8135de5f20b44cbb499245f4bd",
"CNAME": "33561a0cb64658c684a366003c774081",
"main.dart.js": "c1ddfda69029c26307200be53b8dcb52",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cef7b3a29f1f5c16b7d32051583374a0",
".git/config": "975ea2e914a3c229c4da8bc93cc193be",
".git/objects/0d/6e79df477a8785a33a50f32125b87bfff539db": "bc166f81b0c6745fea4efd652425e077",
".git/objects/92/0d461be63b3ebf76abf8c27771879ff38f594e": "270ce2ff683354831fb65db116347483",
".git/objects/66/f2f8cf65ae1882773bb232936803f2699e185c": "8ac7906d79ec398eb01957588525509e",
".git/objects/3b/8804b1a40c8cf1954ec7e0a10b687a148b91dd": "249d2fae274e92111a2565568a5c4a1a",
".git/objects/3b/85baf08220aca1f3bd51bf1f401e26a73f4f36": "6dc0d8ca305bcbe1ed50449302f27fdf",
".git/objects/9b/050c6782d4b7cefa6e1d4cdf5f42dac6015686": "cc25ea581b6b551f140f5942963ef134",
".git/objects/6a/19317e3532017f8c2bd29a9bfe87bf52d81530": "a1c6f211013955bf1a2e255e896544b9",
".git/objects/35/d7460d5afdb88a0feaacb0fa2fc93e0286944c": "5b584e3f8cc6e4be05ca9dc667febc30",
".git/objects/56/23e73a7a07ace04f2ff3fb3db0ab86c2713b9b": "bb75e0507f257f4014da257ea10d1272",
".git/objects/58/229fd9c361c4e05ae7f961362f5fe09136d664": "43edb35e84aceebd232d3323d0a3af54",
".git/objects/67/3cfd77bfbc1478ece620bef876ebced08b0d8f": "26bab41781a08af02867771eee75178f",
".git/objects/94/fe040e270bbf1176013837d38764c189309a76": "d65d176626c0ce19fc6d769cc250c16f",
".git/objects/02/4b08e0f19109a6d65f48163934e6a60649347a": "a9c2d8503a87320d7b7681081e413d43",
".git/objects/d9/4c670f97c73c86d13f3dc2399669ef711d4d76": "8b8601ffa7f769a90df273c4472a9838",
".git/objects/ac/62bda57977cfbd02e00784d2b9dc573141ca50": "1e1f380e5cb5a0b8908878d8d5862e7c",
".git/objects/ac/db59d7bc77620aee9204e126a40981ca1af825": "fa12403e6254c643b32cb290b0ab8ed0",
".git/objects/d7/523c264c6172e43eaaee148c81c477cc13d34a": "282befdd250e797fb7d33c998976eb78",
".git/objects/d0/5f19d2665a0ba1bb784f7f556693038f55d0c3": "b9c2adb17f98a53e1aec480d9f3b7b7b",
".git/objects/b4/13b84883cd6c9e598a075acfe2de1b83e9cf96": "4fc5287f47f7d4c3d5d0eebf3812c278",
".git/objects/bd/a4b36c4c03cc079ce2999a40da51b45b5168bc": "892d0afadd88776ba7866aa3337e2488",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/d736fe3c1f352164c03038b687e3a300fffc5a": "f4d1eb95c4158f891c2eede0bf431359",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/d5b411ebf134b917e6994d32f54795ec1c1f1f": "5f8b7e07b99b19f1d3ea743dfd4a074c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/32c73ac823d96d39cb97f68a3d27ef565482db": "dea4f387be0bc1ce7725826e17ce6de2",
".git/objects/e4/ca2b56293e66d8a4303ae9d306d30f9ef40079": "6be4c1c232103940106a5e0b8ef62955",
".git/objects/e4/3171484c7c8b7b356e834319c6b56f7bd13ff4": "829410cded7fb45a506b0eb38013ecaf",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/89/459c401a52981d4f8d601da29278f8c61fe1d9": "8e635675b2c3b9d9a144b95ddee4d5bb",
".git/objects/80/886df153ea69a822a549d9703316fd6fc21e3d": "40b2c27672908238c62a317db9d9f6a6",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/17/8d19dd7ea717263d13a48d3a769aa2bba62d10": "bc496a0e366a5547e8a6567a111d6546",
".git/objects/8f/2ae5d9b31d91931c2ec90714a22369cc82b542": "36ca78a59827670f7391d52d3e55459e",
".git/objects/8f/1caf5d54ac3f7d987e3821949ee16e9af1ceff": "d72bba6f60cf961b1b60c1b5a4fd9976",
".git/objects/8a/ed4a6e8c7e5c150858772acb08cd86149cf7c2": "2a9ff894b4b32effff89ead831fd0771",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/e4347982b983d82323d87ada3442c5fa33f7f1": "e2e83f58f76b85622bcc31dc5f6188ed",
".git/objects/21/422d8174e430d878cd7dce7f1c87dd769baf38": "ca733ab8377db95bedfe74634eae3dd6",
".git/objects/72/0d09087fcc8e3bc002de807ce90c0ef1d9a565": "16254a7694db5b37bf41f4965a32e188",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/c135d094d47357f8c15312b1a56ea5d52bf3ae": "5fb9d839490a02476c1f0c9cdfd99858",
".git/objects/6e/f30a5b6352a2f50ab2f885ff3032b703fa6352": "8bc21d7b53274cbe989fbd13dc388741",
".git/objects/9a/1e49878c647494035c5ad896a255bc8165d047": "1a2c891a4d70dc28755d26cbeba0af5f",
".git/objects/36/5edbc5ef159c5abae589d8fd67f7de5c17e592": "0319f0bb6a0362a8ecd6d81a37673056",
".git/objects/5c/63b37adf57b151bf481a2051a4423763c998d2": "19b21bc0a93d7eb356519e63f77be058",
".git/objects/91/b07d1b9482f2d9610e16fac178522d5cdf90c6": "e9d4e499d0d01290a7c7f5838ed95c5f",
".git/objects/3a/41fc9b44f91263e2dbcd5de243a2c3db6e61ef": "e22ad6cae2ec7c61c3305c2cef310c16",
".git/objects/54/c65cf6f55050368bdd5d0761392e943a7f12c8": "39fe05d86127bdcb98266676568d74ea",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5b/e0bfd81eda4a39da0c00877ca5440aa3c7e4a9": "9ba5e5537b4997bc8a2afe27ad3fa1fd",
".git/objects/08/79802cbf515a98304324342babbcb2c40328b6": "2bdc8174e24bcbf1b0a7418357fec5bd",
".git/objects/08/a34428e9aa78b430a136da20f8e472246fc155": "b5a8781fda160a940291015cddc0229c",
".git/objects/6d/e7afb14abd85fab033faa761535006abbb6428": "d31c8d6ff910c6dde15121144cc028df",
".git/objects/39/ad98c4b35782b9627662d57cf215025e62bdc6": "963497c169f9c560aadfd75f118ffee2",
".git/objects/97/cbf2ef0af95233150621e781ed6e7ceccc2519": "46cf645b1a79e16af674734e2091e651",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d3/52281e2292dc7b20252e314c4a8ff59fdf5313": "6869dfec8a247c1ae49674d92a151b20",
".git/objects/d4/46b63e57046d322af5316f8cb93c0b436c66c2": "416c63d81da58c8d4008152119d2a58f",
".git/objects/d4/014fd76b8f44ef6a56d94dbe18c9c006be60d2": "057a64644d59c1bb376f1886c0fd1ad2",
".git/objects/b8/954712e46d491742588b112e55b20a90c5b564": "35a1209a1b2516dec97fdd76cd79a26f",
".git/objects/aa/a9d9339c58ad55860654f53921006ba82e0775": "e584fcd962c6fed57f10ac003ffa27c2",
".git/objects/aa/93ff503575abd1debf064d0e716a63dab2ff4d": "99d4ed06fbac5787cd1323c64f4aaf3b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/b2c18678163f588f9ace0fea6ec4ebda0293a8": "9c4f6439960987c3c02f2d8a053a2da8",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/8393fb3be1d957ff6f80b000eeb0353c08b5f6": "fc0223a79bc4e27f4b90a6df14cc7e8d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/5bd8e0c3a1d1773eb14817331b919bd08e25a2": "26ad3cba7765e805079820ec08c20244",
".git/objects/ea/63b49b75d5d91459597be5e55db6dbca1b937f": "0c33f33cbd23e0ff7a51ed5f6567f24a",
".git/objects/ea/584e0af0064dd4ee1f074824c911b86a72e49d": "c0538e86dacb45d9d405136d075203de",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/438eb611001a52bdf828fb69e351b520986aa8": "229ca0999fa553be13ab0e744209baf2",
".git/objects/fa/83709e655ec6c0bc8396026a36ecbf903f7ea6": "3c1d9dcd399b4609c5d75a953b64e40d",
".git/objects/e9/5a5fd8736f8c6eafa8af920d3cd33010581053": "636b67affb77f101993e7d7a39e34208",
".git/objects/e7/c1a62c8eb94ffd11350e2a5021e0fcde6b5db6": "6196313cdbe0b5e2f1e04482223e28c4",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/3c959e9cc3af5ae66dc7db733b4206714f61ac": "67e2a452dca2a9176473f3e5b57cf017",
".git/objects/8d/216e8e1428c6b5e70e39205df9cde161c8b2e7": "7f10a47154189282f62922f8de6b6250",
".git/objects/85/be8fdd9ddd6cbda4c56a38d032e9e7c929aa4e": "4766ef1dbf1cc913284afc3211765595",
".git/objects/76/83adebc79ef2cde22326d40e853540ab26b2cc": "454db281b1a698cefcb28b96e07bc02f",
".git/objects/2e/a6750125501ae91a6356781daf2b46d938f230": "b9015292d9ffee8bf18155c2a36712f7",
".git/objects/2e/99438893752d3c442f3e4fc354d8f23a159734": "058146c8a42fa908ac3cf10f2f7770cf",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/14/d9dd19378df67d0cf4d26abb09590fcb08ee00": "14fe78ea81cef0d379dce2e4fd7d5081",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0f5c14f3290bad756cd8ba3f88a8bead",
".git/logs/refs/heads/main": "0f5c14f3290bad756cd8ba3f88a8bead",
".git/logs/refs/remotes/origin/main": "455d803bcf96ad60eb0086019ae902c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c82d2e378c6f67a4be47afcce7ede565",
".git/refs/remotes/origin/main": "c82d2e378c6f67a4be47afcce7ede565",
".git/index": "e2e240692cfbbba40b04889740149c07",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "a39b6c1572d86c62217cc51f45a6998d",
"assets/NOTICES": "28ce95269d40d29a7bc08ddf37ace305",
"assets/FontManifest.json": "00e7e0405d8d990fb25a313185682196",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "dde98b577eb037b1ad650b3d41187e5f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/correct_temp.jpg": "64c3c50329df5024d1affff9fbaa95b1",
"assets/assets/images/problems/8.jpg": "a68adb016bd0de790e5532f2f65c1a5c",
"assets/assets/images/problems/9.jpg": "b96dae15bd84ed41e19652ce0ed1ce45",
"assets/assets/images/problems/14.jpg": "e672e6e2e778693bc6316b2819a35393",
"assets/assets/images/problems/15.jpg": "506b3053c6837c2f99cdda383b0c35f6",
"assets/assets/images/problems/12.jpg": "49565ce8b4367fe3b816a1eac9ad23e9",
"assets/assets/images/problems/13.jpg": "feee7c6bc0e971c04d5f8007c311efb4",
"assets/assets/images/problems/11.jpg": "5e145af91c363212390fd93ff2bd4f0f",
"assets/assets/images/problems/10.jpg": "5f777f7bb54da0c125ca0b485e0451e4",
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
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
