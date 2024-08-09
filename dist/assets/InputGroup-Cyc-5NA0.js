import{i as Te,aN as ur,g as z,d as k,h as n,c1 as cr,l as m,n as w,m as s,bg as hr,bv as ge,w as ve,bl as fr,aZ as q,aP as ae,aX as vr,a as mr,r as P,z as me,D as pr,q as M,aR as H,e as ke,s as _e,c2 as gr,be as br,a7 as Pe,j as yr,_ as wr,x as Se,p as xr,aT as Cr,aO as he,aV as Pr,B as Sr,aW as te,aY as Mr,U as zr,V as Ar,bI as Fr,A as Me,I as ze,b6 as S,J as Ae}from"./index-B0BNdymE.js";import{u as Tr}from"./use-merged-state-B6cFpa47.js";const kr={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:t=>`Please load all ${t}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"RRRR-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:t=>`Total ${t} items`,selected:t=>`${t} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}};function fe(t){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.width?String(o.width):t.defaultWidth,v=t.formats[a]||t.formats[t.defaultWidth];return v}}function U(t){return function(o,a){var v=a!=null&&a.context?String(a.context):"standalone",p;if(v==="formatting"&&t.formattingValues){var l=t.defaultFormattingWidth||t.defaultWidth,c=a!=null&&a.width?String(a.width):l;p=t.formattingValues[c]||t.formattingValues[l]}else{var d=t.defaultWidth,f=a!=null&&a.width?String(a.width):t.defaultWidth;p=t.values[f]||t.values[d]}var u=t.argumentCallback?t.argumentCallback(o):o;return p[u]}}function K(t){return function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=a.width,p=v&&t.matchPatterns[v]||t.matchPatterns[t.defaultMatchWidth],l=o.match(p);if(!l)return null;var c=l[0],d=v&&t.parsePatterns[v]||t.parsePatterns[t.defaultParseWidth],f=Array.isArray(d)?Rr(d,function(y){return y.test(c)}):_r(d,function(y){return y.test(c)}),u;u=t.valueCallback?t.valueCallback(f):f,u=a.valueCallback?a.valueCallback(u):u;var h=o.slice(c.length);return{value:u,rest:h}}}function _r(t,o){for(var a in t)if(t.hasOwnProperty(a)&&o(t[a]))return a}function Rr(t,o){for(var a=0;a<t.length;a++)if(o(t[a]))return a}function Dr(t){return function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=o.match(t.matchPattern);if(!v)return null;var p=v[0],l=o.match(t.parsePattern);if(!l)return null;var c=t.valueCallback?t.valueCallback(l[0]):l[0];c=a.valueCallback?a.valueCallback(c):c;var d=o.slice(p.length);return{value:c,rest:d}}}var Wr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Br=function(o,a,v){var p,l=Wr[o];return typeof l=="string"?p=l:a===1?p=l.one:p=l.other.replace("{{count}}",a.toString()),v!=null&&v.addSuffix?v.comparison&&v.comparison>0?"in "+p:p+" ago":p},Er={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},$r={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ir={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Vr={date:fe({formats:Er,defaultWidth:"full"}),time:fe({formats:$r,defaultWidth:"full"}),dateTime:fe({formats:Ir,defaultWidth:"full"})},Lr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Nr=function(o,a,v,p){return Lr[o]},Or={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},jr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Hr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ur={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Kr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Xr=function(o,a){var v=Number(o),p=v%100;if(p>20||p<10)switch(p%10){case 1:return v+"st";case 2:return v+"nd";case 3:return v+"rd"}return v+"th"},Yr={ordinalNumber:Xr,era:U({values:Or,defaultWidth:"wide"}),quarter:U({values:jr,defaultWidth:"wide",argumentCallback:function(o){return o-1}}),month:U({values:Hr,defaultWidth:"wide"}),day:U({values:Ur,defaultWidth:"wide"}),dayPeriod:U({values:Kr,defaultWidth:"wide",formattingValues:qr,defaultFormattingWidth:"wide"})},Jr=/^(\d+)(th|st|nd|rd)?/i,Gr=/\d+/i,Zr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Qr={any:[/^b/i,/^(a|c)/i]},ea={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ta={any:[/1/i,/2/i,/3/i,/4/i]},ra={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},aa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},oa={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},na={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ia={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},la={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},sa={ordinalNumber:Dr({matchPattern:Jr,parsePattern:Gr,valueCallback:function(o){return parseInt(o,10)}}),era:K({matchPatterns:Zr,defaultMatchWidth:"wide",parsePatterns:Qr,defaultParseWidth:"any"}),quarter:K({matchPatterns:ea,defaultMatchWidth:"wide",parsePatterns:ta,defaultParseWidth:"any",valueCallback:function(o){return o+1}}),month:K({matchPatterns:ra,defaultMatchWidth:"wide",parsePatterns:aa,defaultParseWidth:"any"}),day:K({matchPatterns:oa,defaultMatchWidth:"wide",parsePatterns:na,defaultParseWidth:"any"}),dayPeriod:K({matchPatterns:ia,defaultMatchWidth:"any",parsePatterns:la,defaultParseWidth:"any"})},da={code:"en-US",formatDistance:Br,formatLong:Vr,formatRelative:Nr,localize:Yr,match:sa,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ua={name:"en-US",locale:da};function ca(t){const{mergedLocaleRef:o,mergedDateLocaleRef:a}=Te(ur,null)||{},v=z(()=>{var l,c;return(c=(l=o==null?void 0:o.value)===null||l===void 0?void 0:l[t])!==null&&c!==void 0?c:kr[t]});return{dateLocaleRef:z(()=>{var l;return(l=a==null?void 0:a.value)!==null&&l!==void 0?l:ua}),localeRef:v}}const ha=k({name:"Eye",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),n("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),fa=k({name:"EyeOff",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),n("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),n("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),n("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),n("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),va=k({name:"ChevronDown",render(){return n("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),ma=cr("clear",n("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{fill:"currentColor","fill-rule":"nonzero"},n("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),pa=m("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[w(">",[s("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[w("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),w("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),s("placeholder",`
 display: flex;
 `),s("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[hr({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),pe=k({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return ge("-base-clear",pa,ve(t,"clsPrefix")),{handleMouseDown(o){o.preventDefault()}}},render(){const{clsPrefix:t}=this;return n("div",{class:`${t}-base-clear`},n(fr,null,{default:()=>{var o,a;return this.show?n("div",{key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},q(this.$slots.icon,()=>[n(ae,{clsPrefix:t},{default:()=>n(ma,null)})])):n("div",{key:"icon",class:`${t}-base-clear__placeholder`},(a=(o=this.$slots).placeholder)===null||a===void 0?void 0:a.call(o))}}))}}),ga=k({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:o}){return()=>{const{clsPrefix:a}=t;return n(vr,{clsPrefix:a,class:`${a}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?n(pe,{clsPrefix:a,show:t.showClear,onClear:t.onClear},{placeholder:()=>n(ae,{clsPrefix:a,class:`${a}-base-suffix__arrow`},{default:()=>q(o.default,()=>[n(va,null)])})}):null})}}}),Re=mr("n-input");function ba(t){let o=0;for(const a of t)o++;return o}function re(t){return t===""||t==null}function ya(t){const o=P(null);function a(){const{value:l}=t;if(!(l!=null&&l.focus)){p();return}const{selectionStart:c,selectionEnd:d,value:f}=l;if(c==null||d==null){p();return}o.value={start:c,end:d,beforeText:f.slice(0,c),afterText:f.slice(d)}}function v(){var l;const{value:c}=o,{value:d}=t;if(!c||!d)return;const{value:f}=d,{start:u,beforeText:h,afterText:y}=c;let C=f.length;if(f.endsWith(y))C=f.length-y.length;else if(f.startsWith(h))C=h.length;else{const W=h[u-1],A=f.indexOf(W,u-1);A!==-1&&(C=A+1)}(l=d.setSelectionRange)===null||l===void 0||l.call(d,C,C)}function p(){o.value=null}return me(t,p),{recordCursor:a,restoreCursor:v}}const Fe=k({name:"InputWordCount",setup(t,{slots:o}){const{mergedValueRef:a,maxlengthRef:v,mergedClsPrefixRef:p,countGraphemesRef:l}=Te(Re),c=z(()=>{const{value:d}=a;return d===null||Array.isArray(d)?0:(l.value||ba)(d)});return()=>{const{value:d}=v,{value:f}=a;return n("span",{class:`${p.value}-input-word-count`},pr(o.default,{value:f===null||Array.isArray(f)?"":f},()=>[d===void 0?c.value:`${c.value} / ${d}`]))}}}),wa=m("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[s("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),s("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),s("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[w("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),w("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),w("&:-webkit-autofill ~",[s("placeholder","display: none;")])]),M("round",[H("textarea","border-radius: calc(var(--n-height) / 2);")]),s("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[w("span",`
 width: 100%;
 display: inline-block;
 `)]),M("textarea",[s("placeholder","overflow: visible;")]),H("autosize","width: 100%;"),M("autosize",[s("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),m("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),s("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),s("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[w("&[type=password]::-ms-reveal","display: none;"),w("+",[s("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),H("textarea",[s("placeholder","white-space: nowrap;")]),s("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),M("textarea","width: 100%;",[m("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),M("resizable",[m("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),s("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),s("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),M("pair",[s("input-el, placeholder","text-align: center;"),s("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[m("icon",`
 color: var(--n-icon-color);
 `),m("base-icon",`
 color: var(--n-icon-color);
 `)])]),M("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[s("border","border: var(--n-border-disabled);"),s("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),s("placeholder","color: var(--n-placeholder-color-disabled);"),s("separator","color: var(--n-text-color-disabled);",[m("icon",`
 color: var(--n-icon-color-disabled);
 `),m("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),m("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),s("suffix, prefix","color: var(--n-text-color-disabled);",[m("icon",`
 color: var(--n-icon-color-disabled);
 `),m("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),H("disabled",[s("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[w("&:hover",`
 color: var(--n-icon-color-hover);
 `),w("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),w("&:hover",[s("state-border","border: var(--n-border-hover);")]),M("focus","background-color: var(--n-color-focus);",[s("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),s("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),s("state-border",`
 border-color: #0000;
 z-index: 1;
 `),s("prefix","margin-right: 4px;"),s("suffix",`
 margin-left: 4px;
 `),s("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[m("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),m("base-clear",`
 font-size: var(--n-icon-size);
 `,[s("placeholder",[m("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),w(">",[m("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),m("base-icon",`
 font-size: var(--n-icon-size);
 `)]),m("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(t=>M(`${t}-status`,[H("disabled",[m("base-loading",`
 color: var(--n-loading-color-${t})
 `),s("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${t});
 `),s("state-border",`
 border: var(--n-border-${t});
 `),w("&:hover",[s("state-border",`
 border: var(--n-border-hover-${t});
 `)]),w("&:focus",`
 background-color: var(--n-color-focus-${t});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]),M("focus",`
 background-color: var(--n-color-focus-${t});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]),xa=m("input",[M("disabled",[s("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),Ca=Object.assign(Object.assign({},_e.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),Aa=k({name:"Input",props:Ca,setup(t){const{mergedClsPrefixRef:o,mergedBorderedRef:a,inlineThemeDisabled:v,mergedRtlRef:p}=ke(t),l=_e("Input","-input",wa,Fr,t,o);gr&&ge("-input-safari",xa,o);const c=P(null),d=P(null),f=P(null),u=P(null),h=P(null),y=P(null),C=P(null),W=ya(C),A=P(null),{localeRef:De}=ca("Input"),X=P(t.defaultValue),We=ve(t,"value"),F=Tr(We,X),I=br(t),{mergedSizeRef:oe,mergedDisabledRef:B,mergedStatusRef:Be}=I,E=P(!1),V=P(!1),T=P(!1),L=P(!1);let ne=null;const ie=z(()=>{const{placeholder:e,pair:r}=t;return r?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[De.value.placeholder]:[e]}),Ee=z(()=>{const{value:e}=T,{value:r}=F,{value:i}=ie;return!e&&(re(r)||Array.isArray(r)&&re(r[0]))&&i[0]}),$e=z(()=>{const{value:e}=T,{value:r}=F,{value:i}=ie;return!e&&i[1]&&(re(r)||Array.isArray(r)&&re(r[1]))}),le=Pe(()=>t.internalForceFocus||E.value),Ie=Pe(()=>{if(B.value||t.readonly||!t.clearable||!le.value&&!V.value)return!1;const{value:e}=F,{value:r}=le;return t.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(V.value||r):!!e&&(V.value||r)}),se=z(()=>{const{showPasswordOn:e}=t;if(e)return e;if(t.showPasswordToggle)return"click"}),N=P(!1),Ve=z(()=>{const{textDecoration:e}=t;return e?Array.isArray(e)?e.map(r=>({textDecoration:r})):[{textDecoration:e}]:["",""]}),be=P(void 0),Le=()=>{var e,r;if(t.type==="textarea"){const{autosize:i}=t;if(i&&(be.value=(r=(e=A.value)===null||e===void 0?void 0:e.$el)===null||r===void 0?void 0:r.offsetWidth),!d.value||typeof i=="boolean")return;const{paddingTop:b,paddingBottom:x,lineHeight:g}=window.getComputedStyle(d.value),_=Number(b.slice(0,-2)),R=Number(x.slice(0,-2)),D=Number(g.slice(0,-2)),{value:O}=f;if(!O)return;if(i.minRows){const j=Math.max(i.minRows,1),ce=`${_+R+D*j}px`;O.style.minHeight=ce}if(i.maxRows){const j=`${_+R+D*i.maxRows}px`;O.style.maxHeight=j}}},Ne=z(()=>{const{maxlength:e}=t;return e===void 0?void 0:Number(e)});yr(()=>{const{value:e}=F;Array.isArray(e)||ue(e)});const Oe=wr().proxy;function Y(e,r){const{onUpdateValue:i,"onUpdate:value":b,onInput:x}=t,{nTriggerFormInput:g}=I;i&&S(i,e,r),b&&S(b,e,r),x&&S(x,e,r),X.value=e,g()}function J(e,r){const{onChange:i}=t,{nTriggerFormChange:b}=I;i&&S(i,e,r),X.value=e,b()}function je(e){const{onBlur:r}=t,{nTriggerFormBlur:i}=I;r&&S(r,e),i()}function He(e){const{onFocus:r}=t,{nTriggerFormFocus:i}=I;r&&S(r,e),i()}function Ue(e){const{onClear:r}=t;r&&S(r,e)}function Ke(e){const{onInputBlur:r}=t;r&&S(r,e)}function qe(e){const{onInputFocus:r}=t;r&&S(r,e)}function Xe(){const{onDeactivate:e}=t;e&&S(e)}function Ye(){const{onActivate:e}=t;e&&S(e)}function Je(e){const{onClick:r}=t;r&&S(r,e)}function Ge(e){const{onWrapperFocus:r}=t;r&&S(r,e)}function Ze(e){const{onWrapperBlur:r}=t;r&&S(r,e)}function Qe(){T.value=!0}function et(e){T.value=!1,e.target===y.value?G(e,1):G(e,0)}function G(e,r=0,i="input"){const b=e.target.value;if(ue(b),e instanceof InputEvent&&!e.isComposing&&(T.value=!1),t.type==="textarea"){const{value:g}=A;g&&g.syncUnifiedContainer()}if(ne=b,T.value)return;W.recordCursor();const x=tt(b);if(x)if(!t.pair)i==="input"?Y(b,{source:r}):J(b,{source:r});else{let{value:g}=F;Array.isArray(g)?g=[g[0],g[1]]:g=["",""],g[r]=b,i==="input"?Y(g,{source:r}):J(g,{source:r})}Oe.$forceUpdate(),x||Me(W.restoreCursor)}function tt(e){const{countGraphemes:r,maxlength:i,minlength:b}=t;if(r){let g;if(i!==void 0&&(g===void 0&&(g=r(e)),g>Number(i))||b!==void 0&&(g===void 0&&(g=r(e)),g<Number(i)))return!1}const{allowInput:x}=t;return typeof x=="function"?x(e):!0}function rt(e){Ke(e),e.relatedTarget===c.value&&Xe(),e.relatedTarget!==null&&(e.relatedTarget===h.value||e.relatedTarget===y.value||e.relatedTarget===d.value)||(L.value=!1),Z(e,"blur"),C.value=null}function at(e,r){qe(e),E.value=!0,L.value=!0,Ye(),Z(e,"focus"),r===0?C.value=h.value:r===1?C.value=y.value:r===2&&(C.value=d.value)}function ot(e){t.passivelyActivated&&(Ze(e),Z(e,"blur"))}function nt(e){t.passivelyActivated&&(E.value=!0,Ge(e),Z(e,"focus"))}function Z(e,r){e.relatedTarget!==null&&(e.relatedTarget===h.value||e.relatedTarget===y.value||e.relatedTarget===d.value||e.relatedTarget===c.value)||(r==="focus"?(He(e),E.value=!0):r==="blur"&&(je(e),E.value=!1))}function it(e,r){G(e,r,"change")}function lt(e){Je(e)}function st(e){Ue(e),ye()}function ye(){t.pair?(Y(["",""],{source:"clear"}),J(["",""],{source:"clear"})):(Y("",{source:"clear"}),J("",{source:"clear"}))}function dt(e){const{onMousedown:r}=t;r&&r(e);const{tagName:i}=e.target;if(i!=="INPUT"&&i!=="TEXTAREA"){if(t.resizable){const{value:b}=c;if(b){const{left:x,top:g,width:_,height:R}=b.getBoundingClientRect(),D=14;if(x+_-D<e.clientX&&e.clientX<x+_&&g+R-D<e.clientY&&e.clientY<g+R)return}}e.preventDefault(),E.value||we()}}function ut(){var e;V.value=!0,t.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseEnterWrapper())}function ct(){var e;V.value=!1,t.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function ht(){B.value||se.value==="click"&&(N.value=!N.value)}function ft(e){if(B.value)return;e.preventDefault();const r=b=>{b.preventDefault(),Ae("mouseup",document,r)};if(ze("mouseup",document,r),se.value!=="mousedown")return;N.value=!0;const i=()=>{N.value=!1,Ae("mouseup",document,i)};ze("mouseup",document,i)}function vt(e){t.onKeyup&&S(t.onKeyup,e)}function mt(e){switch(t.onKeydown&&S(t.onKeydown,e),e.key){case"Escape":de();break;case"Enter":pt(e);break}}function pt(e){var r,i;if(t.passivelyActivated){const{value:b}=L;if(b){t.internalDeactivateOnEnter&&de();return}e.preventDefault(),t.type==="textarea"?(r=d.value)===null||r===void 0||r.focus():(i=h.value)===null||i===void 0||i.focus()}}function de(){t.passivelyActivated&&(L.value=!1,Me(()=>{var e;(e=c.value)===null||e===void 0||e.focus()}))}function we(){var e,r,i;B.value||(t.passivelyActivated?(e=c.value)===null||e===void 0||e.focus():((r=d.value)===null||r===void 0||r.focus(),(i=h.value)===null||i===void 0||i.focus()))}function gt(){var e;!((e=c.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function bt(){var e,r;(e=d.value)===null||e===void 0||e.select(),(r=h.value)===null||r===void 0||r.select()}function yt(){B.value||(d.value?d.value.focus():h.value&&h.value.focus())}function wt(){const{value:e}=c;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&de()}function xt(e){if(t.type==="textarea"){const{value:r}=d;r==null||r.scrollTo(e)}else{const{value:r}=h;r==null||r.scrollTo(e)}}function ue(e){const{type:r,pair:i,autosize:b}=t;if(!i&&b)if(r==="textarea"){const{value:x}=f;x&&(x.textContent=`${e??""}\r
`)}else{const{value:x}=u;x&&(e?x.textContent=e:x.innerHTML="&nbsp;")}}function Ct(){Le()}const xe=P({top:"0"});function Pt(e){var r;const{scrollTop:i}=e.target;xe.value.top=`${-i}px`,(r=A.value)===null||r===void 0||r.syncUnifiedContainer()}let Q=null;Se(()=>{const{autosize:e,type:r}=t;e&&r==="textarea"?Q=me(F,i=>{!Array.isArray(i)&&i!==ne&&ue(i)}):Q==null||Q()});let ee=null;Se(()=>{t.type==="textarea"?ee=me(F,e=>{var r;!Array.isArray(e)&&e!==ne&&((r=A.value)===null||r===void 0||r.syncUnifiedContainer())}):ee==null||ee()}),xr(Re,{mergedValueRef:F,maxlengthRef:Ne,mergedClsPrefixRef:o,countGraphemesRef:ve(t,"countGraphemes")});const St={wrapperElRef:c,inputElRef:h,textareaElRef:d,isCompositing:T,clear:ye,focus:we,blur:gt,select:bt,deactivate:wt,activate:yt,scrollTo:xt},Mt=Cr("Input",p,o),Ce=z(()=>{const{value:e}=oe,{common:{cubicBezierEaseInOut:r},self:{color:i,borderRadius:b,textColor:x,caretColor:g,caretColorError:_,caretColorWarning:R,textDecorationColor:D,border:O,borderDisabled:j,borderHover:ce,borderFocus:zt,placeholderColor:At,placeholderColorDisabled:Ft,lineHeightTextarea:Tt,colorDisabled:kt,colorFocus:_t,textColorDisabled:Rt,boxShadowFocus:Dt,iconSize:Wt,colorFocusWarning:Bt,boxShadowFocusWarning:Et,borderWarning:$t,borderFocusWarning:It,borderHoverWarning:Vt,colorFocusError:Lt,boxShadowFocusError:Nt,borderError:Ot,borderFocusError:jt,borderHoverError:Ht,clearSize:Ut,clearColor:Kt,clearColorHover:qt,clearColorPressed:Xt,iconColor:Yt,iconColorDisabled:Jt,suffixTextColor:Gt,countTextColor:Zt,countTextColorDisabled:Qt,iconColorHover:er,iconColorPressed:tr,loadingColor:rr,loadingColorError:ar,loadingColorWarning:or,[he("padding",e)]:nr,[he("fontSize",e)]:ir,[he("height",e)]:lr}}=l.value,{left:sr,right:dr}=Pr(nr);return{"--n-bezier":r,"--n-count-text-color":Zt,"--n-count-text-color-disabled":Qt,"--n-color":i,"--n-font-size":ir,"--n-border-radius":b,"--n-height":lr,"--n-padding-left":sr,"--n-padding-right":dr,"--n-text-color":x,"--n-caret-color":g,"--n-text-decoration-color":D,"--n-border":O,"--n-border-disabled":j,"--n-border-hover":ce,"--n-border-focus":zt,"--n-placeholder-color":At,"--n-placeholder-color-disabled":Ft,"--n-icon-size":Wt,"--n-line-height-textarea":Tt,"--n-color-disabled":kt,"--n-color-focus":_t,"--n-text-color-disabled":Rt,"--n-box-shadow-focus":Dt,"--n-loading-color":rr,"--n-caret-color-warning":R,"--n-color-focus-warning":Bt,"--n-box-shadow-focus-warning":Et,"--n-border-warning":$t,"--n-border-focus-warning":It,"--n-border-hover-warning":Vt,"--n-loading-color-warning":or,"--n-caret-color-error":_,"--n-color-focus-error":Lt,"--n-box-shadow-focus-error":Nt,"--n-border-error":Ot,"--n-border-focus-error":jt,"--n-border-hover-error":Ht,"--n-loading-color-error":ar,"--n-clear-color":Kt,"--n-clear-size":Ut,"--n-clear-color-hover":qt,"--n-clear-color-pressed":Xt,"--n-icon-color":Yt,"--n-icon-color-hover":er,"--n-icon-color-pressed":tr,"--n-icon-color-disabled":Jt,"--n-suffix-text-color":Gt}}),$=v?Sr("input",z(()=>{const{value:e}=oe;return e[0]}),Ce,t):void 0;return Object.assign(Object.assign({},St),{wrapperElRef:c,inputElRef:h,inputMirrorElRef:u,inputEl2Ref:y,textareaElRef:d,textareaMirrorElRef:f,textareaScrollbarInstRef:A,rtlEnabled:Mt,uncontrolledValue:X,mergedValue:F,passwordVisible:N,mergedPlaceholder:ie,showPlaceholder1:Ee,showPlaceholder2:$e,mergedFocus:le,isComposing:T,activated:L,showClearButton:Ie,mergedSize:oe,mergedDisabled:B,textDecorationStyle:Ve,mergedClsPrefix:o,mergedBordered:a,mergedShowPasswordOn:se,placeholderStyle:xe,mergedStatus:Be,textAreaScrollContainerWidth:be,handleTextAreaScroll:Pt,handleCompositionStart:Qe,handleCompositionEnd:et,handleInput:G,handleInputBlur:rt,handleInputFocus:at,handleWrapperBlur:ot,handleWrapperFocus:nt,handleMouseEnter:ut,handleMouseLeave:ct,handleMouseDown:dt,handleChange:it,handleClick:lt,handleClear:st,handlePasswordToggleClick:ht,handlePasswordToggleMousedown:ft,handleWrapperKeydown:mt,handleWrapperKeyup:vt,handleTextAreaMirrorResize:Ct,getTextareaScrollContainer:()=>d.value,mergedTheme:l,cssVars:v?void 0:Ce,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender})},render(){var t,o;const{mergedClsPrefix:a,mergedStatus:v,themeClass:p,type:l,countGraphemes:c,onRender:d}=this,f=this.$slots;return d==null||d(),n("div",{ref:"wrapperElRef",class:[`${a}-input`,p,v&&`${a}-input--${v}-status`,{[`${a}-input--rtl`]:this.rtlEnabled,[`${a}-input--disabled`]:this.mergedDisabled,[`${a}-input--textarea`]:l==="textarea",[`${a}-input--resizable`]:this.resizable&&!this.autosize,[`${a}-input--autosize`]:this.autosize,[`${a}-input--round`]:this.round&&l!=="textarea",[`${a}-input--pair`]:this.pair,[`${a}-input--focus`]:this.mergedFocus,[`${a}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},n("div",{class:`${a}-input-wrapper`},te(f.prefix,u=>u&&n("div",{class:`${a}-input__prefix`},u)),l==="textarea"?n(Mr,{ref:"textareaScrollbarInstRef",class:`${a}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var u,h;const{textAreaScrollContainerWidth:y}=this,C={width:this.autosize&&y&&`${y}px`};return n(zr,null,n("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${a}-input__textarea-el`,(u=this.inputProps)===null||u===void 0?void 0:u.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:c?void 0:this.maxlength,minlength:c?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(h=this.inputProps)===null||h===void 0?void 0:h.style,C],onBlur:this.handleInputBlur,onFocus:W=>{this.handleInputFocus(W,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?n("div",{class:`${a}-input__placeholder`,style:[this.placeholderStyle,C],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?n(Ar,{onResize:this.handleTextAreaMirrorResize},{default:()=>n("div",{ref:"textareaMirrorElRef",class:`${a}-input__textarea-mirror`,key:"mirror"})}):null)}}):n("div",{class:`${a}-input__input`},n("input",Object.assign({type:l==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":l},this.inputProps,{ref:"inputElRef",class:[`${a}-input__input-el`,(t=this.inputProps)===null||t===void 0?void 0:t.class],style:[this.textDecorationStyle[0],(o=this.inputProps)===null||o===void 0?void 0:o.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:c?void 0:this.maxlength,minlength:c?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:u=>{this.handleInputFocus(u,0)},onInput:u=>{this.handleInput(u,0)},onChange:u=>{this.handleChange(u,0)}})),this.showPlaceholder1?n("div",{class:`${a}-input__placeholder`},n("span",null,this.mergedPlaceholder[0])):null,this.autosize?n("div",{class:`${a}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&te(f.suffix,u=>u||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?n("div",{class:`${a}-input__suffix`},[te(f["clear-icon-placeholder"],h=>(this.clearable||h)&&n(pe,{clsPrefix:a,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>h,icon:()=>{var y,C;return(C=(y=this.$slots)["clear-icon"])===null||C===void 0?void 0:C.call(y)}})),this.internalLoadingBeforeSuffix?null:u,this.loading!==void 0?n(ga,{clsPrefix:a,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?u:null,this.showCount&&this.type!=="textarea"?n(Fe,null,{default:h=>{var y;return(y=f.count)===null||y===void 0?void 0:y.call(f,h)}}):null,this.mergedShowPasswordOn&&this.type==="password"?n("div",{class:`${a}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?q(f["password-visible-icon"],()=>[n(ae,{clsPrefix:a},{default:()=>n(ha,null)})]):q(f["password-invisible-icon"],()=>[n(ae,{clsPrefix:a},{default:()=>n(fa,null)})])):null]):null)),this.pair?n("span",{class:`${a}-input__separator`},q(f.separator,()=>[this.separator])):null,this.pair?n("div",{class:`${a}-input-wrapper`},n("div",{class:`${a}-input__input`},n("input",{ref:"inputEl2Ref",type:this.type,class:`${a}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:c?void 0:this.maxlength,minlength:c?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:u=>{this.handleInputFocus(u,1)},onInput:u=>{this.handleInput(u,1)},onChange:u=>{this.handleChange(u,1)}}),this.showPlaceholder2?n("div",{class:`${a}-input__placeholder`},n("span",null,this.mergedPlaceholder[1])):null),te(f.suffix,u=>(this.clearable||u)&&n("div",{class:`${a}-input__suffix`},[this.clearable&&n(pe,{clsPrefix:a,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var h;return(h=f["clear-icon"])===null||h===void 0?void 0:h.call(f)},placeholder:()=>{var h;return(h=f["clear-icon-placeholder"])===null||h===void 0?void 0:h.call(f)}}),u]))):null,this.mergedBordered?n("div",{class:`${a}-input__border`}):null,this.mergedBordered?n("div",{class:`${a}-input__state-border`}):null,this.showCount&&l==="textarea"?n(Fe,null,{default:u=>{var h;const{renderCount:y}=this;return y?y(u):(h=f.count)===null||h===void 0?void 0:h.call(f,u)}}):null)}}),Pa=m("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[w(">",[m("input",[w("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),w("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),m("button",[w("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[s("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),w("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[s("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),w("*",[w("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[w(">",[m("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),m("base-selection",[m("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),m("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),s("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),w("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[w(">",[m("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),m("base-selection",[m("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),m("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),s("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),Sa={},Fa=k({name:"InputGroup",props:Sa,setup(t){const{mergedClsPrefixRef:o}=ke(t);return ge("-input-group",Pa,o),{mergedClsPrefix:o}},render(){const{mergedClsPrefix:t}=this;return n("div",{class:`${t}-input-group`},this.$slots)}});export{va as C,ga as N,Aa as _,Fa as a,ca as u};
