"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/main-0676aab775a3f3d48bbd.min.js","fb64e2f881a92b9f99267471b04aff12"],["/main-0676aab775a3f3d48bbd.min.js.gz","026aad7b59b77dbc3360b9fd9df01833"],["/main-0676aab775a3f3d48bbd.min.js.map.gz","f608ba4bd25f212f1c209e45c632690b"],["/manifest.json","d585fe2f37234d46c98797d78d4fa434"],["/src/images/background-leather_46232dcb2e350bda3894744ea2af0b4f.jpg","46232dcb2e350bda3894744ea2af0b4f"],["/src/images/background_45afe511909276ee260acaf626f875bf.jpg","45afe511909276ee260acaf626f875bf"],["/src/images/blizzard-icons_92ea4255f59fbde5d476d890a16a6126.svg","92ea4255f59fbde5d476d890a16a6126"],["/src/images/blizzard-icons_92ea4255f59fbde5d476d890a16a6126.svg.gz","d45c2067206583ea5ab67a117a1ad54b"],["/src/images/coin-copper_cd018dd85f8e9acf3845724cfac66387.gif","cd018dd85f8e9acf3845724cfac66387"],["/src/images/coin-gold_075b76fba2df68d91b2e52f4a01f1ebe.gif","075b76fba2df68d91b2e52f4a01f1ebe"],["/src/images/coin-silver_4554a0c6bbb6f5b3fef5a8e9e2bb0f24.gif","4554a0c6bbb6f5b3fef5a8e9e2bb0f24"],["/src/images/favicons/android-chrome-128x128_7fb7daaa38ddd81ecf50ab8d5b0fe61a.png","7fb7daaa38ddd81ecf50ab8d5b0fe61a"],["/src/images/favicons/android-chrome-192x192_2dd65c1b878d9444fc5415efa80a4827.png","2dd65c1b878d9444fc5415efa80a4827"],["/src/images/favicons/apple-touch-icon-120x120_cfc014ed562556db14c3f764b11aabf7.png","cfc014ed562556db14c3f764b11aabf7"],["/src/images/favicons/apple-touch-icon-152x152_9ab4ddd6cfbe2fd5c1c6d84324bfd998.png","9ab4ddd6cfbe2fd5c1c6d84324bfd998"],["/src/images/favicons/apple-touch-icon-167x167_7d0965cc52aa88ad6d7fd8be3fa0bc64.png","7d0965cc52aa88ad6d7fd8be3fa0bc64"],["/src/images/favicons/apple-touch-icon-180x180_189fb257347168c3a3a2da2d1aa1461e.png","189fb257347168c3a3a2da2d1aa1461e"],["/src/images/favicons/favicon-36x36_30b9d44b5194336b50e679e0e5c965fe.png","30b9d44b5194336b50e679e0e5c965fe"],["/src/images/favicons/favicon-48x48_28ec1bb0e2e233857651b6fb1ee1b206.png","28ec1bb0e2e233857651b6fb1ee1b206"],["/src/images/favicons/favicon-72x72_7971f8b4c7a74c5884a9de34a2c456b5.png","7971f8b4c7a74c5884a9de34a2c456b5"],["/src/images/favicons/favicon-96x96_d71373b96893e217ac329b2b59dc19f5.png","d71373b96893e217ac329b2b59dc19f5"],["/src/images/item-slots_712f1f52a81a124430ee9507631e94f0.png","712f1f52a81a124430ee9507631e94f0"],["/src/images/logo-alliance_0a23a6099c3cbf1d280bf0d55a1eef0f.png","0a23a6099c3cbf1d280bf0d55a1eef0f"],["/src/images/logo-horde_b57fd17304effd5b26060aef075c1ab0.png","b57fd17304effd5b26060aef075c1ab0"],["/src/images/sockets_7e3c3fc2cd800e888562f7ea2bc4ce01.png","7e3c3fc2cd800e888562f7ea2bc4ce01"],["/src/images/whatsapp-logo_ca9c5ddd23bccf966c9306f5603125ed.svg","ca9c5ddd23bccf966c9306f5603125ed"],["/styles/main-0676aab775a3f3d48bbd.min.css","b60c2651a2a72cc64e313d482822e03e"],["/styles/main-0676aab775a3f3d48bbd.min.css.map","6e3dd6fc5c4f3fe2b74342fc0fe9309f"],["/styles/main-0676aab775a3f3d48bbd.min.css.map.gz","e9c1fb5e600fa78bb0c64917c4e28986"]],cacheName="sw-precache-v3-character-arena-1.3.5-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function a(c,s){if(!n[c]){if(!t[c]){var i="function"==typeof require&&require;if(!s&&i)return i(c,!0);if(o)return o(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return a(n||e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var o="function"==typeof require&&require,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||u.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||u.cache.name,caches.open(t)}function o(e,t,n){var r=c.bind(null,e,t,n);i=i?i.then(r):r()}function c(e,t,n){var a=e.url,o=n.maxAgeSeconds,c=n.maxEntries,s=n.name,i=Date.now();return r("Updating LRU order for "+a+". Max entries is "+c+", max age is "+o),f.getDb(s).then(function(e){return f.setTimestampForUrl(e,a,i)}).then(function(e){return f.expireEntries(e,c,o,i)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function s(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,u=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||u.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&a(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||u.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&o(e,n,r)})}),r.clone()})},openCache:a,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return a(t).then(function(t){return t.add(e)})},uncache:function(e,t){return a(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||s(e),u.preCacheItems=u.preCacheItems.concat(e)},validatePrecacheInput:s,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){function r(e){return new Promise(function(t,n){var r=indexedDB.open(c+e,s);r.onupgradeneeded=function(){r.result.createObjectStore(i,{keyPath:u}).createIndex(f,f,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function a(e,t,n){return t?new Promise(function(r,a){var o=1e3*t,c=[],s=e.transaction(i,"readwrite"),h=s.objectStore(i);h.index(f).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-o>t.value[f]){var r=t.value[u];c.push(r),h.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=a}):Promise.resolve([])}function o(e,t){return t?new Promise(function(n,r){var a=[],o=e.transaction(i,"readwrite"),c=o.objectStore(i),s=c.index(f),h=s.count();s.count().onsuccess=function(){var e=h.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var o=r.value[u];a.push(o),c.delete(o),e-a.length>t&&r.continue()}})},o.oncomplete=function(){n(a)},o.onabort=r}):Promise.resolve([])}var c="sw-toolbox-",s=1,i="store",u="url",f="timestamp",h={};t.exports={getDb:function(e){return e in h||(h[e]=r(e)),h[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,a){var o=e.transaction(i,"readwrite");o.objectStore(i).put({url:t,timestamp:n}),o.oncomplete=function(){r(e)},o.onabort=function(){a(o.error)}})},expireEntries:function(e,t,n,r){return a(e,n,r).then(function(n){return o(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),o=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=o.match(e.request);t?e.respondWith(t(e.request)):o.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(o.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(e){return Promise.all(c.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(t){return a.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,a=e("path-to-regexp"),o=function(e,t,n,o){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=o,this.handler=n};o.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=o},{"path-to-regexp":15}],6:[function(e,t,n){function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var a=e("./route"),o=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;)new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next();return a},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var i=new a(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=i.regexp||i.fullUrlRegExp;f.has(h.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,i)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,c(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],o=a&&a.get(e.toLowerCase());if(o){var s=c(o,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache first ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(t){var o=n.cache||r.cache,c=Date.now();return a.isResponseFresh(t,o.maxAgeSeconds,c)?t:a.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache only ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,o=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,o))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),a=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(o,c){var s=!1,i=[],u=function(e){i.push(e.toString()),s?c(new Error('Both cache and network failed: "'+i.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?o(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),a(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){var o=(n=n||{}).successResponses||r.successResponses,c=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return a.debug("Strategy: network first ["+e.url+"]",n),a.openCache(n).then(function(t){var s,i,u=[];if(c){var f=new Promise(function(o){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,c=Date.now(),s=t.maxAgeSeconds;a.isResponseFresh(e,s,c)&&o(e)})},1e3*c)});u.push(f)}var h=a.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),o.test(e.status))return e;throw a.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return a.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(h),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),o=e("./helpers"),c=e("./strategies"),s=e("./listeners");o.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:a,options:r,cache:o.cache,uncache:o.uncache,precache:o.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],a=0,o=0,c="",u=t&&t.delimiter||"/";null!=(n=g.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(o,p),o=p+f.length,h)c+=h[1];else{var l=e[o],d=n[2],m=n[3],b=n[4],v=n[5],x=n[6],w=n[7];c&&(r.push(c),c="");var y=null!=d&&null!=l&&l!==d,E="+"===x||"*"===x,R="?"===x||"*"===x,C=n[2]||u,k=b||v;r.push({name:m||a++,prefix:d||"",delimiter:C,optional:R,repeat:E,partial:y,asterisk:!!w,pattern:k?i(k):w?".*":"[^"+s(C)+"]+?"})}}return o<e.length&&(c+=e.substr(o)),c&&r.push(c),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function o(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var c="",s=n||{},i=(r||{}).pretty?a:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var h,p=s[f.name];if(null==p){if(f.optional){f.partial&&(c+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(b(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var l=0;l<p.length;l++){if(h=i(p[l]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");c+=(0===l?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?o(p):i(p),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');c+=f.prefix+h}}else c+=f}return c}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function h(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}function p(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(m(e[a],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}function l(e,t,n){return d(r(e,n),t,n)}function d(e,t,n){b(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,o="",c=0;c<e.length;c++){var i=e[c];if("string"==typeof i)o+=s(i);else{var h=s(i.prefix),p="(?:"+i.pattern+")";t.push(i),i.repeat&&(p+="(?:"+h+p+")*"),o+=p=i.optional?i.partial?h+"("+p+")?":"(?:"+h+"("+p+"))?":h+"("+p+")"}}var l=s(n.delimiter||"/"),d=o.slice(-l.length)===l;return r||(o=(d?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=a?"$":r&&d?"":"(?="+l+"|$)",u(new RegExp("^"+o,f(n)),t)}function m(e,t,n){return b(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?h(e,t):b(e)?p(e,t,n):l(e,t,n)}var b=e("isarray");t.exports=m,t.exports.parse=r,t.exports.compile=function(e,t){return c(r(e,t))},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=d;var g=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/https:\/\/characterarena.com/,toolbox.fastest,{}),toolbox.router.get(/https:\/\/blzmedia-a.akamaihd.net\/wow\/icons\/56\/(.*).jpg/,toolbox.fastest,{}),toolbox.router.get(/https:\/\/www.wowprogress.com\/favicon.ico/,toolbox.fastest,{}),toolbox.router.get(/https:\/\/(.*).api.battle.net/,toolbox.fastest,{}),toolbox.router.get(/https:\/\/render-us.worldofwarcraft.com\/character\//,toolbox.fastest,{});