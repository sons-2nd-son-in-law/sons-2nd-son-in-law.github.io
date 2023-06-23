'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2fd8aed452f7b1f46b65e00a384ec833",
"index.html": "ea704c230e613a30c0a4a015cf42de2a",
"/": "ea704c230e613a30c0a4a015cf42de2a",
"CNAME": "42da1ad050a51f1420267f2f44cd97fa",
"main.dart.js": "dd06a02383b224b9742a30858f39d170",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cef7b3a29f1f5c16b7d32051583374a0",
".git/config": "654df2ded7c12d6e841bc09d60963673",
".git/objects/0d/6e79df477a8785a33a50f32125b87bfff539db": "bc166f81b0c6745fea4efd652425e077",
".git/objects/92/0d461be63b3ebf76abf8c27771879ff38f594e": "270ce2ff683354831fb65db116347483",
".git/objects/68/ac5c6d64c1d13765ab6d2f404ac31724f5af0e": "076cccfbe73e3a5b1c6201efd2ed55b0",
".git/objects/57/ab33abe00797b780bb0d5c4135eb9f4265d31c": "b7a893431a9e11d5cdcdf39f59344ddf",
".git/objects/3b/8804b1a40c8cf1954ec7e0a10b687a148b91dd": "249d2fae274e92111a2565568a5c4a1a",
".git/objects/3b/85baf08220aca1f3bd51bf1f401e26a73f4f36": "6dc0d8ca305bcbe1ed50449302f27fdf",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/6a/19317e3532017f8c2bd29a9bfe87bf52d81530": "a1c6f211013955bf1a2e255e896544b9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/d7460d5afdb88a0feaacb0fa2fc93e0286944c": "5b584e3f8cc6e4be05ca9dc667febc30",
".git/objects/51/3fa86a26811369783460abe0f99e50c13bb10e": "3570df7cee1119d7ef80c9e8b5ff4650",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/229fd9c361c4e05ae7f961362f5fe09136d664": "43edb35e84aceebd232d3323d0a3af54",
".git/objects/67/3cfd77bfbc1478ece620bef876ebced08b0d8f": "26bab41781a08af02867771eee75178f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/fe040e270bbf1176013837d38764c189309a76": "d65d176626c0ce19fc6d769cc250c16f",
".git/objects/5a/c4a355542c1694a0a280a45145818454cd884c": "8db0fbd38e3992ce396562fd7b22e402",
".git/objects/9c/6caeadd124cd6e05c4e5a117b1c8b9e0db8a3c": "f25b5b2493f805bcb45330a16b85f8a1",
".git/objects/02/4b08e0f19109a6d65f48163934e6a60649347a": "a9c2d8503a87320d7b7681081e413d43",
".git/objects/a3/e11308a3e6de73e6b6001f3841176ff430abac": "b5e82b105e196e52bcc8398c2c9408e0",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/d9/4c670f97c73c86d13f3dc2399669ef711d4d76": "8b8601ffa7f769a90df273c4472a9838",
".git/objects/ac/62bda57977cfbd02e00784d2b9dc573141ca50": "1e1f380e5cb5a0b8908878d8d5862e7c",
".git/objects/ac/db59d7bc77620aee9204e126a40981ca1af825": "fa12403e6254c643b32cb290b0ab8ed0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/523c264c6172e43eaaee148c81c477cc13d34a": "282befdd250e797fb7d33c998976eb78",
".git/objects/d0/5f19d2665a0ba1bb784f7f556693038f55d0c3": "b9c2adb17f98a53e1aec480d9f3b7b7b",
".git/objects/d1/451a5ddce32eb7a745cd91fded741bc42c0194": "4aaccee2734c366a87017a82c2d4ae04",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/d736fe3c1f352164c03038b687e3a300fffc5a": "f4d1eb95c4158f891c2eede0bf431359",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/f4/d5b411ebf134b917e6994d32f54795ec1c1f1f": "5f8b7e07b99b19f1d3ea743dfd4a074c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/32c73ac823d96d39cb97f68a3d27ef565482db": "dea4f387be0bc1ce7725826e17ce6de2",
".git/objects/fc/3ad96105b92ddb0a27827fea8170f76b29b406": "127daf2cf46e48c4a07707cab150bee7",
".git/objects/ca/a6cb39f9e0b33bf9e43bb833b1fc36849f4b4a": "42325af1e5f97674194f4f8895f899c4",
".git/objects/e4/ca2b56293e66d8a4303ae9d306d30f9ef40079": "6be4c1c232103940106a5e0b8ef62955",
".git/objects/e4/3171484c7c8b7b356e834319c6b56f7bd13ff4": "829410cded7fb45a506b0eb38013ecaf",
".git/objects/ed/202c93bd92ea0acf048fc38963661f2ab13698": "30d08bb836c5d6a99f5e9b953267efe4",
".git/objects/pack/pack-f82c98ac996a62cb3074397f54e996e845caf001.pack": "fa637d0ab0d35f4fb6a441a415641125",
".git/objects/pack/pack-f82c98ac996a62cb3074397f54e996e845caf001.idx": "f1b130ecd59a5300dd4e99c7c3940063",
".git/objects/16/fdd2127d30936742c7f17d195a6407d433cd59": "93721b4aa28d756dd55c07ebb5d60911",
".git/objects/89/459c401a52981d4f8d601da29278f8c61fe1d9": "8e635675b2c3b9d9a144b95ddee4d5bb",
".git/objects/80/886df153ea69a822a549d9703316fd6fc21e3d": "40b2c27672908238c62a317db9d9f6a6",
".git/objects/8f/1caf5d54ac3f7d987e3821949ee16e9af1ceff": "d72bba6f60cf961b1b60c1b5a4fd9976",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/fc7fe25a55118af6a9dee7e6e8a9d39265a718": "08668fc15917f1d44c89369959e92b50",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/21/e4347982b983d82323d87ada3442c5fa33f7f1": "e2e83f58f76b85622bcc31dc5f6188ed",
".git/objects/21/422d8174e430d878cd7dce7f1c87dd769baf38": "ca733ab8377db95bedfe74634eae3dd6",
".git/objects/81/d9196b52feb9caeac4b23a39805ce353a671b7": "249a8e1b6f5e0688c458911e5c3536b6",
".git/objects/81/ea19674dbabdabd7086a98f42e8b227c113721": "c3984bc556d237dfbdf9c1007adb885a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/c135d094d47357f8c15312b1a56ea5d52bf3ae": "5fb9d839490a02476c1f0c9cdfd99858",
".git/objects/6e/f30a5b6352a2f50ab2f885ff3032b703fa6352": "8bc21d7b53274cbe989fbd13dc388741",
".git/objects/9a/1e49878c647494035c5ad896a255bc8165d047": "1a2c891a4d70dc28755d26cbeba0af5f",
".git/objects/36/5edbc5ef159c5abae589d8fd67f7de5c17e592": "0319f0bb6a0362a8ecd6d81a37673056",
".git/objects/5c/63b37adf57b151bf481a2051a4423763c998d2": "19b21bc0a93d7eb356519e63f77be058",
".git/objects/91/b07d1b9482f2d9610e16fac178522d5cdf90c6": "e9d4e499d0d01290a7c7f5838ed95c5f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/a34428e9aa78b430a136da20f8e472246fc155": "b5a8781fda160a940291015cddc0229c",
".git/objects/6d/e7afb14abd85fab033faa761535006abbb6428": "d31c8d6ff910c6dde15121144cc028df",
".git/objects/01/3f3db09509801ee75d1f0c59cab22d290d3fb7": "20f0fdbf7b5d1084518c3d65ebf0d7f3",
".git/objects/39/ad98c4b35782b9627662d57cf215025e62bdc6": "963497c169f9c560aadfd75f118ffee2",
".git/objects/97/cbf2ef0af95233150621e781ed6e7ceccc2519": "46cf645b1a79e16af674734e2091e651",
".git/objects/d3/52281e2292dc7b20252e314c4a8ff59fdf5313": "6869dfec8a247c1ae49674d92a151b20",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/46b63e57046d322af5316f8cb93c0b436c66c2": "416c63d81da58c8d4008152119d2a58f",
".git/objects/d4/014fd76b8f44ef6a56d94dbe18c9c006be60d2": "057a64644d59c1bb376f1886c0fd1ad2",
".git/objects/aa/a9d9339c58ad55860654f53921006ba82e0775": "e584fcd962c6fed57f10ac003ffa27c2",
".git/objects/aa/89303be2f0ef6850be2e4e2f53b7ea7631b873": "ee1ce32de36f3a7c187a1bfd65f14d0c",
".git/objects/aa/93ff503575abd1debf064d0e716a63dab2ff4d": "99d4ed06fbac5787cd1323c64f4aaf3b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/b2c18678163f588f9ace0fea6ec4ebda0293a8": "9c4f6439960987c3c02f2d8a053a2da8",
".git/objects/de/8393fb3be1d957ff6f80b000eeb0353c08b5f6": "fc0223a79bc4e27f4b90a6df14cc7e8d",
".git/objects/b0/ba95d16a64d8463d1869cf82ec6ec6920c65b7": "df38983a6d5ab3ff9eac268cd3a48b32",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/5bd8e0c3a1d1773eb14817331b919bd08e25a2": "26ad3cba7765e805079820ec08c20244",
".git/objects/ea/63b49b75d5d91459597be5e55db6dbca1b937f": "0c33f33cbd23e0ff7a51ed5f6567f24a",
".git/objects/ea/584e0af0064dd4ee1f074824c911b86a72e49d": "c0538e86dacb45d9d405136d075203de",
".git/objects/f9/438eb611001a52bdf828fb69e351b520986aa8": "229ca0999fa553be13ab0e744209baf2",
".git/objects/fa/83709e655ec6c0bc8396026a36ecbf903f7ea6": "3c1d9dcd399b4609c5d75a953b64e40d",
".git/objects/e9/5a5fd8736f8c6eafa8af920d3cd33010581053": "636b67affb77f101993e7d7a39e34208",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/77/3c959e9cc3af5ae66dc7db733b4206714f61ac": "67e2a452dca2a9176473f3e5b57cf017",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4f/2144a7821071ed9c697241d4fd90dd67cbe42a": "4025a473f74c15ebc12cb2b794539b79",
".git/objects/8d/216e8e1428c6b5e70e39205df9cde161c8b2e7": "7f10a47154189282f62922f8de6b6250",
".git/objects/85/a11ec01053ecc40696ae32a295966f92a845c6": "9fd33bd1f64c593c723c97f482097c45",
".git/objects/85/be8fdd9ddd6cbda4c56a38d032e9e7c929aa4e": "4766ef1dbf1cc913284afc3211765595",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/76/83adebc79ef2cde22326d40e853540ab26b2cc": "454db281b1a698cefcb28b96e07bc02f",
".git/objects/2e/a6750125501ae91a6356781daf2b46d938f230": "b9015292d9ffee8bf18155c2a36712f7",
".git/objects/13/2e0c659573324a5b88fd6bbadf30954a066a0f": "7809ed20eed82e0b906040b1829bbf43",
".git/objects/14/d9dd19378df67d0cf4d26abb09590fcb08ee00": "14fe78ea81cef0d379dce2e4fd7d5081",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "497ce00c94510373c9077dfba406fcf8",
".git/logs/refs/heads/main": "497ce00c94510373c9077dfba406fcf8",
".git/logs/refs/remotes/origin/master": "e3de2c85c15661a14ed1d26509080963",
".git/logs/refs/remotes/origin/main": "07441047f5f60f570589aa1d4470ed49",
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
".git/refs/heads/main": "0b48fe8f80f165d0364fe09b67dbfe1b",
".git/refs/remotes/origin/master": "21971a5d1aa6dd96b654bff9b57f0b7b",
".git/refs/remotes/origin/main": "0b48fe8f80f165d0364fe09b67dbfe1b",
".git/index": "2627467e2b911a2efd9713e8c1a8f842",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "fec4a08961e6c4cd960f28483737e9a2",
".git/FETCH_HEAD": "e35e0884287048f201a35692e1bbdccc",
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
