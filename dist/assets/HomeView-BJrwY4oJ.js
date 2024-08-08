import{_ as ot,u as Zt,a as Wt}from"./axios-Bd3WeZrS.js";import{u as Xt,t as ke,c as rt,p as Yt,a as Ht,i as Kt,b as Ft,d as ve,e as xe,r as M,o as qt,h as w,f as Gt,g as x,j as Ne,k as at,l as Jt,m as d,n as E,q as f,s as st,v as Be,w as Qt,x as en,y as tn,z as le,A as Ze,B as nn,C as on,V as We,D as Xe,E as rn,F as an,T as sn,G as De,H as ln,I as q,J as G,K as un,L as ce,M as de,N as T,O as cn,P as dn,Q as Ye,R as He,S as ze,U as fn,W as vn,X as xn,Y as pn,Z as hn}from"./index-B4XSLxXL.js";import{u as gn}from"./use-merged-state-Ys9kvUPE.js";function mn(e){return Xt(ke(e).toLowerCase())}function bn(e,n,r,i){for(var u=-1,g=e==null?0:e.length;++u<g;)r=n(r,e[u],u,e);return r}function wn(e){return function(n){return e==null?void 0:e[n]}}var yn={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Sn=wn(yn),Cn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Rn="\\u0300-\\u036f",_n="\\ufe20-\\ufe2f",zn="\\u20d0-\\u20ff",Pn=Rn+_n+zn,In="["+Pn+"]",kn=RegExp(In,"g");function Nn(e){return e=ke(e),e&&e.replace(Cn,Sn).replace(kn,"")}var Dn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function En(e){return e.match(Dn)||[]}var An=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Tn(e){return An.test(e)}var it="\\ud800-\\udfff",Vn="\\u0300-\\u036f",$n="\\ufe20-\\ufe2f",Mn="\\u20d0-\\u20ff",On=Vn+$n+Mn,lt="\\u2700-\\u27bf",ut="a-z\\xdf-\\xf6\\xf8-\\xff",jn="\\xac\\xb1\\xd7\\xf7",Ln="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Un="\\u2000-\\u206f",Bn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ct="A-Z\\xc0-\\xd6\\xd8-\\xde",Zn="\\ufe0e\\ufe0f",dt=jn+Ln+Un+Bn,ft="['’]",Ke="["+dt+"]",Wn="["+On+"]",vt="\\d+",Xn="["+lt+"]",xt="["+ut+"]",pt="[^"+it+dt+vt+lt+ut+ct+"]",Yn="\\ud83c[\\udffb-\\udfff]",Hn="(?:"+Wn+"|"+Yn+")",Kn="[^"+it+"]",ht="(?:\\ud83c[\\udde6-\\uddff]){2}",gt="[\\ud800-\\udbff][\\udc00-\\udfff]",X="["+ct+"]",Fn="\\u200d",Fe="(?:"+xt+"|"+pt+")",qn="(?:"+X+"|"+pt+")",qe="(?:"+ft+"(?:d|ll|m|re|s|t|ve))?",Ge="(?:"+ft+"(?:D|LL|M|RE|S|T|VE))?",mt=Hn+"?",bt="["+Zn+"]?",Gn="(?:"+Fn+"(?:"+[Kn,ht,gt].join("|")+")"+bt+mt+")*",Jn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Qn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",eo=bt+mt+Gn,to="(?:"+[Xn,ht,gt].join("|")+")"+eo,no=RegExp([X+"?"+xt+"+"+qe+"(?="+[Ke,X,"$"].join("|")+")",qn+"+"+Ge+"(?="+[Ke,X+Fe,"$"].join("|")+")",X+"?"+Fe+"+"+qe,X+"+"+Ge,Qn,Jn,vt,to].join("|"),"g");function oo(e){return e.match(no)||[]}function ro(e,n,r){return e=ke(e),n=n,n===void 0?Tn(e)?oo(e):En(e):e.match(n)||[]}var ao="['’]",so=RegExp(ao,"g");function io(e){return function(n){return bn(ro(Nn(n).replace(so,"")),e,"")}}var Je=io(function(e,n,r){return n=n.toLowerCase(),e+(r?mn(n):n)});function lo(e){const{length:n}=e;return n>1&&(e.push(Qe(e[0],0,"append")),e.unshift(Qe(e[n-1],n-1,"prepend"))),e}function Qe(e,n,r){return rt(e,{key:`carousel-item-duplicate-${n}-${r}`})}function et(e,n,r){return n===1?0:r?e===0?n-3:e===n-1?0:e-1:e}function Pe(e,n){return n?e+1:e}function uo(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function co(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function fo(e,n){return n&&e>3?e-2:e}function tt(e){return window.TouchEvent&&e instanceof window.TouchEvent}function nt(e,n){let{offsetWidth:r,offsetHeight:i}=e;if(n){const u=getComputedStyle(e);r=r-Number.parseFloat(u.getPropertyValue("padding-left"))-Number.parseFloat(u.getPropertyValue("padding-right")),i=i-Number.parseFloat(u.getPropertyValue("padding-top"))-Number.parseFloat(u.getPropertyValue("padding-bottom"))}return{width:r,height:i}}function ue(e,n,r){return e<n?n:e>r?r:e}function vo(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,i,,u="ms"]=r;return Number(i)*(u==="ms"?1:1e3)}return 0}const wt=Ht("n-carousel-methods");function xo(e){Yt(wt,e)}function Ee(e="unknown",n="component"){const r=Kt(wt);return r||Ft(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r}const po={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},ho=ve({name:"CarouselDots",props:po,setup(e){const{mergedClsPrefixRef:n}=xe(e),r=M([]),i=Ee();function u(m,v){switch(m.key){case"Enter":case" ":m.preventDefault(),i.to(v);return}e.keyboard&&C(m)}function g(m){e.trigger==="hover"&&i.to(m)}function y(m){e.trigger==="click"&&i.to(m)}function C(m){var v;if(m.shiftKey||m.altKey||m.ctrlKey||m.metaKey)return;const p=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(p==="input"||p==="textarea")return;const{code:R}=m,O=R==="PageUp"||R==="ArrowUp",j=R==="PageDown"||R==="ArrowDown",_=R==="PageUp"||R==="ArrowRight",z=R==="PageDown"||R==="ArrowLeft",P=i.isVertical(),V=P?O:_,Y=P?j:z;!V&&!Y||(m.preventDefault(),V&&!i.isNextDisabled()?(i.next(),S(i.currentIndexRef.value)):Y&&!i.isPrevDisabled()&&(i.prev(),S(i.currentIndexRef.value)))}function S(m){var v;(v=r.value[m])===null||v===void 0||v.focus()}return qt(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:u,handleMouseenter:g,handleClick:y}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return w("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Gt(this.total,r=>{const i=r===this.currentIndex;return w("div",{"aria-selected":i,ref:u=>n.push(u),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,i&&`${e}-carousel__dot--active`],key:r,onClick:()=>{this.handleClick(r)},onMouseenter:()=>{this.handleMouseenter(r)},onKeydown:u=>{this.handleKeydown(u,r)}})}))}}),go=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),mo=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),bo=ve({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=xe(e),{isVertical:r,isPrevDisabled:i,isNextDisabled:u,prev:g,next:y}=Ee();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:i,isNextDisabled:u,prev:g,next:y}},render(){const{mergedClsPrefix:e}=this;return w("div",{class:`${e}-carousel__arrow-group`},w("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},go),w("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},mo))}}),fe="CarouselItem";function wo(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===fe}const yo=ve({name:fe,setup(e){const{mergedClsPrefixRef:n}=xe(e),r=Ee(Je(fe),`n-${Je(fe)}`),i=M(),u=x(()=>{const{value:v}=i;return v?r.getSlideIndex(v):-1}),g=x(()=>r.isPrev(u.value)),y=x(()=>r.isNext(u.value)),C=x(()=>r.isActive(u.value)),S=x(()=>r.getSlideStyle(u.value));Ne(()=>{r.addSlide(i.value)}),at(()=>{r.removeSlide(i.value)});function m(v){const{value:p}=u;p!==void 0&&(r==null||r.onCarouselItemClick(p,v))}return{mergedClsPrefix:n,selfElRef:i,isPrev:g,isNext:y,isActive:C,index:u,style:S,handleClick:m}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:i,isNext:u,isActive:g,index:y,style:C}=this,S=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:g,[`${r}-carousel__slide--prev`]:i,[`${r}-carousel__slide--next`]:u}];return w("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":y,"aria-hidden":!g,style:C,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:i,isNext:u,isActive:g,index:y}))}}),So=Jt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[d("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[d("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[E("> img",`
 display: block;
 `)])]),d("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[d("dot",`
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
 `)])]),f("line",[d("dot",`
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
 `)])])]),d("arrow",`
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
 `,[d("slides",`
 flex-direction: column;
 `),f("fade",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[d("slides",[E(">",[E("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
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
 `)])])]),d("dot",`
 margin: 4px 0;
 `)]),d("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[d("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[d("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[d("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[d("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[E("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
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
 `)])])]),d("dot",`
 margin: 4px 0;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[E("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[d("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 top: 12px;
 right: 12px;
 `,[E("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[d("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[E("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[d("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[d("slides",`
 perspective: 1000px;
 `),d("slide",`
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
 `)])])]),Co=["transitionDuration","transitionTimingFunction"],Ro=Object.assign(Object.assign({},st.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ie=!1;const _o=ve({name:"Carousel",props:Ro,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=xe(e),i=M(null),u=M(null),g=M([]),y={value:[]},C=x(()=>e.direction==="vertical"),S=x(()=>C.value?"height":"width"),m=x(()=>C.value?"bottom":"right"),v=x(()=>e.effect==="slide"),p=x(()=>e.loop&&e.slidesPerView===1&&v.value),R=x(()=>e.effect==="custom"),O=x(()=>!v.value||e.centeredSlides?1:e.slidesPerView),j=x(()=>R.value?1:e.slidesPerView),_=x(()=>O.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),z=M({width:0,height:0}),P=x(()=>{const{value:t}=g;if(!t.length)return[];const{value:o}=_;if(o)return t.map(b=>nt(b));const{value:a}=j,{value:l}=z,{value:c}=S;let s=l[c];if(a!=="auto"){const{spaceBetween:b}=e,I=s-(a-1)*b,ie=1/Math.max(1,a);s=I*ie}const h=Object.assign(Object.assign({},l),{[c]:s});return t.map(()=>h)}),V=x(()=>{const{value:t}=P;if(!t.length)return[];const{centeredSlides:o,spaceBetween:a}=e,{value:l}=S,{[l]:c}=z.value;let s=0;return t.map(({[l]:h})=>{let b=s;return o&&(b+=(h-c)/2),s+=h+a,b})}),Y=M(!1),pe=x(()=>{const{transitionStyle:t}=e;return t?Be(t,Co):{}}),he=x(()=>R.value?0:vo(pe.value.transitionDuration)),Ae=x(()=>{const{value:t}=g;if(!t.length)return[];const o=!(_.value||j.value===1),a=h=>{if(o){const{value:b}=S;return{[b]:`${P.value[h][b]}px`}}};if(R.value)return t.map((h,b)=>a(b));const{effect:l,spaceBetween:c}=e,{value:s}=m;return t.reduce((h,b,I)=>{const ie=Object.assign(Object.assign({},a(I)),{[`margin-${s}`]:`${c}px`});return h.push(ie),Y.value&&(l==="fade"||l==="card")&&Object.assign(ie,pe.value),h},[])}),k=x(()=>{const{value:t}=O,{length:o}=g.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:a}=P,{length:l}=a;if(!l)return o;const{value:c}=V,{value:s}=S,h=z.value[s];let b=a[a.length-1][s],I=l;for(;I>1&&b<h;)I--,b+=c[I]-c[I-1];return ue(I+1,1,l)}}),J=x(()=>fo(k.value,p.value)),St=Pe(e.defaultIndex,p.value),ge=M(et(St,k.value,p.value)),A=gn(Qt(e,"currentIndex"),ge),N=x(()=>Pe(A.value,p.value));function H(t){var o,a;t=ue(t,0,k.value-1);const l=et(t,k.value,p.value),{value:c}=A;l!==A.value&&(ge.value=l,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,l,c),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,l,c))}function Q(t=N.value){return uo(t,k.value,e.loop)}function ee(t=N.value){return co(t,k.value,e.loop)}function Ct(t){const o=U(t);return o!==null&&Q()===o}function Rt(t){const o=U(t);return o!==null&&ee()===o}function Te(t){return N.value===U(t)}function _t(t){return A.value===t}function Ve(){return Q()===null}function $e(){return ee()===null}function me(t){const o=ue(Pe(t,p.value),0,k.value);(t!==A.value||o!==N.value)&&H(o)}function be(){const t=Q();t!==null&&H(t)}function te(){const t=ee();t!==null&&H(t)}let D=!1;function zt(){(!D||!p.value)&&be()}function Pt(){(!D||!p.value)&&te()}let L=0;const we=M({});function ne(t,o=0){we.value=Object.assign({},pe.value,{transform:C.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function K(t=0){v.value?ye(N.value,t):L!==0&&(!D&&t>0&&(D=!0),ne(L=0,t))}function ye(t,o){const a=Me(t);a!==L&&o>0&&(D=!0),L=Me(N.value),ne(a,o)}function Me(t){let o;return t>=k.value-1?o=Oe():o=V.value[t]||0,o}function Oe(){if(O.value==="auto"){const{value:t}=S,{[t]:o}=z.value,{value:a}=V,l=a[a.length-1];let c;if(l===void 0)c=o;else{const{value:s}=P;c=l+s[s.length-1][t]}return c-o}else{const{value:t}=V;return t[k.value-1]||0}}const F={currentIndexRef:A,to:me,prev:zt,next:Pt,isVertical:()=>C.value,isHorizontal:()=>!C.value,isPrev:Ct,isNext:Rt,isActive:Te,isPrevDisabled:Ve,isNextDisabled:$e,getSlideIndex:U,getSlideStyle:Nt,addSlide:It,removeSlide:kt,onCarouselItemClick:Dt};xo(F);function It(t){t&&g.value.push(t)}function kt(t){if(!t)return;const o=U(t);o!==-1&&g.value.splice(o,1)}function U(t){return typeof t=="number"?t:t?g.value.indexOf(t):-1}function Nt(t){const o=U(t);if(o!==-1){const a=[Ae.value[o]],l=F.isPrev(o),c=F.isNext(o);return l&&a.push(e.prevSlideStyle||""),c&&a.push(e.nextSlideStyle||""),De(a)}}let Se=0,Ce=0,$=0,Re=0,oe=!1,_e=!1;function Dt(t,o){let a=!D&&!oe&&!_e;e.effect==="card"&&a&&!Te(t)&&(me(t),a=!1),a||(o.preventDefault(),o.stopPropagation())}let re=null;function ae(){re&&(clearInterval(re),re=null)}function B(){ae(),!e.autoplay||J.value<2||(re=window.setInterval(te,e.interval))}function je(t){var o;if(Ie||!(!((o=u.value)===null||o===void 0)&&o.contains(ln(t))))return;Ie=!0,oe=!0,_e=!1,Re=Date.now(),ae(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=tt(t)?t.touches[0]:t;C.value?Ce=a.clientY:Se=a.clientX,e.touchable&&(q("touchmove",document,se),q("touchend",document,Z),q("touchcancel",document,Z)),e.draggable&&(q("mousemove",document,se),q("mouseup",document,Z))}function se(t){const{value:o}=C,{value:a}=S,l=tt(t)?t.touches[0]:t,c=o?l.clientY-Ce:l.clientX-Se,s=z.value[a];$=ue(c,-s,s),t.cancelable&&t.preventDefault(),v.value&&ne(L-$,0)}function Z(){const{value:t}=N;let o=t;if(!D&&$!==0&&v.value){const a=L-$,l=[...V.value.slice(0,k.value-1),Oe()];let c=null;for(let s=0;s<l.length;s++){const h=Math.abs(l[s]-a);if(c!==null&&c<h)break;c=h,o=s}}if(o===t){const a=Date.now()-Re,{value:l}=S,c=z.value[l];$>c/2||$/a>.4?o=Q(t):($<-c/2||$/a<-.4)&&(o=ee(t))}o!==null&&o!==t?(_e=!0,H(o),Ze(()=>{(!p.value||ge.value!==A.value)&&K(he.value)})):K(he.value),Le(),B()}function Le(){oe&&(Ie=!1),oe=!1,Se=0,Ce=0,$=0,Re=0,G("touchmove",document,se),G("touchend",document,Z),G("touchcancel",document,Z),G("mousemove",document,se),G("mouseup",document,Z)}function Et(){if(v.value&&D){const{value:t}=N;ye(t,0)}else B();v.value&&(we.value.transitionDuration="0ms"),D=!1}function At(t){if(t.preventDefault(),D)return;let{deltaX:o,deltaY:a}=t;t.shiftKey&&!o&&(o=a);const l=-1,c=1,s=(o||a)>0?c:l;let h=0,b=0;C.value?b=s:h=s;const I=10;(b*a>=I||h*o>=I)&&(s===c&&!$e()?te():s===l&&!Ve()&&be())}function Tt(){z.value=nt(i.value,!0),B()}function Vt(){var t,o;_.value&&((o=(t=P.effect).scheduler)===null||o===void 0||o.call(t),P.effect.run())}function $t(){e.autoplay&&ae()}function Mt(){e.autoplay&&B()}Ne(()=>{en(B),requestAnimationFrame(()=>Y.value=!0)}),at(()=>{Le(),ae()}),tn(()=>{const{value:t}=g,{value:o}=y,a=new Map,l=s=>a.has(s)?a.get(s):-1;let c=!1;for(let s=0;s<t.length;s++){const h=o.findIndex(b=>b.el===t[s]);h!==s&&(c=!0),a.set(t[s],h)}c&&t.sort((s,h)=>l(s)-l(h))}),le(N,(t,o)=>{if(t!==o)if(B(),v.value){if(p.value){const{value:a}=k;J.value>2&&t===a-2&&o===1?t=0:t===1&&o===a-2&&(t=a-1)}ye(t,he.value)}else K()},{immediate:!0}),le([p,O],()=>void Ze(()=>{H(N.value)})),le(V,()=>{v.value&&K()},{deep:!0}),le(v,t=>{t?K():(D=!1,ne(L=0))});const Ot=x(()=>({onTouchstartPassive:e.touchable?je:void 0,onMousedown:e.draggable?je:void 0,onWheel:e.mousewheel?At:void 0})),jt=x(()=>Object.assign(Object.assign({},Be(F,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:J.value,currentIndex:A.value})),Lt=x(()=>({total:J.value,currentIndex:A.value,to:F.to})),Ut={getCurrentIndex:()=>A.value,to:me,prev:be,next:te},Bt=st("Carousel","-carousel",So,un,e,n),Ue=x(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:a,dotColorActive:l,dotColorFocus:c,dotLineWidth:s,dotLineWidthActive:h,arrowColor:b}}=Bt.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":c,"--n-dot-color-active":l,"--n-dot-size":o,"--n-dot-line-width":s,"--n-dot-line-width-active":h,"--n-arrow-color":b}}),W=r?nn("carousel",void 0,Ue,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:i,slidesElRef:u,slideVNodes:y,duplicatedable:p,userWantsControl:R,autoSlideSize:_,realIndex:N,slideStyles:Ae,translateStyle:we,slidesControlListeners:Ot,handleTransitionEnd:Et,handleResize:Tt,handleSlideResize:Vt,handleMouseenter:$t,handleMouseleave:Mt,isActive:_t,arrowSlotProps:jt,dotSlotProps:Lt},Ut),{cssVars:r?void 0:Ue,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:i,slideStyles:u,dotType:g,dotPlacement:y,slidesControlListeners:C,transitionProps:S={},arrowSlotProps:m,dotSlotProps:v,$slots:{default:p,dots:R,arrow:O}}=this,j=p&&on(p())||[];let _=zo(j);return _.length||(_=j.map(z=>w(yo,null,{default:()=>rt(z)}))),this.duplicatedable&&(_=lo(_)),this.slideVNodes.value=_,this.autoSlideSize&&(_=_.map(z=>w(We,{onResize:this.handleSlideResize},{default:()=>z}))),(e=this.onRender)===null||e===void 0||e.call(this),w("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${y}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,i&&`${n}-carousel--usercontrol`],style:this.cssVars},C,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),w(We,{onResize:this.handleResize},{default:()=>w("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},i?_.map((z,P)=>w("div",{style:u[P],key:P},rn(w(sn,Object.assign({},S),{default:()=>z}),[[an,this.isActive(P)]]))):_)}),this.showDots&&v.total>1&&Xe(R,v,()=>[w(ho,{key:g+y,total:v.total,currentIndex:v.currentIndex,dotType:g,trigger:this.trigger,keyboard:this.keyboard})]),r&&Xe(O,m,()=>[w(bo,null)]))}});function zo(e){return e.reduce((n,r)=>(wo(r)&&n.push(r),n),[])}const Po="/assets/logop-CbfdIKxN.png",Io={class:"line"},ko={__name:"VersionNumber",props:{versionNumber:{type:String,required:!0,default:"版号"},color:{type:String,required:!1,default:null}},setup(e){return(n,r)=>(ce(),de("div",Io,[T("a",{tabIndex:"-1",href:"http://beian.miit.gov.cn/",target:"_blank",rel:"noopener",style:De({color:e.color})},cn(e.versionNumber),5)]))}},No=ot(ko,[["__scopeId","data-v-1e101407"]]),yt=e=>(pn("data-v-98e258e9"),e=e(),hn(),e),Do=yt(()=>T("img",{src:Po},null,-1)),Eo=[Do],Ao={class:"w-full h-full flex justify-center items-center"},To=yt(()=>T("div",{class:"w-full h-full flex justify-center items-center"},[T("div",null,"...")],-1)),Vo={class:"custom-dots"},$o=["onClick"],Mo={class:"bottom"},Oo={__name:"HomeView",setup(e){const n=dn(),r=Zt();Ne(()=>{!r.beReady&&r.init(7),i()});const i=()=>{let y=window.btoa("http://www.kuloutiantang.top");Wt.get("http://nodeapi.kuloutiantang.top/in/"+y)},u=()=>{r.approaching(),r.itSTime&&n.push("/understand")};return(g,y)=>{const C=_o;return ce(),de("div",{style:De("--edge-theme-color: "+ze(r).themeColor+";")},[Ye(C,{class:"w-100vw h-100vh",direction:"vertical",mousewheel:""},{dots:He(({total:S,currentIndex:m,to:v})=>[T("ul",Vo,[(ce(!0),de(fn,null,vn(S,p=>(ce(),de("li",{key:p,class:xn({"is-active":m===p-1}),onClick:R=>v(p-1)},null,10,$o))),128))])]),default:He(()=>[T("div",{class:"w-full h-full mid"},[T("div",{onClick:u,class:"select-none"},Eo)]),T("div",Ao,[T("div",{onClick:y[0]||(y[0]=S=>ze(n).push("/understand")),class:"select-none text-7rem cursor-pointer",style:{color:"var(--edge-theme-color)"}}," 知识碎片 ")]),To]),_:1}),T("div",Mo,[Ye(No,{versionNumber:"鲁ICP备2022011940号-1",color:ze(r).themeColor},null,8,["color"])])],4)}}},Bo=ot(Oo,[["__scopeId","data-v-98e258e9"]]);export{Bo as default};
