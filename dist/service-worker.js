"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/main-8674529aa31c58117712.min.js","fffa80dc453bdaa06cfb67ce8666e366"],["/main-8674529aa31c58117712.min.js.gz","dd0888390418f43f5afd7318f38d3b5b"],["/main-8674529aa31c58117712.min.js.map.gz","5203807567fb054b2c0c7f362e8cf5e4"],["/manifest.json","d585fe2f37234d46c98797d78d4fa434"],["/src/images/background-leather_46232dcb2e350bda3894744ea2af0b4f.jpg","46232dcb2e350bda3894744ea2af0b4f"],["/src/images/background_45afe511909276ee260acaf626f875bf.jpg","45afe511909276ee260acaf626f875bf"],["/src/images/blizzard-icons_92ea4255f59fbde5d476d890a16a6126.svg","92ea4255f59fbde5d476d890a16a6126"],["/src/images/blizzard-icons_92ea4255f59fbde5d476d890a16a6126.svg.gz","d45c2067206583ea5ab67a117a1ad54b"],["/src/images/coin-copper_cd018dd85f8e9acf3845724cfac66387.gif","cd018dd85f8e9acf3845724cfac66387"],["/src/images/coin-gold_075b76fba2df68d91b2e52f4a01f1ebe.gif","075b76fba2df68d91b2e52f4a01f1ebe"],["/src/images/coin-silver_4554a0c6bbb6f5b3fef5a8e9e2bb0f24.gif","4554a0c6bbb6f5b3fef5a8e9e2bb0f24"],["/src/images/favicons/android-chrome-128x128_7fb7daaa38ddd81ecf50ab8d5b0fe61a.png","7fb7daaa38ddd81ecf50ab8d5b0fe61a"],["/src/images/favicons/android-chrome-192x192_2dd65c1b878d9444fc5415efa80a4827.png","2dd65c1b878d9444fc5415efa80a4827"],["/src/images/favicons/apple-touch-icon-120x120_cfc014ed562556db14c3f764b11aabf7.png","cfc014ed562556db14c3f764b11aabf7"],["/src/images/favicons/apple-touch-icon-152x152_9ab4ddd6cfbe2fd5c1c6d84324bfd998.png","9ab4ddd6cfbe2fd5c1c6d84324bfd998"],["/src/images/favicons/apple-touch-icon-167x167_7d0965cc52aa88ad6d7fd8be3fa0bc64.png","7d0965cc52aa88ad6d7fd8be3fa0bc64"],["/src/images/favicons/apple-touch-icon-180x180_189fb257347168c3a3a2da2d1aa1461e.png","189fb257347168c3a3a2da2d1aa1461e"],["/src/images/favicons/favicon-36x36_30b9d44b5194336b50e679e0e5c965fe.png","30b9d44b5194336b50e679e0e5c965fe"],["/src/images/favicons/favicon-48x48_28ec1bb0e2e233857651b6fb1ee1b206.png","28ec1bb0e2e233857651b6fb1ee1b206"],["/src/images/favicons/favicon-72x72_7971f8b4c7a74c5884a9de34a2c456b5.png","7971f8b4c7a74c5884a9de34a2c456b5"],["/src/images/favicons/favicon-96x96_d71373b96893e217ac329b2b59dc19f5.png","d71373b96893e217ac329b2b59dc19f5"],["/src/images/item-slots_712f1f52a81a124430ee9507631e94f0.png","712f1f52a81a124430ee9507631e94f0"],["/src/images/logo-alliance_0a23a6099c3cbf1d280bf0d55a1eef0f.png","0a23a6099c3cbf1d280bf0d55a1eef0f"],["/src/images/logo-horde_b57fd17304effd5b26060aef075c1ab0.png","b57fd17304effd5b26060aef075c1ab0"],["/src/images/sockets_7e3c3fc2cd800e888562f7ea2bc4ce01.png","7e3c3fc2cd800e888562f7ea2bc4ce01"],["/src/images/whatsapp-logo_ca9c5ddd23bccf966c9306f5603125ed.svg","ca9c5ddd23bccf966c9306f5603125ed"],["/styles/main-8674529aa31c58117712.min.css","96d039bcaee6108b3da2c7672dbc6c79"],["/styles/main-8674529aa31c58117712.min.css.map","130c55814628c9aea77c81415a0bd820"],["/styles/main-8674529aa31c58117712.min.css.map.gz","efbd1e34c2976cbb126bc4ce000b4821"]],cacheName="sw-precache-v3-character-arena-1.3.5-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(n);t||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function a(c,s){if(!n[c]){if(!t[c]){var i="function"==typeof require&&require;if(!s&&i)return i(c,!0);if(o)return o(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return a(n||e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var o="function"==typeof require&&require,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,t,n){function r(e,t){t=t||{},(t.debug||m.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function o(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&a(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var a=e.url,o=n.maxAgeSeconds,c=n.maxEntries,s=n.name,i=Date.now();return r("Updating LRU order for "+a+". Max entries is "+c+", max age is "+o),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,a,i)}).then(function(e){return g.expireEntries(e,c,o,i)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function i(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return a(t).then(function(t){return t.add(e)})}function f(e,t){return a(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){if(new Date(r).getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:o,openCache:a,renameCache:i,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){r.result.createObjectStore(h,{keyPath:p}).createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function a(e){return e in d||(d[e]=r(e)),d[e]}function o(e,t,n){return new Promise(function(r,a){var o=e.transaction(h,"readwrite");o.objectStore(h).put({url:t,timestamp:n}),o.oncomplete=function(){r(e)},o.onabort=function(){a(o.error)}})}function c(e,t,n){return t?new Promise(function(r,a){var o=1e3*t,c=[],s=e.transaction(h,"readwrite"),i=s.objectStore(h);i.index(l).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-o>t.value[l]){var r=t.value[p];c.push(r),i.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=a}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var a=[],o=e.transaction(h,"readwrite"),c=o.objectStore(h),s=c.index(l),i=s.count();s.count().onsuccess=function(){var e=i.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var o=r.value[p];a.push(o),c.delete(o),e-a.length>t&&r.continue()}})},o.oncomplete=function(){n(a)},o.onabort=r}):Promise.resolve([])}function i(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:a,setTimestampForUrl:o,expireEntries:i}},{}],3:[function(e,t,n){function r(e){var t=i.match(e.request);t?e.respondWith(t(e.request)):i.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(i.default(e.request))}function a(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function o(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(o).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),i=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:a,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location),a=r.pathname,o=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var a=e("./route"),o=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var i=new a(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=i.regexp||i.fullUrlRegExp;f.has(h.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,i)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,c(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],o=a&&a.get(e.toLowerCase());if(o){var s=c(o,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){function r(e,t,n){return n=n||{},o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||a.cache,c=Date.now();return o.isResponseFresh(t,r.maxAgeSeconds,c)?t:o.fetchAndCache(e,n)})})}var a=e("../options"),o=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){function r(e,t,n){return n=n||{},o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||a.cache,r=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var a=e("../options"),o=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){function r(e,t,n){return a.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,i=[],u=function(e){i.push(e.toString()),s?c(new Error('Both cache and network failed: "'+i.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};a.fetchAndCache(e.clone(),n).then(f,u),o(e,t,n).then(f,u)})}var a=e("../helpers"),o=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){function r(e,t,n){n=n||{};var r=n.successResponses||a.successResponses,c=n.networkTimeoutSeconds||a.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",n),o.openCache(n).then(function(t){var s,i,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||a.cache,c=Date.now(),s=t.maxAgeSeconds;o.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=o.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(h),Promise.race(u)})}var a=e("../options"),o=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){function r(e,t,n){return a.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var a=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),o=e("./helpers"),c=e("./strategies"),s=e("./listeners");o.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:a,options:r,cache:o.cache,uncache:o.uncache,precache:o.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],a=0,o=0,c="",s=t&&t.delimiter||"/";null!=(n=v.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(o,p),o=p+f.length,h)c+=h[1];else{var l=e[o],d=n[2],m=n[3],g=n[4],b=n[5],x=n[6],w=n[7];c&&(r.push(c),c="");var y=null!=d&&null!=l&&l!==d,E="+"===x||"*"===x,R="?"===x||"*"===x,C=n[2]||s,k=g||b;r.push({name:m||a++,prefix:d||"",delimiter:C,optional:R,repeat:E,partial:y,asterisk:!!w,pattern:k?u(k):w?".*":"[^"+i(C)+"]+?"})}}return o<e.length&&(c+=e.substr(o)),c&&r.push(c),r}function a(e,t){return s(r(e,t))}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var a="",s=n||{},i=r||{},u=i.pretty?o:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(a+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(b(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');a+=h.prefix+p}}else a+=h}return a}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(g(e[a],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",h(n)),t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){b(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,a=!1!==n.end,o="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)o+=i(s);else{var u=i(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",o+=p}}var l=i(n.delimiter||"/"),d=o.slice(-l.length)===l;return r||(o=(d?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=a?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+o,h(n)),t)}function g(e,t,n){return b(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):b(e)?l(e,t,n):d(e,t,n)}var b=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=a,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var v=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/https:\/\/characterarena.com/,toolbox.fastest,{}),toolbox.router.get(/https:\/\/blzmedia-a.akamaihd.net\/wow\/icons\/56\/(.*).jpg/,toolbox.fastest,{}),toolbox.router.get(/https:\/\/www.wowprogress.com\/favicon.ico/,toolbox.fastest,{}),toolbox.router.get(/https:\/\/(.*).api.battle.net/,toolbox.fastest,{}),toolbox.router.get(/https:\/\/render-us.worldofwarcraft.com\/character\//,toolbox.fastest,{});