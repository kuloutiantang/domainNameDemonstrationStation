import{bT as Ye,r as v,g as k}from"./index-BW-5z38Q.js";const Nn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Pn=Ye("color",()=>{const e=[255,255,255],t=[13,17,23],n=28,r=2,s=v(!1),o=v(0),i=v(0),c=v(0),f=k(()=>[o.value,i.value,c.value]),l=k(()=>"rgb("+o.value+","+i.value+","+c.value+")"),u=v([255,255,255]),p=k(()=>"rgb("+u.value.join(",")+")"),w=v([255,255,255]),b=k(()=>"rgb("+w.value.join(",")+")"),d=v(3),h=v(0),g=v(!1),R=k(()=>Math.round((100*h.value/d.value+1)*n)),O=k(()=>Math.round((100*h.value/d.value+1)*n*2)),E=()=>{let y=new Date().getHours();y<1||18<=y?(o.value=242,i.value=123,c.value=31):1<=y&&y<5?(o.value=139,i.value=38,c.value=113):5<=y&&y<10?(o.value=140,i.value=194,c.value=105):10<=y&&y<14?(o.value=242,i.value=185,c.value=178):14<=y&&y<18&&(o.value=35,i.value=118,c.value=183),w.value=[o.value,i.value,c.value],window.matchMedia("(prefers-color-scheme: light)").matches?u.value=e:u.value=t},L=()=>{const y=()=>{setTimeout(()=>{o.value=P(o.value,t[0],e[0]),y()},A(R.value,O.value))},_=()=>{setTimeout(()=>{i.value=P(i.value,t[1],e[1]),_()},A(R.value,O.value))},U=()=>{setTimeout(()=>{c.value=P(c.value,t[2],e[2]),U()},A(R.value,O.value))};y(),_(),U()},Y=(y=3)=>{d.value=y,E(),L(),s.value=!0},A=(y,_)=>(y=Math.ceil(y),_=Math.floor(_),Math.floor(Math.random()*(_-y+1))+y),P=(y,_=0,U=255)=>(y+=A(-r,r),y=y<_?_:y,y=y>U?U:y,y);return{beReady:s,init:Y,colorR:o,colorG:i,colorB:c,themeColorArr:f,themeColor:l,targetColor:p,initialColor:b,approaching:()=>{h.value+=1,h.value>=d.value?(g.value=!0,h.value=0,o.value=w.value[0],i.value=w.value[1],c.value=w.value[2]):(g.value=!1,o.value+=(u.value[0]-o.value)*(1/(d.value-h.value)),i.value+=(u.value[1]-i.value)*(1/(d.value-h.value)),c.value+=(u.value[2]-c.value)*(1/(d.value-h.value)))},itSTime:g}});function _e(e,t){return function(){return e.apply(t,arguments)}}const{toString:et}=Object.prototype,{getPrototypeOf:de}=Object,$=(e=>t=>{const n=et.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>$(t)===e),G=e=>t=>typeof t===e,{isArray:j}=Array,M=G("undefined");function tt(e){return e!==null&&!M(e)&&e.constructor!==null&&!M(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ve=N("ArrayBuffer");function nt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ve(e.buffer),t}const rt=G("string"),C=G("function"),Fe=G("number"),X=e=>e!==null&&typeof e=="object",st=e=>e===!0||e===!1,J=e=>{if($(e)!=="object")return!1;const t=de(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ot=N("Date"),it=N("File"),at=N("Blob"),ct=N("FileList"),ut=e=>X(e)&&C(e.pipe),lt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||C(e.append)&&((t=$(e))==="formdata"||t==="object"&&C(e.toString)&&e.toString()==="[object FormData]"))},ft=N("URLSearchParams"),[dt,pt,ht,mt]=["ReadableStream","Request","Response","Headers"].map(N),yt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),j(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Le(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Be=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,De=e=>!M(e)&&e!==Be;function oe(){const{caseless:e}=De(this)&&this||{},t={},n=(r,s)=>{const o=e&&Le(t,s)||s;J(t[o])&&J(r)?t[o]=oe(t[o],r):J(r)?t[o]=oe({},r):j(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const wt=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&C(s)?e[o]=_e(s,n):e[o]=s},{allOwnKeys:r}),e),bt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Et=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},gt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&de(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Rt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},St=e=>{if(!e)return null;if(j(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Tt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&de(Uint8Array)),Ot=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},At=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ct=N("HTMLFormElement"),xt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),we=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Nt=N("RegExp"),Ue=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Pt=e=>{Ue(e,(t,n)=>{if(C(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(C(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_t=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return j(e)?r(e):r(String(e).split(t)),n},vt=()=>{},Ft=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,te="abcdefghijklmnopqrstuvwxyz",be="0123456789",ke={DIGIT:be,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+be},Lt=(e=16,t=ke.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Bt(e){return!!(e&&C(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Dt=e=>{const t=new Array(10),n=(r,s)=>{if(X(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=j(r)?[]:{};return I(r,(i,c)=>{const f=n(i,s+1);!M(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Ut=N("AsyncFunction"),kt=e=>e&&(X(e)||C(e))&&C(e.then)&&C(e.catch),a={isArray:j,isArrayBuffer:ve,isBuffer:tt,isFormData:lt,isArrayBufferView:nt,isString:rt,isNumber:Fe,isBoolean:st,isObject:X,isPlainObject:J,isReadableStream:dt,isRequest:pt,isResponse:ht,isHeaders:mt,isUndefined:M,isDate:ot,isFile:it,isBlob:at,isRegExp:Nt,isFunction:C,isStream:ut,isURLSearchParams:ft,isTypedArray:Tt,isFileList:ct,forEach:I,merge:oe,extend:wt,trim:yt,stripBOM:bt,inherits:Et,toFlatObject:gt,kindOf:$,kindOfTest:N,endsWith:Rt,toArray:St,forEachEntry:Ot,matchAll:At,isHTMLForm:Ct,hasOwnProperty:we,hasOwnProp:we,reduceDescriptors:Ue,freezeMethods:Pt,toObjectSet:_t,toCamelCase:xt,noop:vt,toFiniteNumber:Ft,findKey:Le,global:Be,isContextDefined:De,ALPHABET:ke,generateString:Lt,isSpecCompliantForm:Bt,toJSONObject:Dt,isAsyncFn:Ut,isThenable:kt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const je=m.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}});Object.defineProperties(m,qe);Object.defineProperty(je,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(je);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const jt=null;function ie(e){return a.isPlainObject(e)||a.isArray(e)}function He(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ee(e,t,n){return e?e.concat(t).map(function(s,o){return s=He(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function qt(e){return a.isArray(e)&&!e.some(ie)}const Ht=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,g){return!a.isUndefined(g[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,h,g){let R=d;if(d&&!g&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&qt(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(R=a.toArray(d)))return h=He(h),R.forEach(function(E,L){!(a.isUndefined(E)||E===null)&&t.append(i===!0?Ee([h],L,o):i===null?h:h+"[]",l(E))}),!1}return ie(d)?!0:(t.append(Ee(g,h,o),l(d)),!1)}const p=[],w=Object.assign(Ht,{defaultVisitor:u,convertValue:l,isVisitable:ie});function b(d,h){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(d),a.forEach(d,function(R,O){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(O)?O.trim():O,h,w))===!0&&b(R,h?h.concat(O):[O])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return b(e),t}function ge(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pe(e,t){this._pairs=[],e&&Q(e,this,t)}const Me=pe.prototype;Me.append=function(t,n){this._pairs.push([t,n])};Me.toString=function(t){const n=t?function(r){return t.call(this,r,ge)}:ge;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Mt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,n){if(!t)return e;const r=n&&n.encode||Mt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new pe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Re{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},It=typeof URLSearchParams<"u"?URLSearchParams:pe,zt=typeof FormData<"u"?FormData:null,Jt=typeof Blob<"u"?Blob:null,Vt={isBrowser:!0,classes:{URLSearchParams:It,FormData:zt,Blob:Jt},protocols:["http","https","file","blob","url","data"]},he=typeof window<"u"&&typeof document<"u",Wt=(e=>he&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Kt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",$t=he&&window.location.href||"http://localhost",Gt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:he,hasStandardBrowserEnv:Wt,hasStandardBrowserWebWorkerEnv:Kt,origin:$t},Symbol.toStringTag,{value:"Module"})),x={...Gt,...Vt};function Xt(e,t){return Q(e,new x.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return x.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Qt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Zt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Je(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Zt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Qt(r),s,n,0)}),n}return null}function Yt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const z={transitional:ze,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Je(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Xt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Q(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Yt(t)):t}],transformResponse:[function(t){const n=this.transitional||z.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{z.headers[e]={}});const en=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),tn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&en[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Se=Symbol("internals");function H(e){return e&&String(e).trim().toLowerCase()}function V(e){return e===!1||e==null?e:a.isArray(e)?e.map(V):String(e)}function nn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const rn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ne(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function sn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function on(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class T{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=H(f);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||l===!0||l===void 0&&s[p]!==!1)&&(s[p||f]=V(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!rn(t))i(tn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=H(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return nn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=H(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ne(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=H(i),i){const c=a.findKey(r,i);c&&(!n||ne(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ne(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=V(s),delete n[o];return}const c=t?sn(o):String(o).trim();c!==o&&delete n[o],n[c]=V(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Se]=this[Se]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=H(i);r[c]||(on(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}T.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(T.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(T);function re(e,t){const n=this||z,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ve(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,m,{__CANCEL__:!0});function We(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function an(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function cn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let p=o,w=0;for(;p!==s;)w+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const b=u&&l-u;return b?Math.round(w*1e3/b):void 0}}function un(e,t){let n=0;const r=1e3/t;let s=null;return function(){const i=this===!0,c=Date.now();if(i||c-n>r)return s&&(clearTimeout(s),s=null),n=c,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),e.apply(null,arguments)),r-(c-n)))}}const W=(e,t,n=3)=>{let r=0;const s=cn(50,250);return un(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const p={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null};p[t?"download":"upload"]=!0,e(p)},n)},ln=x.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),fn=x.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function dn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function pn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ke(e,t){return e&&!dn(t)?pn(e,t):t}const Te=e=>e instanceof T?{...e}:e;function D(e,t){t=t||{};const n={};function r(l,u,p){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:p},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,p){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,p)}else return r(l,u,p)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,p){if(p in t)return r(l,u);if(p in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>s(Te(l),Te(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=f[u]||s,w=p(e[u],t[u],u);a.isUndefined(w)&&p!==c||(n[u]=w)}),n}const $e=e=>{const t=D({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=T.from(i),t.url=Ie(Ke(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(x.hasStandardBrowserEnv||x.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(x.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&ln(t.url))){const l=s&&o&&fn.read(o);l&&i.set(s,l)}return t},hn=typeof XMLHttpRequest<"u",mn=hn&&function(e){return new Promise(function(n,r){const s=$e(e);let o=s.data;const i=T.from(s.headers).normalize();let{responseType:c}=s,f;function l(){s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let u=new XMLHttpRequest;u.open(s.method.toUpperCase(),s.url,!0),u.timeout=s.timeout;function p(){if(!u)return;const b=T.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),h={data:!c||c==="text"||c==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:b,config:e,request:u};We(function(R){n(R),l()},function(R){r(R),l()},h),u=null}"onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,s,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,s,u)),u=null},u.ontimeout=function(){let d=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const h=s.transitional||ze;s.timeoutErrorMessage&&(d=s.timeoutErrorMessage),r(new m(d,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,s,u)),u=null},o===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(d,h){u.setRequestHeader(h,d)}),a.isUndefined(s.withCredentials)||(u.withCredentials=!!s.withCredentials),c&&c!=="json"&&(u.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&u.addEventListener("progress",W(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",W(s.onUploadProgress)),(s.cancelToken||s.signal)&&(f=b=>{u&&(r(!b||b.type?new q(null,e,u):b),u.abort(),u=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const w=an(s.url);if(w&&x.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}u.send(o||null)})},yn=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,i();const l=f instanceof Error?f:this.reason;n.abort(l instanceof m?l:new q(l instanceof Error?l.message:l))}};let o=t&&setTimeout(()=>{s(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},wn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},bn=async function*(e,t,n){for await(const r of e)yield*wn(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Oe=(e,t,n,r,s)=>{const o=bn(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(c){const{done:f,value:l}=await o.next();if(f){c.close(),r();return}let u=l.byteLength;n&&n(i+=u),c.enqueue(new Uint8Array(l))},cancel(c){return r(c),o.return()}},{highWaterMark:2})},Ae=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},Z=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ge=Z&&typeof ReadableStream=="function",ae=Z&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),En=Ge&&(()=>{let e=!1;const t=new Request(x.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Ce=64*1024,ce=Ge&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),K={stream:ce&&(e=>e.body)};Z&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!K[t]&&(K[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const gn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await ae(e)).byteLength},Rn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??gn(t)},Sn=Z&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:p="same-origin",fetchOptions:w}=$e(e);l=l?(l+"").toLowerCase():"text";let[b,d]=s||o||i?yn([s,o],i):[],h,g;const R=()=>{!h&&setTimeout(()=>{b&&b.unsubscribe()}),h=!0};let O;try{if(f&&En&&n!=="get"&&n!=="head"&&(O=await Rn(u,r))!==0){let A=new Request(t,{method:"POST",body:r,duplex:"half"}),P;a.isFormData(r)&&(P=A.headers.get("content-type"))&&u.setContentType(P),A.body&&(r=Oe(A.body,Ce,Ae(O,W(f)),null,ae))}a.isString(p)||(p=p?"cors":"omit"),g=new Request(t,{...w,signal:b,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",withCredentials:p});let E=await fetch(g);const L=ce&&(l==="stream"||l==="response");if(ce&&(c||L)){const A={};["status","statusText","headers"].forEach(ee=>{A[ee]=E[ee]});const P=a.toFiniteNumber(E.headers.get("content-length"));E=new Response(Oe(E.body,Ce,c&&Ae(P,W(c,!0)),L&&R,ae),A)}l=l||"text";let Y=await K[a.findKey(K,l)||"text"](E,e);return!L&&R(),d&&d(),await new Promise((A,P)=>{We(A,P,{data:Y,headers:T.from(E.headers),status:E.status,statusText:E.statusText,config:e,request:g})})}catch(E){throw R(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,g),{cause:E.cause||E}):m.from(E,E&&E.code,e,g)}}),ue={http:jt,xhr:mn,fetch:Sn};a.forEach(ue,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const xe=e=>`- ${e}`,Tn=e=>a.isFunction(e)||e===null||e===!1,Xe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Tn(n)&&(r=ue[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(xe).join(`
`):" "+xe(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ue};function se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function Ne(e){return se(e),e.headers=T.from(e.headers),e.data=re.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xe.getAdapter(e.adapter||z.adapter)(e).then(function(r){return se(e),r.data=re.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return Ve(r)||(se(e),r&&r.response&&(r.response.data=re.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const Qe="1.7.2",me={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{me[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Pe={};me.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Qe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Pe[i]&&(Pe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function On(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const le={assertOptions:On,validators:me},F=le.validators;class B{constructor(t){this.defaults=t,this.interceptors={request:new Re,response:new Re}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:le.assertOptions(s,{encode:F.function,serialize:F.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=T.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const l=[];this.interceptors.response.forEach(function(h){l.push(h.fulfilled,h.rejected)});let u,p=0,w;if(!f){const d=[Ne.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,l),w=d.length,u=Promise.resolve(n);p<w;)u=u.then(d[p++],d[p++]);return u}w=c.length;let b=n;for(p=0;p<w;){const d=c[p++],h=c[p++];try{b=d(b)}catch(g){h.call(this,g);break}}try{u=Ne.call(this,b)}catch(d){return Promise.reject(d)}for(p=0,w=l.length;p<w;)u=u.then(l[p++],l[p++]);return u}getUri(t){t=D(this.defaults,t);const n=Ke(t.baseURL,t.url);return Ie(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(D(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}B.prototype[t]=n(),B.prototype[t+"Form"]=n(!0)});class ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new q(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ye(function(s){t=s}),cancel:t}}}function An(e){return function(n){return e.apply(null,n)}}function Cn(e){return a.isObject(e)&&e.isAxiosError===!0}const fe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fe).forEach(([e,t])=>{fe[t]=e});function Ze(e){const t=new B(e),n=_e(B.prototype.request,t);return a.extend(n,B.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ze(D(e,s))},n}const S=Ze(z);S.Axios=B;S.CanceledError=q;S.CancelToken=ye;S.isCancel=Ve;S.VERSION=Qe;S.toFormData=Q;S.AxiosError=m;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=An;S.isAxiosError=Cn;S.mergeConfig=D;S.AxiosHeaders=T;S.formToJSON=e=>Je(a.isHTMLForm(e)?new FormData(e):e);S.getAdapter=Xe.getAdapter;S.HttpStatusCode=fe;S.default=S;export{Nn as _,S as a,Pn as u};
