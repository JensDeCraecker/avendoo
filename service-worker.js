"use strict";var precacheConfig=[["/avendoo/index.html","d174fada3a23f1cded15d826f6c84f41"],["/avendoo/static/css/main.95fbc5c0.css","60daed673eb7497c3f5d5f7a11cc94c6"],["/avendoo/static/js/main.8f5539a6.js","8790aa20ddecd6367bc6befa61075853"],["/avendoo/static/media/avendoo_logo.86d66acc.png","86d66acc1ab099b7b727606f53d99c8e"],["/avendoo/static/media/cross.cb28b19b.svg","cb28b19b49dfc21cd279f64dc0358512"],["/avendoo/static/media/dealsbreadinfo.fc4af157.scss","fc4af15775108fd609629742bff43301"],["/avendoo/static/media/hknova-bold-webfont.31599fa4.woff2","31599fa4b60413c14cb96318bb154271"],["/avendoo/static/media/hknova-bold-webfont.5b609df4.woff","5b609df44148669548004d6b4d080f23"],["/avendoo/static/media/hknova-bold-webfont.9a353f91.ttf","9a353f9184d279320762387997ecb5e6"],["/avendoo/static/media/hknova-bold-webfont.d54d43f4.svg","d54d43f468c5810982cff26069b501d3"],["/avendoo/static/media/hknova-extraboldr-webfont.2c944f38.ttf","2c944f38348863740406a5aaea2004b5"],["/avendoo/static/media/hknova-extraboldr-webfont.7b9903c5.woff","7b9903c5cd3ac4cb6554b2da575d025d"],["/avendoo/static/media/hknova-extraboldr-webfont.c8778f9b.woff2","c8778f9b5dd1032e0251c05236a7fad4"],["/avendoo/static/media/hknova-extraboldr-webfont.eec788bc.svg","eec788bc415a29b328f49f4363526939"],["/avendoo/static/media/hknova-mediumr-webfont.6dbfeec9.ttf","6dbfeec99a60676fec7dd16a7e1b36d0"],["/avendoo/static/media/hknova-mediumr-webfont.746d5c49.woff2","746d5c49a653d6239a0da9caf5e175ab"],["/avendoo/static/media/hknova-mediumr-webfont.9a51528e.svg","9a51528ea076bc659cc12dbaf8b16630"],["/avendoo/static/media/hknova-mediumr-webfont.d9f2e5e7.woff","d9f2e5e71bb95ec51898339c57f15315"],["/avendoo/static/media/hknova-regular-webfont.46bb7af8.woff2","46bb7af8385a37db2465b547e0a38119"],["/avendoo/static/media/hknova-regular-webfont.7a027175.svg","7a027175bdd0a2168ac22ace7c26b5f5"],["/avendoo/static/media/hknova-regular-webfont.b4d3dec9.woff","b4d3dec99952c0669fa21ce9f5ee76b7"],["/avendoo/static/media/hknova-regular-webfont.e3005678.ttf","e300567862131d41a43ad3185ceb4f30"],["/avendoo/static/media/icomoon.361527a9.svg","361527a9f5b9ff0db811f82c3e3f8dd7"],["/avendoo/static/media/icomoon.8f043e70.eot","8f043e708432e3314e10c90a71c481c6"],["/avendoo/static/media/icomoon.b643b424.woff","b643b4244bda6bb6a8c1232087969fcb"],["/avendoo/static/media/icomoon.f9b1ea35.ttf","f9b1ea35f617449a4a247f263b0ccd0a"],["/avendoo/static/media/index.8f00c4a4.scss","8f00c4a471566c3be1f1605cb4f58b03"],["/avendoo/static/media/rolling.913ac9d4.svg","913ac9d40b44d315a05aa9a2285a6de7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var o=new URL(e);return n&&o.pathname.match(n)||(o.search+=(o.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),o.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),o=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var o="/avendoo/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(o,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});