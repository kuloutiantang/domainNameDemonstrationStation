import{u as Bt,_ as et,a as Zt}from"./color-D05jqsu3.js";import{u as Wt,t as Pe,c as tt,p as Xt,a as Yt,i as Ht,b as Kt,d as fe,e as ve,r as $,o as Ft,h as w,f as qt,g as x,j as Ie,k as nt,l as Gt,m as c,n as E,q as f,s as ot,v as Le,w as Jt,x as Qt,y as en,z as le,A as tn,B as nn,V as Ue,C as Be,D as on,E as rn,T as an,F as Ne,G as sn,H as q,I as Ze,J as G,K as ln,L as rt,M as at,N as M,O as un,P as cn,Q as We,R as dn,S as ue,U as fn,W as vn}from"./index-D9czgeHL.js";function xn(e){return Wt(Pe(e).toLowerCase())}function hn(e,n,r,i){for(var d=-1,h=e==null?0:e.length;++d<h;)r=n(r,e[d],d,e);return r}function pn(e){return function(n){return e==null?void 0:e[n]}}var gn={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},mn=pn(gn),bn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,wn="\\u0300-\\u036f",yn="\\ufe20-\\ufe2f",Sn="\\u20d0-\\u20ff",Cn=wn+yn+Sn,Rn="["+Cn+"]",_n=RegExp(Rn,"g");function zn(e){return e=Pe(e),e&&e.replace(bn,mn).replace(_n,"")}var Pn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function In(e){return e.match(Pn)||[]}var Nn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function kn(e){return Nn.test(e)}var st="\\ud800-\\udfff",Dn="\\u0300-\\u036f",En="\\ufe20-\\ufe2f",An="\\u20d0-\\u20ff",Tn=Dn+En+An,it="\\u2700-\\u27bf",lt="a-z\\xdf-\\xf6\\xf8-\\xff",Vn="\\xac\\xb1\\xd7\\xf7",$n="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Mn="\\u2000-\\u206f",On=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ut="A-Z\\xc0-\\xd6\\xd8-\\xde",jn="\\ufe0e\\ufe0f",ct=Vn+$n+Mn+On,dt="['’]",Xe="["+ct+"]",Ln="["+Tn+"]",ft="\\d+",Un="["+it+"]",vt="["+lt+"]",xt="[^"+st+ct+ft+it+lt+ut+"]",Bn="\\ud83c[\\udffb-\\udfff]",Zn="(?:"+Ln+"|"+Bn+")",Wn="[^"+st+"]",ht="(?:\\ud83c[\\udde6-\\uddff]){2}",pt="[\\ud800-\\udbff][\\udc00-\\udfff]",X="["+ut+"]",Xn="\\u200d",Ye="(?:"+vt+"|"+xt+")",Yn="(?:"+X+"|"+xt+")",He="(?:"+dt+"(?:d|ll|m|re|s|t|ve))?",Ke="(?:"+dt+"(?:D|LL|M|RE|S|T|VE))?",gt=Zn+"?",mt="["+jn+"]?",Hn="(?:"+Xn+"(?:"+[Wn,ht,pt].join("|")+")"+mt+gt+")*",Kn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Fn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",qn=mt+gt+Hn,Gn="(?:"+[Un,ht,pt].join("|")+")"+qn,Jn=RegExp([X+"?"+vt+"+"+He+"(?="+[Xe,X,"$"].join("|")+")",Yn+"+"+Ke+"(?="+[Xe,X+Ye,"$"].join("|")+")",X+"?"+Ye+"+"+He,X+"+"+Ke,Fn,Kn,ft,Gn].join("|"),"g");function Qn(e){return e.match(Jn)||[]}function eo(e,n,r){return e=Pe(e),n=n,n===void 0?kn(e)?Qn(e):In(e):e.match(n)||[]}var to="['’]",no=RegExp(to,"g");function oo(e){return function(n){return hn(eo(zn(n).replace(no,"")),e,"")}}var Fe=oo(function(e,n,r){return n=n.toLowerCase(),e+(r?xn(n):n)});function ro(e){const{length:n}=e;return n>1&&(e.push(qe(e[0],0,"append")),e.unshift(qe(e[n-1],n-1,"prepend"))),e}function qe(e,n,r){return tt(e,{key:`carousel-item-duplicate-${n}-${r}`})}function Ge(e,n,r){return n===1?0:r?e===0?n-3:e===n-1?0:e-1:e}function _e(e,n){return n?e+1:e}function ao(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function so(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function io(e,n){return n&&e>3?e-2:e}function Je(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Qe(e,n){let{offsetWidth:r,offsetHeight:i}=e;if(n){const d=getComputedStyle(e);r=r-Number.parseFloat(d.getPropertyValue("padding-left"))-Number.parseFloat(d.getPropertyValue("padding-right")),i=i-Number.parseFloat(d.getPropertyValue("padding-top"))-Number.parseFloat(d.getPropertyValue("padding-bottom"))}return{width:r,height:i}}function ce(e,n,r){return e<n?n:e>r?r:e}function lo(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,i,,d="ms"]=r;return Number(i)*(d==="ms"?1:1e3)}return 0}const bt=Yt("n-carousel-methods");function uo(e){Xt(bt,e)}function ke(e="unknown",n="component"){const r=Ht(bt);return r||Kt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r}const co={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},fo=fe({name:"CarouselDots",props:co,setup(e){const{mergedClsPrefixRef:n}=ve(e),r=$([]),i=ke();function d(g,v){switch(g.key){case"Enter":case" ":g.preventDefault(),i.to(v);return}e.keyboard&&y(g)}function h(g){e.trigger==="hover"&&i.to(g)}function R(g){e.trigger==="click"&&i.to(g)}function y(g){var v;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const b=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(b==="input"||b==="textarea")return;const{code:_}=g,O=_==="PageUp"||_==="ArrowUp",j=_==="PageDown"||_==="ArrowDown",C=_==="PageUp"||_==="ArrowRight",z=_==="PageDown"||_==="ArrowLeft",P=i.isVertical(),T=P?O:C,Y=P?j:z;!T&&!Y||(g.preventDefault(),T&&!i.isNextDisabled()?(i.next(),S(i.currentIndexRef.value)):Y&&!i.isPrevDisabled()&&(i.prev(),S(i.currentIndexRef.value)))}function S(g){var v;(v=r.value[g])===null||v===void 0||v.focus()}return Ft(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:d,handleMouseenter:h,handleClick:R}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return w("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},qt(this.total,r=>{const i=r===this.currentIndex;return w("div",{"aria-selected":i,ref:d=>n.push(d),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,i&&`${e}-carousel__dot--active`],key:r,onClick:()=>{this.handleClick(r)},onMouseenter:()=>{this.handleMouseenter(r)},onKeydown:d=>{this.handleKeydown(d,r)}})}))}}),vo=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),xo=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),ho=fe({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=ve(e),{isVertical:r,isPrevDisabled:i,isNextDisabled:d,prev:h,next:R}=ke();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:i,isNextDisabled:d,prev:h,next:R}},render(){const{mergedClsPrefix:e}=this;return w("div",{class:`${e}-carousel__arrow-group`},w("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},vo),w("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},xo))}}),de="CarouselItem";function po(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===de}const go=fe({name:de,setup(e){const{mergedClsPrefixRef:n}=ve(e),r=ke(Fe(de),`n-${Fe(de)}`),i=$(),d=x(()=>{const{value:v}=i;return v?r.getSlideIndex(v):-1}),h=x(()=>r.isPrev(d.value)),R=x(()=>r.isNext(d.value)),y=x(()=>r.isActive(d.value)),S=x(()=>r.getSlideStyle(d.value));Ie(()=>{r.addSlide(i.value)}),nt(()=>{r.removeSlide(i.value)});function g(v){const{value:b}=d;b!==void 0&&(r==null||r.onCarouselItemClick(b,v))}return{mergedClsPrefix:n,selfElRef:i,isPrev:h,isNext:R,isActive:y,index:d,style:S,handleClick:g}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:i,isNext:d,isActive:h,index:R,style:y}=this,S=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:h,[`${r}-carousel__slide--prev`]:i,[`${r}-carousel__slide--next`]:d}];return w("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":R,"aria-hidden":!h,style:y,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:i,isNext:d,isActive:h,index:R}))}}),mo=Gt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[E("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[c("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[E("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[c("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[E("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),c("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[E("svg",`
 height: 1em;
 width: 1em;
 `),E("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",`
 touch-action: pan-x;
 `,[c("slides",`
 flex-direction: column;
 `),f("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[c("slides",[E(">",[E("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[E("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[E("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[E("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[E("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[c("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[c("slides",`
 perspective: 1000px;
 `),c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),bo=["transitionDuration","transitionTimingFunction"],wo=Object.assign(Object.assign({},ot.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let ze=!1;const yo=fe({name:"Carousel",props:wo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=ve(e),i=$(null),d=$(null),h=$([]),R={value:[]},y=x(()=>e.direction==="vertical"),S=x(()=>y.value?"height":"width"),g=x(()=>y.value?"bottom":"right"),v=x(()=>e.effect==="slide"),b=x(()=>e.loop&&e.slidesPerView===1&&v.value),_=x(()=>e.effect==="custom"),O=x(()=>!v.value||e.centeredSlides?1:e.slidesPerView),j=x(()=>_.value?1:e.slidesPerView),C=x(()=>O.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),z=$({width:0,height:0}),P=x(()=>{const{value:t}=h;if(!t.length)return[];const{value:o}=C;if(o)return t.map(m=>Qe(m));const{value:a}=j,{value:l}=z,{value:u}=S;let s=l[u];if(a!=="auto"){const{spaceBetween:m}=e,I=s-(a-1)*m,ie=1/Math.max(1,a);s=I*ie}const p=Object.assign(Object.assign({},l),{[u]:s});return t.map(()=>p)}),T=x(()=>{const{value:t}=P;if(!t.length)return[];const{centeredSlides:o,spaceBetween:a}=e,{value:l}=S,{[l]:u}=z.value;let s=0;return t.map(({[l]:p})=>{let m=s;return o&&(m+=(p-u)/2),s+=p+a,m})}),Y=$(!1),xe=x(()=>{const{transitionStyle:t}=e;return t?Le(t,bo):{}}),he=x(()=>_.value?0:lo(xe.value.transitionDuration)),De=x(()=>{const{value:t}=h;if(!t.length)return[];const o=!(C.value||j.value===1),a=p=>{if(o){const{value:m}=S;return{[m]:`${P.value[p][m]}px`}}};if(_.value)return t.map((p,m)=>a(m));const{effect:l,spaceBetween:u}=e,{value:s}=g;return t.reduce((p,m,I)=>{const ie=Object.assign(Object.assign({},a(I)),{[`margin-${s}`]:`${u}px`});return p.push(ie),Y.value&&(l==="fade"||l==="card")&&Object.assign(ie,xe.value),p},[])}),N=x(()=>{const{value:t}=O,{length:o}=h.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:a}=P,{length:l}=a;if(!l)return o;const{value:u}=T,{value:s}=S,p=z.value[s];let m=a[a.length-1][s],I=l;for(;I>1&&m<p;)I--,m+=u[I]-u[I-1];return ce(I+1,1,l)}}),J=x(()=>io(N.value,b.value)),yt=_e(e.defaultIndex,b.value),pe=$(Ge(yt,N.value,b.value)),A=Bt(Jt(e,"currentIndex"),pe),k=x(()=>_e(A.value,b.value));function H(t){var o,a;t=ce(t,0,N.value-1);const l=Ge(t,N.value,b.value),{value:u}=A;l!==A.value&&(pe.value=l,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,l,u),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,l,u))}function Q(t=k.value){return ao(t,N.value,e.loop)}function ee(t=k.value){return so(t,N.value,e.loop)}function St(t){const o=U(t);return o!==null&&Q()===o}function Ct(t){const o=U(t);return o!==null&&ee()===o}function Ee(t){return k.value===U(t)}function Rt(t){return A.value===t}function Ae(){return Q()===null}function Te(){return ee()===null}function ge(t){const o=ce(_e(t,b.value),0,N.value);(t!==A.value||o!==k.value)&&H(o)}function me(){const t=Q();t!==null&&H(t)}function te(){const t=ee();t!==null&&H(t)}let D=!1;function _t(){(!D||!b.value)&&me()}function zt(){(!D||!b.value)&&te()}let L=0;const be=$({});function ne(t,o=0){be.value=Object.assign({},xe.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function K(t=0){v.value?we(k.value,t):L!==0&&(!D&&t>0&&(D=!0),ne(L=0,t))}function we(t,o){const a=Ve(t);a!==L&&o>0&&(D=!0),L=Ve(k.value),ne(a,o)}function Ve(t){let o;return t>=N.value-1?o=$e():o=T.value[t]||0,o}function $e(){if(O.value==="auto"){const{value:t}=S,{[t]:o}=z.value,{value:a}=T,l=a[a.length-1];let u;if(l===void 0)u=o;else{const{value:s}=P;u=l+s[s.length-1][t]}return u-o}else{const{value:t}=T;return t[N.value-1]||0}}const F={currentIndexRef:A,to:ge,prev:_t,next:zt,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:St,isNext:Ct,isActive:Ee,isPrevDisabled:Ae,isNextDisabled:Te,getSlideIndex:U,getSlideStyle:Nt,addSlide:Pt,removeSlide:It,onCarouselItemClick:kt};uo(F);function Pt(t){t&&h.value.push(t)}function It(t){if(!t)return;const o=U(t);o!==-1&&h.value.splice(o,1)}function U(t){return typeof t=="number"?t:t?h.value.indexOf(t):-1}function Nt(t){const o=U(t);if(o!==-1){const a=[De.value[o]],l=F.isPrev(o),u=F.isNext(o);return l&&a.push(e.prevSlideStyle||""),u&&a.push(e.nextSlideStyle||""),Ne(a)}}let ye=0,Se=0,V=0,Ce=0,oe=!1,Re=!1;function kt(t,o){let a=!D&&!oe&&!Re;e.effect==="card"&&a&&!Ee(t)&&(ge(t),a=!1),a||(o.preventDefault(),o.stopPropagation())}let re=null;function ae(){re&&(clearInterval(re),re=null)}function B(){ae(),!e.autoplay||J.value<2||(re=window.setInterval(te,e.interval))}function Me(t){var o;if(ze||!(!((o=d.value)===null||o===void 0)&&o.contains(sn(t))))return;ze=!0,oe=!0,Re=!1,Ce=Date.now(),ae(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=Je(t)?t.touches[0]:t;y.value?Se=a.clientY:ye=a.clientX,e.touchable&&(q("touchmove",document,se),q("touchend",document,Z),q("touchcancel",document,Z)),e.draggable&&(q("mousemove",document,se),q("mouseup",document,Z))}function se(t){const{value:o}=y,{value:a}=S,l=Je(t)?t.touches[0]:t,u=o?l.clientY-Se:l.clientX-ye,s=z.value[a];V=ce(u,-s,s),t.cancelable&&t.preventDefault(),v.value&&ne(L-V,0)}function Z(){const{value:t}=k;let o=t;if(!D&&V!==0&&v.value){const a=L-V,l=[...T.value.slice(0,N.value-1),$e()];let u=null;for(let s=0;s<l.length;s++){const p=Math.abs(l[s]-a);if(u!==null&&u<p)break;u=p,o=s}}if(o===t){const a=Date.now()-Ce,{value:l}=S,u=z.value[l];V>u/2||V/a>.4?o=Q(t):(V<-u/2||V/a<-.4)&&(o=ee(t))}o!==null&&o!==t?(Re=!0,H(o),Ze(()=>{(!b.value||pe.value!==A.value)&&K(he.value)})):K(he.value),Oe(),B()}function Oe(){oe&&(ze=!1),oe=!1,ye=0,Se=0,V=0,Ce=0,G("touchmove",document,se),G("touchend",document,Z),G("touchcancel",document,Z),G("mousemove",document,se),G("mouseup",document,Z)}function Dt(){if(v.value&&D){const{value:t}=k;we(t,0)}else B();v.value&&(be.value.transitionDuration="0ms"),D=!1}function Et(t){if(t.preventDefault(),D)return;let{deltaX:o,deltaY:a}=t;t.shiftKey&&!o&&(o=a);const l=-1,u=1,s=(o||a)>0?u:l;let p=0,m=0;y.value?m=s:p=s;const I=10;(m*a>=I||p*o>=I)&&(s===u&&!Te()?te():s===l&&!Ae()&&me())}function At(){z.value=Qe(i.value,!0),B()}function Tt(){var t,o;C.value&&((o=(t=P.effect).scheduler)===null||o===void 0||o.call(t),P.effect.run())}function Vt(){e.autoplay&&ae()}function $t(){e.autoplay&&B()}Ie(()=>{Qt(B),requestAnimationFrame(()=>Y.value=!0)}),nt(()=>{Oe(),ae()}),en(()=>{const{value:t}=h,{value:o}=R,a=new Map,l=s=>a.has(s)?a.get(s):-1;let u=!1;for(let s=0;s<t.length;s++){const p=o.findIndex(m=>m.el===t[s]);p!==s&&(u=!0),a.set(t[s],p)}u&&t.sort((s,p)=>l(s)-l(p))}),le(k,(t,o)=>{if(t!==o)if(B(),v.value){if(b.value){const{value:a}=N;J.value>2&&t===a-2&&o===1?t=0:t===1&&o===a-2&&(t=a-1)}we(t,he.value)}else K()},{immediate:!0}),le([b,O],()=>void Ze(()=>{H(k.value)})),le(T,()=>{v.value&&K()},{deep:!0}),le(v,t=>{t?K():(D=!1,ne(L=0))});const Mt=x(()=>({onTouchstartPassive:e.touchable?Me:void 0,onMousedown:e.draggable?Me:void 0,onWheel:e.mousewheel?Et:void 0})),Ot=x(()=>Object.assign(Object.assign({},Le(F,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:J.value,currentIndex:A.value})),jt=x(()=>({total:J.value,currentIndex:A.value,to:F.to})),Lt={getCurrentIndex:()=>A.value,to:ge,prev:me,next:te},Ut=ot("Carousel","-carousel",mo,ln,e,n),je=x(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:a,dotColorActive:l,dotColorFocus:u,dotLineWidth:s,dotLineWidthActive:p,arrowColor:m}}=Ut.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":u,"--n-dot-color-active":l,"--n-dot-size":o,"--n-dot-line-width":s,"--n-dot-line-width-active":p,"--n-arrow-color":m}}),W=r?tn("carousel",void 0,je,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:i,slidesElRef:d,slideVNodes:R,duplicatedable:b,userWantsControl:_,autoSlideSize:C,realIndex:k,slideStyles:De,translateStyle:be,slidesControlListeners:Mt,handleTransitionEnd:Dt,handleResize:At,handleSlideResize:Tt,handleMouseenter:Vt,handleMouseleave:$t,isActive:Rt,arrowSlotProps:Ot,dotSlotProps:jt},Lt),{cssVars:r?void 0:je,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:i,slideStyles:d,dotType:h,dotPlacement:R,slidesControlListeners:y,transitionProps:S={},arrowSlotProps:g,dotSlotProps:v,$slots:{default:b,dots:_,arrow:O}}=this,j=b&&nn(b())||[];let C=So(j);return C.length||(C=j.map(z=>w(go,null,{default:()=>tt(z)}))),this.duplicatedable&&(C=ro(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(z=>w(Ue,{onResize:this.handleSlideResize},{default:()=>z}))),(e=this.onRender)===null||e===void 0||e.call(this),w("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${R}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,i&&`${n}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),w(Ue,{onResize:this.handleResize},{default:()=>w("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},i?C.map((z,P)=>w("div",{style:d[P],key:P},on(w(an,Object.assign({},S),{default:()=>z}),[[rn,this.isActive(P)]]))):C)}),this.showDots&&v.total>1&&Be(_,v,()=>[w(fo,{key:h+R,total:v.total,currentIndex:v.currentIndex,dotType:h,trigger:this.trigger,keyboard:this.keyboard})]),r&&Be(O,g,()=>[w(ho,null)]))}});function So(e){return e.reduce((n,r)=>(po(r)&&n.push(r),n),[])}const Co="/assets/logop-CbfdIKxN.png",Ro={class:"line"},_o={__name:"VersionNumber",props:{versionNumber:{type:String,required:!0,default:"版号"},color:{type:String,required:!1,default:null}},setup(e){return(n,r)=>(rt(),at("div",Ro,[M("a",{tabIndex:"-1",href:"http://beian.miit.gov.cn/",target:"_blank",rel:"noopener",style:Ne({color:e.color})},un(e.versionNumber),5)]))}},zo=et(_o,[["__scopeId","data-v-1e101407"]]),wt=e=>(fn("data-v-8f9c7370"),e=e(),vn(),e),Po=wt(()=>M("img",{src:Co},null,-1)),Io=[Po],No={class:"w-full h-full flex justify-center items-center"},ko=wt(()=>M("div",{class:"w-full h-full flex justify-center items-center"},[M("div",null,"...")],-1)),Do={class:"bottom"},Eo={__name:"HomeView",setup(e){const n=cn(),r=Zt();Ie(()=>{!r.beReady&&r.init(7)});const i=()=>{r.approaching(),r.itSTime&&n.push("/understand")};return(d,h)=>(rt(),at("div",{style:Ne("--edge-theme-color: "+ue(r).themeColor+";")},[We(ue(yo),{class:"w-100vw h-100vh",direction:"vertical","show-dots":!1,mousewheel:""},{default:dn(()=>[M("div",{class:"w-full h-full mid"},[M("div",{onClick:i,class:"select-none"},Io)]),M("div",No,[M("div",{onClick:h[0]||(h[0]=R=>ue(n).push("/understand")),class:"select-none text-140px cursor-pointer",style:{color:"var(--edge-theme-color)"}}," 知识碎片 ")]),ko]),_:1}),M("div",Do,[We(zo,{versionNumber:"鲁ICP备2022011940号-1",color:ue(r).themeColor},null,8,["color"])])],4))}},Vo=et(Eo,[["__scopeId","data-v-8f9c7370"]]);export{Vo as default};
