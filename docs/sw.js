"use strict";var precacheConfig=[["0.chunk.65c73.js","96dd8aa3b05fd841e53980858abc9ce3"],["assets/favicon.ico","879b34f0a1d3e00fbe850a4e390be132"],["assets/icons/android-chrome-195x195.png","2adc46fb7cce0063aaf28ad7aade00bd"],["assets/icons/android-chrome-512x512.png","e5487a9712831fdb3b278ced8f2d664e"],["assets/icons/apple-touch-icon.png","2adc46fb7cce0063aaf28ad7aade00bd"],["assets/icons/favicon-120x120.png","e25bec19f14d33a13409eab4af759f1c"],["assets/icons/favicon-128x128.png","aa3e85fa1bcfb181aef2300acadf864d"],["assets/icons/favicon-144x144.png","2cf3daeaf78f5b07edc787df47eb8346"],["assets/icons/favicon-152x152.png","e7e23a1dae26236f2d9a1ad0df84ed86"],["assets/icons/favicon-195x195.png","2adc46fb7cce0063aaf28ad7aade00bd"],["assets/icons/favicon-228x228.png","6a21ba4ac92b9f10fc6b19264c426dcd"],["assets/icons/favicon-32x32.png","f7c23d43ea54e7b0a594fc9df669ec8a"],["assets/icons/favicon-57x57.png","00505cc633dee3568125b7127e5ba568"],["assets/icons/favicon-72x72.png","436025872571416194ac6e146995c928"],["assets/icons/favicon-96x96.png","429c7c4747e1baa766f01d24e05cbf28"],["assets/storaji.svg","cb8566858fa22ad473a8b67da7dc2e34"],["bundle.2167b.js","00e6c9c36971d0f6d0d0f7acff1c76af"],["favicon.ico","879b34f0a1d3e00fbe850a4e390be132"],["index.html","3a2481970807e6e073b4577d6a862486"],["manifest.json","221c6438c3e51dde8e052510eea8fa9e"],["style.7c877.css","1151ab8b8687e35f3e0c6a20c86619f7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,n,a,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),s=createCacheKey(t,hashParamName,a,!1);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(n=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),n=urlsToCacheKeys.has(a));var s="index.html";!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(s,self.location).toString(),n=urlsToCacheKeys.has(a)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});