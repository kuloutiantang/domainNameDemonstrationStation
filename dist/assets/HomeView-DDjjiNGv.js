import{o as p,c as f,a as r,t as b,r as v,b as y,n as d,d as N,F as V}from"./index-BsGGAONf.js";const w="/assets/logop-CbfdIKxN.png",g=(s,a)=>{const t=s.__vccOpts||s;for(const[o,u]of a)t[o]=u;return t},B={class:"line"},M={href:"http://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},T={__name:"VersionNumber",props:{versionNumber:{type:String,required:!0,default:"版号"}},setup(s){return(a,t)=>(p(),f("div",B,[r("a",M,b(s.versionNumber),1)]))}},k=g(T,[["__scopeId","data-v-292123a8"]]),x={__name:"HomeView",setup(s){const a=v(255),t=v(255),o=v(255);y(()=>{u(),h()});const u=()=>{let e=new Date().getHours();e<1||18<=e?(a.value=242,t.value=123,o.value=31):1<=e&&e<5?(a.value=139,t.value=38,o.value=113):5<=e&&e<10?(a.value=140,t.value=194,o.value=105):10<=e&&e<14?(a.value=242,t.value=185,o.value=178):14<=e&&e<18&&(a.value=35,t.value=118,o.value=183)},h=()=>{let e=7,l=14;const i=()=>{setTimeout(()=>{a.value=c(a.value),i()},n(e,l))},_=()=>{setTimeout(()=>{t.value=c(t.value),_()},n(e,l))},m=()=>{setTimeout(()=>{o.value=c(o.value),m()},n(e,l))};i(),_(),m()},n=(e,l)=>(e=Math.ceil(e),l=Math.floor(l),Math.floor(Math.random()*(l-e+1))+e),c=e=>(e+=n(-1,1),e=e<0?0:e,e=e>255?255:e,e);return(e,l)=>(p(),f(V,null,[r("div",{class:"mid",style:d("filter: drop-shadow(0 0 10vh rgb("+a.value+","+t.value+","+o.value+"))")},[r("div",null,[r("img",{style:d("filter: drop-shadow(0 100vh 0 rgb("+a.value+","+t.value+","+o.value+"))"),src:w},null,4)])],4),r("div",{class:"bottom",style:d("color:rgb("+a.value+","+t.value+","+o.value+")")},[N(k,{versionNumber:"鲁ICP备2022011940号-1"})],4)],64))}},H=g(x,[["__scopeId","data-v-02213c3e"]]);export{H as default};