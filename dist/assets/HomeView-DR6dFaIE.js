import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as b,c as y,a as n,t as C,n as p,u as M,r as u,b as V,d as k,F as B}from"./index-BUgH2_Je.js";const I="/assets/logop-CbfdIKxN.png",T={class:"line"},H={__name:"VersionNumber",props:{versionNumber:{type:String,required:!0,default:"版号"},color:{type:String,required:!1,default:null}},setup(i){return(_,a)=>(b(),y("div",T,[n("a",{tabIndex:"-1",href:"http://beian.miit.gov.cn/",target:"_blank",rel:"noopener",style:p({color:i.color})},C(i.versionNumber),5)]))}},R=g(H,[["__scopeId","data-v-1e101407"]]),S={class:"bottom"},q={__name:"HomeView",setup(i){const _=M(),a=u(255),l=u(255),t=u(255),s=u(0),r=u([255,255,255]),v=u(3);V(()=>{w(),N()});const w=()=>{let e=new Date().getHours();e<1||18<=e?(a.value=242,l.value=123,t.value=31):1<=e&&e<5?(a.value=139,l.value=38,t.value=113):5<=e&&e<10?(a.value=140,l.value=194,t.value=105):10<=e&&e<14?(a.value=242,l.value=185,t.value=178):14<=e&&e<18&&(a.value=35,l.value=118,t.value=183),window.matchMedia("(prefers-color-scheme: light)").matches?r.value=[255,255,255]:r.value=[13,17,23]},N=()=>{let e=7,o=14;const m=()=>{setTimeout(()=>{a.value=d(a.value),m()},c(e,o))},f=()=>{setTimeout(()=>{l.value=d(l.value),f()},c(e,o))},h=()=>{setTimeout(()=>{t.value=d(t.value),h()},c(e,o))};m(),f(),h()},c=(e,o)=>(e=Math.ceil(e),o=Math.floor(o),Math.floor(Math.random()*(o-e+1))+e),d=e=>(e+=c(-1,1),e=e<0?0:e,e=e>255?255:e,e),x=()=>{s.value++,s.value>=v.value?(s.value=0,_.push("/understand")):(a.value+=(r.value[0]-a.value)*(1/(v.value-s.value)),l.value+=(r.value[1]-l.value)*(1/(v.value-s.value)),t.value+=(r.value[2]-t.value)*(1/(v.value-s.value)))};return(e,o)=>(b(),y(B,null,[n("div",{class:"mid",style:p("filter: drop-shadow(0 0 10vh rgb("+a.value+","+l.value+","+t.value+"))")},[n("div",{class:"select-none",style:{filter:"drop-shadow(0 0 2px var(--color-background))"},onClick:x},[n("img",{style:p("filter: drop-shadow(0 100vh 0 rgb("+a.value+","+l.value+","+t.value+"))"),src:I},null,4)])],4),n("div",S,[k(R,{versionNumber:"鲁ICP备2022011940号-1",color:"rgb("+a.value+","+l.value+","+t.value+")"},null,8,["color"])])],64))}},G=g(q,[["__scopeId","data-v-b20679d6"]]);export{G as default};
