if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const f=e=>a(e,r),b={module:{uri:r},exports:c,require:f};i[r]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(s(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"4c45b10a65d0b5e9e20066c506306f5b"},{url:"about/index.html",revision:"6ae79d32f0b1a9a7df4fa54bd40d36bf"},{url:"archives/2018/11/index.html",revision:"0968ec8191cd0226458983fbf7acf2b1"},{url:"archives/2018/index.html",revision:"cab70fab4de17e204d2d43e1505798c4"},{url:"archives/2019/03/index.html",revision:"93d3d1449f4834ea82616d810dbd1884"},{url:"archives/2019/09/index.html",revision:"e6a798a7c17f67c68f5102bbd4f76d99"},{url:"archives/2019/10/index.html",revision:"fd49daff9b98a15d258ed7746d76ff10"},{url:"archives/2019/index.html",revision:"2d726fc2da9b1118f301a161f5698bad"},{url:"archives/2020/07/index.html",revision:"1defca4ea2288621d311cb9520dcd1f6"},{url:"archives/2020/index.html",revision:"6ffa748d4b9b0e7019302fa540b8cdea"},{url:"archives/2021/07/index.html",revision:"8058dafe4db2748521b43504a9935a8e"},{url:"archives/2021/08/index.html",revision:"efbb5fe40817a339e9a177562567ea2a"},{url:"archives/2021/10/index.html",revision:"d4f0713d1a4b862ca35a947d1ccb8cf2"},{url:"archives/2021/11/index.html",revision:"5bea09f3b015d1f640e01413de051a2d"},{url:"archives/2021/index.html",revision:"075054176c5cf5fb749a72e376d8c0be"},{url:"archives/2022/03/index.html",revision:"6e7b9237d8698fd80061f21dfcf66315"},{url:"archives/2022/04/index.html",revision:"1eb78ecee7cd3c1d13f27a0342ca71ed"},{url:"archives/2022/05/index.html",revision:"9de0fc38546ed9493775c78182f5bae0"},{url:"archives/2022/06/index.html",revision:"e106b322a0b685fa455164b97efe313f"},{url:"archives/2022/07/index.html",revision:"ed5de7cf2cd62bddc4f68bc781f167ec"},{url:"archives/2022/08/index.html",revision:"d4b0d530bd2a7169b10461b03e0825db"},{url:"archives/2022/09/index.html",revision:"06b6e903844f5a0e389ef6e23243f5c3"},{url:"archives/2022/10/index.html",revision:"e47b6c4f2535a909cb5ce24bf4d36dd4"},{url:"archives/2022/11/index.html",revision:"614f59baf462e0659b052e81f2c8ab2d"},{url:"archives/2022/index.html",revision:"4d9656a99c38d411ddaf1672b8400323"},{url:"archives/2022/page/2/index.html",revision:"d63b9e135e698abec80d80a494fd416e"},{url:"archives/2023/01/index.html",revision:"368ce9897528fbdbf533b65ca77830b0"},{url:"archives/2023/02/index.html",revision:"fca7539774646eedfcad5488048c0494"},{url:"archives/2023/index.html",revision:"18c1259e80ee2435de194511e38b0e00"},{url:"archives/index.html",revision:"2ff42f73f1c3593f761c5c48c53254e2"},{url:"archives/page/2/index.html",revision:"92559a250681ae2bd65026867b2b1470"},{url:"archives/page/3/index.html",revision:"8654067eb06b70d9fc96a69e110cf807"},{url:"baidu_verify_code-3pGGEyweSS.html",revision:"c871f1b84b5c23af182fd3c1ff113d05"},{url:"bb/index.html",revision:"f720d6fd6fe30fcf9679729070e3f4ea"},{url:"books/index.html",revision:"9a89932a7e921abc3e8505232b0bd29e"},{url:"categories/index.html",revision:"f39209daa86f274bcc030e62b01640dd"},{url:"categories/收藏小间/index.html",revision:"c6744846500706ed1ee8152036216297"},{url:"categories/生物学技术/index.html",revision:"1e258a41d298241af717c24c8ab1e855"},{url:"categories/生物学知识/index.html",revision:"28f325ea0b72d740f2976d8354351d5b"},{url:"categories/生物学途径/index.html",revision:"d8ebfcfa019c6893b32d3561258a7316"},{url:"categories/计算机和网络/index.html",revision:"1a4d38d0bf03d3168aab3fb11f15ab02"},{url:"categories/随笔杂记/index.html",revision:"09fd7a89a36f986f69f3a126c1046805"},{url:"categories/随笔杂记/page/2/index.html",revision:"09064a4fc9032b36c1feba1186a4f4eb"},{url:"css/APlayer.min.css",revision:"f5730f0da86ec174b764ab05e1733b83"},{url:"css/bbtalk.css",revision:"c94be5fdc53e69b7555242a400aa0f85"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/he-simple.css",revision:"189eaa17c803e2e5dcdb4f81dadf00c9"},{url:"css/index.css",revision:"e2177b2f5a3eb8bf7afd86e9177a6ddc"},{url:"css/ispeakstyle.css",revision:"c14541fbe14d441de4e02c22d87d71f7"},{url:"css/mindmap.min.css",revision:"ef0a552e63afae56a7ad35c9db27bdc0"},{url:"css/STLiti-embed.css",revision:"2d5eb030389aaf405f0f4ded14f77001"},{url:"css/STLiti.eot",revision:"ba4d37061d8dafb27ff7438318ae88e6"},{url:"css/STLiti.svg",revision:"c38f94a5e5f7e7db8dcb7e4441fde83e"},{url:"css/STLiti.ttf",revision:"c5241a7049a76e1a74750d191d77291d"},{url:"css/STLiti.woff",revision:"91c92bedf052529b9d4ab3df850ec06e"},{url:"css/swiper.min.css",revision:"21b70942d56c99faef25bec8db671e10"},{url:"css/swiperstyle.css",revision:"e5154e5cb155cfb24c60097d9f6a7f7a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"demo/css/about_style.css",revision:"a75c86ce668af3823013cc22d11b6d90"},{url:"demo/css/STLiti.eot",revision:"ba4d37061d8dafb27ff7438318ae88e6"},{url:"demo/css/STLiti.svg",revision:"c38f94a5e5f7e7db8dcb7e4441fde83e"},{url:"demo/css/STLiti.ttf",revision:"c5241a7049a76e1a74750d191d77291d"},{url:"demo/css/STLiti.woff",revision:"91c92bedf052529b9d4ab3df850ec06e"},{url:"demo/images/bg.png",revision:"c24a438f79f5a1846a4a22cce2913e94"},{url:"demo/images/play.png",revision:"42530638fb3bd55fab633a5b1272db0c"},{url:"demo/images/stamp.png",revision:"687c8380d655268e86b6e6cb0c0b27d9"},{url:"demo/images/stitch.png",revision:"123bed848c885c324f8fbc250c84f2b1"},{url:"demo/js/about_bgm.js",revision:"796d88911a1c5790d915da286d028a03"},{url:"demo/js/about_jquery-1.11.2.min.js",revision:"5790ead7ad3ba27397aedfa3d263b867"},{url:"demo/js/about_letter.js",revision:"3dcbf389aacbae95eef735c5239557f6"},{url:"demo/js/about_modernizr.js",revision:"7a9ad736fcbd8d99ac7cb282e48f492d"},{url:"demo/js/about_sakura.js",revision:"4c2573faf3bd40e22871d01c9271683e"},{url:"demo/js/about_typed.js",revision:"4071315a426fe5ae42086be1050038ea"},{url:"demo/letter.html",revision:"73df9fab5e82d3486e3bff59204dfbf2"},{url:"fcircle/index.html",revision:"9baccf778ca85eee82c5eb1a52dfe2c5"},{url:"fonts/huawenxingkai.eot",revision:"b41881845a2e16421afd69bf91d35d92"},{url:"fonts/huawenxingkai.svg",revision:"387b45d09ed31a3f52a2f1cc67fd122c"},{url:"fonts/huawenxingkai.ttf",revision:"8a9708b2e510e8dcd56912acd1a1dcac"},{url:"fonts/huawenxingkai.woff",revision:"7fd9ec02e545b92027e92798af37aff4"},{url:"Gallery/IBP/index.html",revision:"85e7ff9ba76944597ae4eb2e480ec591"},{url:"Gallery/index.html",revision:"76f1322b38404ace5e9a5aa4c3c6b902"},{url:"Gallery/南开旧事/index.html",revision:"b7bb693ebddd06b670022abf5093538c"},{url:"Gallery/水木清华/index.html",revision:"15a35d39bdaecd1f418e66fc901b7a1f"},{url:"Gallery/浮生一日/index.html",revision:"d8db974fa23faf7916b118e3ffd1f81e"},{url:"Gallery/蜉蝣一世/index.html",revision:"f8c7834e390a88ae9e538e3bed07147f"},{url:"googlee6c53d44ede07b97.html",revision:"ec3e9e6e83c983feb33b6a9d2d8c3165"},{url:"images/avatar.jpg",revision:"12e88663d4ae6c27c9739ecdd3428624"},{url:"images/avatar.png",revision:"bd44f978373a868db7bdd25ee8743c3b"},{url:"images/bg_black.png",revision:"960852c16492b93454d79c618f330573"},{url:"images/bg.jpg",revision:"a9cec08ec053b9350a9048b94b7f8db5"},{url:"images/bg.png",revision:"2c9ef58cd6a1d64d08851021f2b10876"},{url:"images/guest.jpg",revision:"2a6f01bc5b7a776a5e5ff8afb3255a07"},{url:"images/Screenshot 2022-11-06 144410.png",revision:"53f19fbf6d0bc6b8d184ec9d5f89eabd"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/leaves.webp",revision:"233dfff1128a199c21b36ac27308f823"},{url:"img/pwa/android-chrome-144x144.png",revision:"c095322ceeddd6b0cfd4075467f8e0b1"},{url:"img/pwa/android-chrome-192x192.png",revision:"6399033a76ebe90c31eea6755f7d256b"},{url:"img/pwa/android-chrome-256x256.png",revision:"b1bb0fa410cf96275fd58a3476b487e1"},{url:"img/pwa/android-chrome-36x36.png",revision:"3f7eb9dffaf7271f6fbfd2589d09f63a"},{url:"img/pwa/android-chrome-48x48.png",revision:"32b57deb63d6c3894458d77eeb617871"},{url:"img/pwa/android-chrome-72x72.png",revision:"777b6d6c75f81595e767a4bbdeed8497"},{url:"img/pwa/android-chrome-96x96.png",revision:"483aa21ab1e73efe45a0874e51b70707"},{url:"img/pwa/apple-touch-icon.png",revision:"57065f73b2978de404691a3e97742a79"},{url:"img/pwa/favicon-16x16.png",revision:"8f7b8b77dac4e9d73ec8209401039bf7"},{url:"img/pwa/favicon-32x32.png",revision:"68532cb5036bce0e9ecf3d2d0277367a"},{url:"img/pwa/safari-pinned-tab.svg",revision:"17d9284ffbf27bb93515eeddaaf82fc9"},{url:"index.html",revision:"07b5c5a244c4c8d18ced091e17cca1a2"},{url:"js/APlayer.min.js",revision:"6232c24beb9ffb576b88723ade38be35"},{url:"js/av-min.js",revision:"eb780849a893bb67109f1ccc1c871518"},{url:"js/bbtalk.js",revision:"7f70a4422512dac7bdf9482c1a6d7ed9"},{url:"js/bbtalkUI.js",revision:"65a934a588e2c13fa112ecb0f64fa577"},{url:"js/bibi.js",revision:"873fff94c0ba08ec3f7302fe5c06be6c"},{url:"js/custom/categoryBar_suppl.js",revision:"c2f036f895837ed75b4eee27caac048d"},{url:"js/custom/countup.js",revision:"7baadf7bad427c145fb31aa080534ec1"},{url:"js/custom/customdatapjax.js",revision:"de7839140507ba93ad9c7ca901b6e813"},{url:"js/custom/customnopjax.js",revision:"8a74c437de00feeec7511592094ed654"},{url:"js/custom/refresh.js",revision:"1e9e44bf345d54864978bfdd7acbe05d"},{url:"js/ispeak.umd.js",revision:"54f0b8be3b37bbdb302d628052b5efca"},{url:"js/kity.min.js",revision:"0990df2a87e07b627661ae8f31bb8c6b"},{url:"js/kityminder.core.min.js",revision:"02b41241cffea9cb59a023e594a07efe"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/Meting.min.js",revision:"c0e989e618a2c6f90f59fa1822941d75"},{url:"js/mindmap.min.js",revision:"7da1fd3330a530a7fd480555ed43799e"},{url:"js/popbutton.js",revision:"e19653eee6bad05f7f7982da8d08222a"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/swiper.min.js",revision:"7f3e74aebbcef6a0510d4ff00a5a6737"},{url:"js/swiperindex.js",revision:"c971686e243751fe74884c16f2b3c733"},{url:"js/timeago.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/vue.min.js",revision:"6c81f02ad0bf8e12a66c18cab188d029"},{url:"js/weather.js",revision:"8199ced508e6e696c9ec4c274356b5c5"},{url:"js/weather1.js",revision:"794c9a0b4947224ccecb7814018cfda1"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"2a6120a541b0591292565c7070f45746"},{url:"MessageBox/index.html",revision:"a0c2e4f4c64708afaeb8b6cbe8c488ba"},{url:"movies/index.html",revision:"997e4a2787ca86695055f69bbfb9e83f"},{url:"music/index.html",revision:"78451f373545c6f0ccfdfe50cdec171d"},{url:"page/2/index.html",revision:"7effa223b690631a7d1bce0e7df66269"},{url:"posts/13acdf96.html",revision:"2a6c33abf62aa74a2a8accd752363bf7"},{url:"posts/164e3f3b.html",revision:"6e912b0a54c6703f5134f40f51586dab"},{url:"posts/1ed100cb.html",revision:"5de3bc7ee5480bc4b290b15dc267f7f4"},{url:"posts/2196d548.html",revision:"5782c6fb141693e42333f4a8730a2bfc"},{url:"posts/24a7b0c.html",revision:"d5b5593c9d9470d24ef72ca5550e7405"},{url:"posts/25a9c68a.html",revision:"6762f5874035140b40c358e845c3d1be"},{url:"posts/2c4498f.html",revision:"ca994aafade883366302cee5b5e08f31"},{url:"posts/2d1de3aa.html",revision:"f9244f9ef37bebc4b8c079bc19c8386c"},{url:"posts/3552dc8a.html",revision:"379c72692e9ae8e0df2f83e9361abd25"},{url:"posts/3df722d3.html",revision:"805e2d41bfb83e409f760a05e23bb777"},{url:"posts/4235db60.html",revision:"5dfc902a4c2899260df466917d6cf074"},{url:"posts/4767497a.html",revision:"4a2ffdf24fa33d525b552585db411920"},{url:"posts/4b6e784b.html",revision:"d4d07d7c6859897b35496d38bb1ddb52"},{url:"posts/4e328d4b.html",revision:"3759e654279d5462db7a8189a10fbf67"},{url:"posts/5247627f.html",revision:"89b129a4924e9f5d1ae1b1fb5efd368e"},{url:"posts/55e85240.html",revision:"7acf17dbf67f05a1c68312c4a0767fab"},{url:"posts/59d365c3.html",revision:"c752e36c2f56703b59ca58d11bf02847"},{url:"posts/5a9709cd.html",revision:"b7b87f037e9b6d6c9145605489912a2e"},{url:"posts/63f8515a.html",revision:"503fca1aca7fb15af3c62140926a4540"},{url:"posts/677ecf23.html",revision:"c4e8f42f0494c1f52e127748a3fb2e50"},{url:"posts/67e662cc.html",revision:"ffa3ba03976a1b6e38566adcce9f1f4e"},{url:"posts/737429f0.html",revision:"e555481d783476673600cac89a92af85"},{url:"posts/754d4b9a.html",revision:"47484a32233515404f5e37115aa8a613"},{url:"posts/76f694c7.html",revision:"38f16e231b856bd232b83db7a784adaf"},{url:"posts/7b9e5580.html",revision:"c8cec60d93015624bd5924813f07b012"},{url:"posts/7bed4d93.html",revision:"bb4acb23ceec21b25df4593f29c33db8"},{url:"posts/8ecab538.html",revision:"869afcbadd26264c59189fa5258105f1"},{url:"posts/950a024d.html",revision:"a7d456f7e3367d5613ff242f882d4c07"},{url:"posts/95134020.html",revision:"63f24831d289ac327e3441e21ecda1f3"},{url:"posts/964a1a31.html",revision:"68364f2ce176433d00771f703e165a28"},{url:"posts/98155b6f.html",revision:"ff832355e15aa5765187b299c471e6a7"},{url:"posts/9dafccd4.html",revision:"6c55d7d8dd6bb5dd71a8644228e9e70b"},{url:"posts/a2ae8bb8.html",revision:"e0fffd792942bf49abd59e20ed1710e0"},{url:"posts/b15044df.html",revision:"aa9fe385c8411e5ec5b3ddb162637a40"},{url:"posts/b5a183f1.html",revision:"476319bc306c6ea1d71a01fbac49cd01"},{url:"posts/c83b1b25.html",revision:"be0b68b9b0bd038bfb29b5fde00fbe8a"},{url:"posts/c87e8132.html",revision:"4e6308f72ac04cb6ab70d3aaf9f40df8"},{url:"posts/c92ee9b2.html",revision:"494e462c7d5d95435c03bedc0d744a32"},{url:"posts/cb6563c8.html",revision:"f3e889ab3f7e7c25c9a67237fa34f532"},{url:"posts/cb901750.html",revision:"ddb52ef0ca3ddfed040062614dd7c35c"},{url:"posts/cbc20172.html",revision:"b795cbcfe1bf57a493510929ade329b0"},{url:"posts/ccae9565.html",revision:"1cea1a1f9f5b59ff469e2cb8fd261650"},{url:"posts/ce1a4f5e.html",revision:"5487d679d4dff2202c8cfa13a5ee13aa"},{url:"posts/d8914b28.html",revision:"d410ed44121065816d3bb36bfd273236"},{url:"posts/dea129d9.html",revision:"6286a3dca1b8eaff26373793bb2b1998"},{url:"posts/df4eaa5b.html",revision:"b69f0372816703f7e089b3ac61b23762"},{url:"posts/e4bc13e1.html",revision:"fd8fe5686fe61c743c10a73d37b362a9"},{url:"posts/ec441a20.html",revision:"c168dcf0721b8a19a40bcff1cc3f6d66"},{url:"posts/f3872a09.html",revision:"2e07a7bbe3b24eb2f93210f9f46fb053"},{url:"posts/fb31f99f.html",revision:"e13a7b5f380125f65eccbf3d5ddb3cc5"},{url:"posts/fc2013be.html",revision:"9e7655013c288cef9792b9341653d259"},{url:"resources/index.html",revision:"cdf2acbb8f58370029c15d18a0245f84"},{url:"sw.js",revision:"f5ba3ce155d41e332c9a3cab9aeb504e"},{url:"tags/IChO2022/index.html",revision:"1465d4e70e1aed78ce1a1b3aaf96e246"},{url:"tags/index.html",revision:"2157399d03ddebe459fd0dbeff6c5faa"},{url:"tags/minecraft/index.html",revision:"e2601a87d5f99b3e6fcb215cbed42fda"},{url:"tags/protocol/index.html",revision:"a60e148b24725099885637ee16a3b2ea"},{url:"tags/windows/index.html",revision:"de2d2929a31bbf6cdf697883dec76a84"},{url:"tags/分子生物学/index.html",revision:"aeffa8eacd5372dd6227f186b3eaefb3"},{url:"tags/动物学/index.html",revision:"e6db8ab9c9eb02efab7e20e99288854a"},{url:"tags/学术规范和职业伦理/index.html",revision:"5d3659edeb62c295f0bbc814d81824a2"},{url:"tags/学英语/index.html",revision:"f026f182890d607ffdd83526f06ad5bb"},{url:"tags/市创/index.html",revision:"d1034c684ced1c07e88fd15d2f805c75"},{url:"tags/想法/index.html",revision:"0aaaa5ebc649d43ba23e68ecc6d83bde"},{url:"tags/我又睡不着了/index.html",revision:"d9fc9e0f86f21b90f01281440f0c64cd"},{url:"tags/时政热点/index.html",revision:"6726fd2b64fe6d5c9a195cf363924841"},{url:"tags/生物化学/index.html",revision:"319ed4a71f9c37354240e5d3ad6acd6c"},{url:"tags/生物物理所/index.html",revision:"5754a775f4be5460c9da4aacb17a4977"},{url:"tags/神经生物学/index.html",revision:"c558538d00f25a3f167d256d5692d464"},{url:"tags/科学史/index.html",revision:"a9e34e6352b6f6ce832df0e8bc6146b4"},{url:"tags/网页/index.html",revision:"af1dd9cc491b0d186fae2c792b2faee3"},{url:"tags/转载摘抄/index.html",revision:"e9d1c7c1fc063b634ac613c6ab848f06"},{url:"tags/龙舟/index.html",revision:"2da948998bdb4ad038662aef29f62d8e"},{url:"timer.html",revision:"1ac2691ae5e6e35c00d0a5b557c51dcd"},{url:"updateFileTime.js",revision:"e5aacd51da1d104b51b626e54be15fc6"}],{})}));