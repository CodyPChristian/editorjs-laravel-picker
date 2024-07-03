!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LaravelPicker=t():e.LaravelPicker=t()}(self,(()=>(()=>{var e={669:(e,t,n)=>{e.exports=n(609)},448:(e,t,n)=>{"use strict";var r=n(867),i=n(26),a=n(372),o=n(327),s=n(97),l=n(109),c=n(985),u=n(61),d=n(655),f=n(263);e.exports=function(e){return new Promise((function(t,n){var p,h=e.data,m=e.headers,y=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(h)&&delete m["Content-Type"];var g=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(b+":"+x)}var w=s(e.baseURL,e.url);function _(){if(g){var r="getAllResponseHeaders"in g?l(g.getAllResponseHeaders()):null,a={data:y&&"text"!==y&&"json"!==y?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:r,config:e,request:g};i((function(e){t(e),v()}),(function(e){n(e),v()}),a),g=null}}if(g.open(e.method.toUpperCase(),o(w,e.params,e.paramsSerializer),!0),g.timeout=e.timeout,"onloadend"in g?g.onloadend=_:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(_)},g.onabort=function(){g&&(n(u("Request aborted",e,"ECONNABORTED",g)),g=null)},g.onerror=function(){n(u("Network Error",e,null,g)),g=null},g.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||d.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(u(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",g)),g=null},r.isStandardBrowserEnv()){var k=(e.withCredentials||c(w))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;k&&(m[e.xsrfHeaderName]=k)}"setRequestHeader"in g&&r.forEach(m,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete m[t]:g.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(g.withCredentials=!!e.withCredentials),y&&"json"!==y&&(g.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){g&&(n(!e||e&&e.type?new f("canceled"):e),g.abort(),g=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null),g.send(h)}))}},609:(e,t,n)=>{"use strict";var r=n(867),i=n(849),a=n(321),o=n(185),s=function e(t){var n=new a(t),s=i(a.prototype.request,n);return r.extend(s,a.prototype,n),r.extend(s,n),s.create=function(n){return e(o(t,n))},s}(n(655));s.Axios=a,s.Cancel=n(263),s.CancelToken=n(972),s.isCancel=n(502),s.VERSION=n(288).version,s.all=function(e){return Promise.all(e)},s.spread=n(713),s.isAxiosError=n(268),e.exports=s,e.exports.default=s},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var r=n(263);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),i=n(327),a=n(782),o=n(572),s=n(185),l=n(875),c=l.validators;function u(e){this.defaults=e,this.interceptors={request:new a,response:new a}}u.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&l.assertOptions(n,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var a,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var d=[o,void 0];for(Array.prototype.unshift.apply(d,r),d=d.concat(u),a=Promise.resolve(t);d.length;)a=a.then(d.shift(),d.shift());return a}for(var f=t;r.length;){var p=r.shift(),h=r.shift();try{f=p(f)}catch(e){h(e);break}}try{a=o(f)}catch(e){return Promise.reject(e)}for(;u.length;)a=a.then(u.shift(),u.shift());return a},u.prototype.getUri=function(e){return e=s(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=u},782:(e,t,n)=>{"use strict";var r=n(867);function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},97:(e,t,n)=>{"use strict";var r=n(793),i=n(303);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},61:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,i,a){var o=new Error(e);return r(o,t,n,i,a)}},572:(e,t,n)=>{"use strict";var r=n(867),i=n(527),a=n(502),o=n(655),s=n(263);function l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s("canceled")}e.exports=function(e){return l(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return l(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(l(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function o(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function l(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||a,i=t(e);r.isUndefined(i)&&t!==l||(n[e]=i)})),n}},26:(e,t,n)=>{"use strict";var r=n(61);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867),i=n(655);e.exports=function(e,t,n){var a=this||i;return r.forEach(n,(function(n){e=n.call(a,e,t)})),e}},655:(e,t,n)=>{"use strict";var r=n(867),i=n(16),a=n(481),o={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var l,c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(l=n(448)),l),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(s(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||c.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw a(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c},288:e=>{e.exports={version:"0.26.0"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),a=o.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,a,o){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(a)&&s.push("domain="+a),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},268:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},109:(e,t,n)=>{"use strict";var r=n(867),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,o={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,n)=>{"use strict";var r=n(288).version,i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var a={};i.transitional=function(e,t,n){function i(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,o){if(!1===e)throw new Error(i(r," has been removed"+(t?" in "+t:"")));return t&&!a[r]&&(a[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,o)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),i=r.length;i-- >0;){var a=r[i],o=t[a];if(o){var s=e[a],l=void 0===s||o(s,a,e);if(!0!==l)throw new TypeError("option "+a+" must be "+l)}else if(!0!==n)throw Error("Unknown option "+a)}},validators:i}},867:(e,t,n)=>{"use strict";var r=n(849),i=Object.prototype.toString;function a(e){return Array.isArray(e)}function o(e){return void 0===e}function s(e){return"[object ArrayBuffer]"===i.call(e)}function l(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===i.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:a,isArrayBuffer:s,isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===i.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&s(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:l,isPlainObject:c,isUndefined:o,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return l(e)&&u(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===i.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:d,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):a(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)d(arguments[r],n);return t},extend:function(e,t,n){return d(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},424:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),a=n(645),o=n.n(a)()(i());o.push([e.id,".cdx-loader {\n  border: none;\n  margin: auto;\n}\n\n.cdx-picker {\n  --color-line: #EFF0F1;\n  --color-bg: #fff;\n  --color-bg-secondary: #F8F8F8;\n  --color-bg-secondary--hover: #f2f2f2;\n  --color-text-secondary: #707684;\n  display: flex;\n  align-items: center;\n  padding: 10px 12px;\n  border: 1px solid var(--color-line);\n  border-radius: 7px;\n  background: var(--color-bg);\n}\n\n.cdx-picker__control-panel {\n  padding: 10px;\n  display: flex;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,\n    rgba(15, 15, 15, 0.1) 0px 3px 6px,\n    rgba(15, 15, 15, 0.2) 0px 9px 24px;\n}\n\n.cdx-picker__control-panel-cont {\n  display: flex;\n  width: 100%;\n  flex-flow: column;\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.cdx-picker__gallery {\n  max-height: 400px;\n  background: white;\n  margin: 5px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  grid-column-gap: 10px;\n  grid-row-gap: 10px;\n}\n\n.cdx-picker__img-wrapper {\n  display: flex;\n  height: 50px;\n  align-items: center;\n}\n\n.cdx-picker__thumb {\n  border-radius: 10px;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.cdx-picker__name {\n  font-size: 12px;\n  color: gray;\n  width: 100%;\n  margin-left: 10px;\n  text-align: left;\n  cursor: pointer;\n}\n\n.cdx-picker_image_holder {\n  position: relative;\n  width: 27px;\n  height: 30px;\n  margin-right: 12px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.cdx-picker_image_holder img {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.cdx-picker_item_details {\n  display: grid;\n  grid-gap: 4px;\n  max-width: calc(100% - 80px);\n  margin: auto 0;\n  flex-grow: 2;\n}\n\n.cdx-picker_item_details_name {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  outline: none;\n  max-width: 90%;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1em;\n}\n\n.cdx-picker_item_details_name:empty::before {\n  content: attr(data-placeholder);\n  color: #7b7e89;\n}\n\n.cdx-picker_item_details_type {\n  color: var(--color-text-secondary);\n  font-size: 12px;\n  line-height: 1em;\n}\n\n.cdx-picker_item_details_size {\n  color: var(--color-text-secondary);\n  font-size: 12px;\n  line-height: 1em;\n}\n\n.cdx-picker_item_details_summary {\n  color: var(--color-text-secondary);\n  font-size: 12px;\n  line-height: 1em;\n}\n\n.cdx-picker_item_button {\n  display: flex;\n  align-items: center;\n  background: var(--color-bg-secondary);\n  padding: 6px;\n  border-radius: 6px;\n  margin: auto 0 auto auto;\n}\n\n.cdx-picker_item_button:hover {\n  background: var(--color-bg-secondary--hover);\n}\n\n.cdx-picker_item_button svg {\n  width: 20px;\n  height: 20px;\n  fill: none;\n}\n\n.cdx-picker__search {\n  margin: 10px;\n  width: 96%;\n}\n\n.cdx-picker__search:empty:not(:focus):before {\n  content: attr(data-placeholder);\n  color: #7b7e89;\n}\n\n.cdx-picker__no-results{\n  width: 100%;\n  text-align: center;\n  margin: 20px;\n}\n\n.panel-hidden {\n  display: none;\n}\n\n.panel-scroll {\n  overflow-y: scroll;\n}\n",""]);const s=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],u=a[c]||0,d="".concat(c," ").concat(u);a[c]=u+1;var f=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=i(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}o.push(d)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=n(a[o]);t[s].references--}for(var l=r(e,i),c=0;c<a.length;c++){var u=n(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},586:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="20" height="20"><path d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a2.81,2.81,0,0,0,.49-.05l.3-.07.07,0h0l.05,0,.37-.14.13-.07c.1-.06.21-.11.31-.18a3.79,3.79,0,0,0,.38-.32l.07-.09a2.69,2.69,0,0,0,.27-.32l.09-.13a2.31,2.31,0,0,0,.18-.35,1,1,0,0,0,.07-.15c.05-.12.08-.25.12-.38l0-.15A2.6,2.6,0,0,0,22,19V5A3,3,0,0,0,19,2ZM5,20a1,1,0,0,1-1-1V14.69l3.29-3.3h0a1,1,0,0,1,1.42,0L17.31,20Zm15-1a1,1,0,0,1-.07.36,1,1,0,0,1-.08.14.94.94,0,0,1-.09.12l-5.35-5.35.88-.88a1,1,0,0,1,1.42,0h0L20,16.69Zm0-5.14L18.12,12a3.08,3.08,0,0,0-4.24,0l-.88.88L10.12,10a3.08,3.08,0,0,0-4.24,0L4,11.86V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM13.5,6A1.5,1.5,0,1,0,15,7.5,1.5,1.5,0,0,0,13.5,6Z"></path></svg>'}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};return(()=>{"use strict";n.d(r,{default:()=>z});var e=n(379),t=n.n(e),i=n(795),a=n.n(i),o=n(569),s=n.n(o),l=n(565),c=n.n(l),u=n(216),d=n.n(u),f=n(589),p=n.n(f),h=n(424),m={};function y(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}m.styleTagTransform=p(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var g=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(e);return Array.isArray(n)?(t=i.classList).add.apply(t,y(n)):n&&i.classList.add(n),Object.keys(r).forEach((function(e){i[e]=r[e]})),i},b=n(669),x=n.n(b);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.endpoint=t&&t.endpoint?t.endpoint:null,this.search_param=t&&t.search_param?t.search_param:"term",this.results_key=t&&t.results_key?t.results_key:null}var t,n;return t=e,(n=[{key:"searchItems",value:function(e,t){var n,r,i,a=this;x().get("".concat(this.endpoint),{params:(n={},r=this.search_param,i=e,r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n)}).then((function(e){e=a.results_key?e.data[a.results_key]:e.data,t(a.parseResponse(e))})).catch((function(){return t([])}))}},{key:"getItems",value:function(e){var t=this;x().get("".concat(this.endpoint)).then((function(n){n=t.results_key?n.data[t.results_key]:n.data,e(t.parseResponse(n))})).catch((function(){return e([])}))}},{key:"parseResponse",value:function(e){var t=this;return e.map((function(e){return t.buildItemObject(e)}))}},{key:"buildItemObject",value:function(e){return{url:e.url,name:e.name,type:e.type,image:e.image,summary:e.summary,size:e.size}}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){var n=t.api,r=t.config,i=t.cssClasses,a=t.onSelectItem,o=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=n,this.config=r,this.readOnly=o,this.cssClasses=O(O({},i),{},{controlPanel:"cdx-picker__control-panel",search:"cdx-picker__search",itemGallery:"cdx-picker__gallery",noResults:"cdx-picker__no-results",imgWrapper:"cdx-picker__img-wrapper",thumb:"cdx-picker__thumb",name:"cdx-picker__name",active:"active",hidden:"panel-hidden",scroll:"panel-scroll"}),this.onSelectItem=a,this.nodes={loader:null,apiPanel:null,itemGallery:null,searchInput:null},this.apiClient=new _(this.config.api),this.searchTimeout=null}var t,n;return t=e,(n=[{key:"render",value:function(){var e=g("div",this.cssClasses.controlPanel),t=this.renderAPIPanel();return e.appendChild(t),this.nodes.apiPanel=t,e}},{key:"renderAPIPanel",value:function(){var e=this,t=g("div",["cdx-picker__control-panel-cont"]),n=g("div",this.cssClasses.itemGallery),r=g("div",[this.cssClasses.input,this.cssClasses.search],{id:"api-search",contentEditable:!this.readOnly,oninput:function(){return e.searchInputHandler()}});return r.dataset.placeholder="Search...",t.appendChild(r),t.appendChild(n),this.nodes.searchInput=r,this.nodes.itemGallery=n,t}},{key:"searchInputHandler",value:function(){this.showLoader(),this.performSearch()}},{key:"showLoader",value:function(){this.nodes.itemGallery.innerHTML="",this.nodes.loader=g("div",this.cssClasses.loading),this.nodes.itemGallery.appendChild(this.nodes.loader)}},{key:"performSearch",value:function(){var e=this;clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((function(){var t=e.nodes.searchInput.innerHTML;e.apiClient.searchItems(t,(function(t){return e.appendItemsToGallery(t)}))}),1e3)}},{key:"appendItemsToGallery",value:function(e){var t=this;if(this.nodes.itemGallery.innerHTML="",e&&e.length)this.nodes.apiPanel.classList.add(this.cssClasses.scroll),e.forEach((function(e){t.createThumb(e)}));else{var n=g("div",this.cssClasses.noResults,{innerHTML:"No results"});this.nodes.itemGallery.appendChild(n),this.nodes.apiPanel.classList.remove(this.cssClasses.scroll)}}},{key:"createThumb",value:function(e){var t=this,n=g("div",this.cssClasses.imgWrapper),r=g("img",this.cssClasses.thumb,{src:e.image,onclick:function(){return t.chooseAPIItem(e)}}),i=g("div",this.cssClasses.name,{innerHTML:e.name,onclick:function(){return t.chooseAPIItem(e)}});n.appendChild(r),n.appendChild(i),this.nodes.itemGallery.append(n)}},{key:"chooseAPIItem",value:function(e){this.onSelectItem(e)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=this,r=t.api,i=t.config,a=t.readOnly,o=t.onAddItemData;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r,this.config=i,this.readOnly=a,this.onAddItemData=o,this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,wrapper:"cdx-picker",imageHolder:"cdx-picker_image_holder",url:"cdx-picker__url",name:"cdx-picker__name",type:"cdx-picker__type",image:"cdx-picker__image",summary:"cdx-picker__summary",size:"cdx-picker__size"},this.controlPanel=new S({api:r,config:i,readOnly:a,cssClasses:this.CSS,onSelectItem:function(e){return n.selectItem(e)}}),this.nodes={wrapper:null,loader:null,image:null,title:null,file:{url:null,name:null,type:null,image:null,summary:null,size:null}}}var t,n;return t=e,(n=[{key:"render",value:function(e){var t=this,n=g("div",[this.CSS.baseClass,this.CSS.wrapper]),r=g("div",this.CSS.loading),i=g("img","",{onload:function(){return t.onImageLoad()},onerror:function(){return t.onImageLoadError()}});if(this.nodes.imageHolder=g("div",this.CSS.imageHolder),e.file.url){n.appendChild(r),i.src=e.file.image.replace("amp;",""),this.nodes.title=e.file.name,this.nodes.file=e.file;var a=this.buildItemDetails(e);a&&n.appendChild(a);var o=this.buildItemButton(e);o&&n.appendChild(o)}else{var s=this.controlPanel.render();this.nodes.controlPanelWrapper=s,n.appendChild(s)}return this.nodes.wrapper=n,this.nodes.loader=r,this.nodes.image=i,n}},{key:"buildItemDetails",value:function(e){return!!e&&function(e){var t,n,r,i,a,o,s,l,c=g("div","cdx-picker_item_details"),u=g("div",["cdx-picker_item_details_name"],{innerHTML:null!==(t=null==e||null===(n=e.file)||void 0===n?void 0:n.name)&&void 0!==t?t:""}),d=g("div",["cdx-picker_item_details_summary"],{innerHTML:null!==(r=null==e||null===(i=e.file)||void 0===i?void 0:i.summary)&&void 0!==r?r:""}),f=g("div",["cdx-picker_item_details_type"],{innerHTML:null!==(a=null==e||null===(o=e.file)||void 0===o?void 0:o.type)&&void 0!==a?a:""}),p=g("div",["cdx-picker_item_details_size"],{innerHTML:null!==(s=null==e||null===(l=e.file)||void 0===l?void 0:l.size)&&void 0!==s?s:""});return c.appendChild(u),c.appendChild(f),c.appendChild(p),c.appendChild(d),c}(e)}},{key:"buildItemButton",value:function(e){return!!e&&g("a",["cdx-picker_item_button"],{innerHTML:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7 10 4.86 4.86c.08.08.2.08.28 0L17 10" stroke="#000" stroke-width="2" stroke-linecap="round"></path></svg>',href:e.file.url,target:"_blank",rel:"nofollow noindex noreferrer"})}},{key:"onImageLoad",value:function(){this.nodes.imageHolder.prepend(this.nodes.image),this.nodes.wrapper.prepend(this.nodes.imageHolder),this.nodes.loader.remove()}},{key:"onImageLoadError",value:function(){this.removeCurrentBlock(),this.api.notifier.show({message:"Can not load the image, try again!",style:"error"})}},{key:"removeCurrentBlock",value:function(){var e=this;Promise.resolve().then((function(){var t=e.api.blocks.getCurrentBlockIndex();e.api.blocks.delete(t)})).catch((function(e){console.error(e)}))}},{key:"renderSettings",value:function(e){return this.tunes.render(e)}},{key:"showLoader",value:function(){this.nodes.controlPanelWrapper.remove(),this.nodes.wrapper.appendChild(this.nodes.loader)}},{key:"selectItem",value:function(e){this.onAddItemData(e),this.showLoader(),this.buildItemDetails(e)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),T=n(586),A=n.n(T);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t){var n=this,r=t.data,i=t.api,a=t.config,o=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=i,this.readOnly=o,this.ui=new E({data:r,api:i,config:a,readOnly:o,onAddItemData:function(e){return n.addItemData(e)}}),this.data={title:r.title||null,file:{url:null,name:null,type:null,image:null,summary:null,size:null}},this.data.file.url=r.file&&r.file.url?r.file.url:null,this.data.file.name=r.file&&r.file.name?r.file.name:null,this.data.file.type=r.file&&r.file.type?r.file.type:null,this.data.file.image=r.file&&r.file.image?r.file.image:null,this.data.file.summary=r.file&&r.file.summary?r.file.summary:null,this.data.file.size=r.file&&r.file.size?r.file.size:null}var t,n,r;return t=e,r=[{key:"toolbox",get:function(){return{title:"Picker",icon:A()}}},{key:"sanitize",get:function(){}},{key:"isReadOnlySupported",get:function(){return!0}}],(n=[{key:"render",value:function(){return this.ui.render(this.data)}},{key:"save",value:function(){var e=this.ui.nodes,t=e.title,n=e.file;return this.data.title=t,this.data.file=n,this.data.title||(this.data.title=n.name),this.data.file.url||(this.data.file.url=n.url),this.data.file.name||(this.data.file.name=n.name),this.data.file.type||(this.data.file.type=n.type),this.data.file.image||(this.data.file.image=n.image),this.data.file.summary||(this.data.file.summary=n.summary),this.data.file.size||(this.data.file.size=n.size),this.data}},{key:"validate",value:function(e){return!0}},{key:"addItemData",value:function(e){this.data.title=e.name,this.data.file.url=e.url,this.data.file.name=e.name,this.data.file.type=e.type,this.data.file.image=e.image,this.data.file.summary=e.summary,this.data.file.size=e.size}},{key:"data",get:function(){return this._data},set:function(e){this._data=L(L({},this.data),e),e.title&&(this.data.title=e.title),e.file.url&&(this.data.file.url=e.file.url),e.file.name&&(this.data.file.name=e.file.name),e.file.type&&(this.data.file.type=e.file.type),e.file.image&&(this.data.file.image=e.file.image),e.file.summary&&(this.data.file.summary=e.file.summary),e.file.size&&(this.data.file.size=e.file.size),this.ui.nodes.title=this.data.title,this.ui.nodes.file.url=this.data.file.url,this.ui.nodes.file.name=this.data.file.name,this.ui.nodes.file.type=this.data.file.type,this.ui.nodes.file.image=this.data.file.image,this.ui.nodes.file.summary=this.data.file.summary,this.ui.nodes.file.size=this.data.file.size,this._data.title=this.data.title,this._data.file=this.data.file,this._data.file.url=this.data.file.url,this._data.file.name=this.data.file.name,this._data.file.type=this.data.file.type,this._data.file.image=this.data.file.image,this._data.file.summary=this.data.file.summary,this._data.file.size=this.data.file.size}}])&&R(t.prototype,n),r&&R(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()})(),r.default})()));