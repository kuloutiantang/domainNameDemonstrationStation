import{P as $,r as M,j as q,bR as A,L as y,M as b,Q as B,R as C,N as t,U as O,W as E,bQ as L,O as D,G as F,S as w,bV as R,bU as U,bx as G}from"./index-B0BNdymE.js";import{r as Q,d as j,u as W,n as P,a as I,_ as J,c as K}from"./dayjs.min-V1UtqCDi.js";import{c as H,g as X}from"./_commonjsHelpers-Cpj98o6Y.js";import{C as Z}from"./index-CyKlR0oi.js";import{u as ee}from"./color-DD22xO62.js";var te={exports:{}};(function(T,Y){(function(r,i){T.exports=i(Q())})(H,function(r){function i(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var m=i(r),u={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(o,c){return c==="W"?o+"周":o+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(o,c){var s=100*o+c;return s<600?"凌晨":s<900?"早上":s<1100?"上午":s<1300?"中午":s<1800?"下午":"晚上"}};return m.default.locale(u,null,!0),u})})(te);var V={exports:{}};(function(T,Y){(function(r,i){T.exports=i()})(H,function(){return function(r,i,m){r=r||{};var u=i.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function c(a,d,x,_){return u.fromToBase(a,d,x,_)}m.en.relativeTime=o,u.fromToBase=function(a,d,x,_,e){for(var n,f,l,p=x.$locale().relativeTime||o,h=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],N=h.length,k=0;k<N;k+=1){var v=h[k];v.d&&(n=_?m(a).diff(x,v.d,!0):x.diff(a,v.d,!0));var g=(r.rounding||Math.round)(Math.abs(n));if(l=n>0,g<=v.r||!v.r){g<=1&&k>0&&(v=h[k-1]);var S=p[v.l];e&&(g=e(""+g)),f=typeof S=="string"?S.replace("%d",g):S(g,d,v.l,l);break}}if(d)return f;var z=l?p.future:p.past;return typeof z=="function"?z(f):z.replace("%s",f)},u.to=function(a,d){return c(a,d,this,!0)},u.from=function(a,d){return c(a,d,this)};var s=function(a){return a.$u?m.utc():m()};u.toNow=function(a){return this.to(s(this),a)},u.fromNow=function(a){return this.from(s(this),a)}}})})(V);var oe=V.exports;const ae=X(oe),se={class:"flex flex-row justify-start items-center"},le=t("div",{class:"w-21px"},null,-1),re={key:1,class:"h-full flex justify-center items-center select-none"},ne=t("div",{class:"h-70px"},null,-1),ie={class:"w-1200px flex flex-col justify-start items-center"},ue=t("div",{class:"w-full text-2rem mt-3.5rem mb-1.4rem"},"统计数据",-1),ce={key:0,class:"box w-full flex flex-row justify-start items-center gap-2rem"},de={class:"text-1rem"},me=t("div",{class:"h-0.5rem"},null,-1),_e={class:"text-3rem",style:{color:"var(--var-theme-color)"}},fe=t("div",{class:"w-full text-2rem mt-3.5rem mb-1.4rem"},"统计图表",-1),pe={class:"box w-full flex flex-row justify-start items-center gap-2rem"},he={key:0,class:"boxson"},ve={class:"text-1rem"},ye={key:1,class:"boxson"},xe={class:"text-1rem"},Me={__name:"monitorView",setup(T){const Y=$();j.locale("zh-cn"),j.extend(ae);const r=W(),i=ee(),m=M([]),u=M(null),o=M(null),c=M({}),s=M({});q(()=>{!i.beReady&&i.init(7),a()});const a=async()=>{let _=null;await A.get("http://nodeapi.kuloutiantang.top/www/log/monitor/"+window.btoa(window.location.host)).then(e=>{_=e.data.statisticsNumber,Object.keys(e.data.statisticsNumber).forEach(l=>{_[l].value=P(e.data.statisticsNumber[l].value).format("000,0")});let n=[];e.data.statisticsTable.new7table_query.data.map((l,p)=>{n[p]={day:j(l.day).locale("zh-cn").fromNow(),num:+l.num}}),console.log(n),c.value.title=e.data.statisticsTable.new7table_query.name,c.value.options={theme:"classicDark",type:"view",autoFit:!0,data:{value:n,transform:[{type:"rename",day:"日期",num:"人数"}]},encode:{x:"日期",y:"人数"},axis:{x:{title:null,tick:!1,line:!0},y:{title:null,grid:!1,tick:!1,label:!1}},children:[{type:"line",encode:{shape:"smooth"}},{type:"point",tooltip:!1},{type:"text",encode:{x:"日期",y:"人数",text:"人数"},style:{fill:"rgba(230, 237, 243, 0.64)",textAlign:"center",dy:-10},tooltip:!1}],text:{fontSize:"14px"},color:{palette:"greys"}};let f=[];e.data.statisticsTable.all7table_query.data.map((l,p)=>{f[p]={day:j(l.day).locale("zh-cn").fromNow(),num:+l.num}}),s.value.title=e.data.statisticsTable.all7table_query.name,s.value.options={theme:"classicDark",type:"view",autoFit:!0,data:{value:f,transform:[{type:"rename",day:"日期",num:"人数"}]},encode:{x:"日期",y:"人数"},axis:{x:{title:null,tick:!1,line:!0},y:{title:null,grid:!1,tick:!1,label:!1}},children:[{type:"line",encode:{shape:"smooth"}},{type:"point",tooltip:!1},{type:"text",encode:{x:"日期",y:"人数",text:"人数"},style:{fill:"rgba(230, 237, 243, 0.64)",textAlign:"center",dy:-10},tooltip:!1}],text:{fontSize:"14px"},color:{palette:"greys"}}}),m.value=_,d(u.value,c.value.options),d(o.value,s.value.options)},d=(_,e)=>{const n=new Z({container:_});return n.options(e),n.render(),n},x=()=>{r.logout(),Y.push("/")};return(_,e)=>{const n=G,f=J,l=K,p=I;return y(),b("div",{class:"box-border w-100vw h-100vh overflow-hidden overflow-y-auto flex flex-col justify-start items-center",style:F({"--var-theme-color":w(i).themeColor,"--var-theme-opacity-color":w(i).themeColorOp(.07)})},[B(p,{top:0,"trigger-top":0,class:"box-border bg-theme w-full h-70px flex flex-col justify-center items-center border-1px border-b-solid z-2 <xl:hidden",style:{color:"var(--var-theme-color)"}},{default:C(()=>[B(l,{class:"w-1200px"},{title:C(()=>[t("div",se,[t("div",{onClick:e[0]||(e[0]=h=>w(Y).push("/")),class:"cursor-pointer size-35px transition-777 i-solar-home-smile-bold-duotone",style:{color:"var(--var-theme-color)"}}),le,t("div",{onClick:e[1]||(e[1]=h=>w(Y).go()),class:"fw-900 text-28px lh-42px cursor-pointer select-none",style:{color:"var(--var-theme-color)"}}," 监控 ")])]),extra:C(()=>[B(f,null,{default:C(()=>[w(r).isLogin?(y(),R(n,{key:0,onClick:e[2]||(e[2]=h=>x()),strong:"",type:"error"},{default:C(()=>[U("退出")]),_:1})):L("",!0),w(r).isLogin?(y(),b("div",re,[t("span",null,D(w(r).user.email),1)])):L("",!0)]),_:1})]),_:1})]),_:1}),ne,t("div",ie,[ue,m.value?(y(),b("div",ce,[(y(!0),b(O,null,E(m.value,(h,N)=>(y(),b("div",{key:N,class:"boxson rounded-0.5rem p-1.5rem",style:{"background-color":"var(--var-theme-opacity-color)"}},[t("div",de,D(h.name),1),me,t("div",_e,D(h.value),1)]))),128))])):L("",!0),fe,t("div",pe,[c.value?(y(),b("div",he,[t("div",ve,D(c.value.title),1),t("div",{ref_key:"table1Container",ref:u,class:"w-384px h-216px"},null,512)])):L("",!0),s.value?(y(),b("div",ye,[t("div",xe,D(s.value.title),1),t("div",{ref_key:"table2Container",ref:o,class:"w-384px h-216px"},null,512)])):L("",!0)])])],4)}}};export{Me as default};
