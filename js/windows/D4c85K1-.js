import{n as i,b as r,A as n,V as s}from"../GIZWWUBJ.js";import{a as o,c as d,o as u}from"../czEuRU47.js";import{T as c}from"../BnFZMHdm.js";import{V as m}from"../PLxxIHgE.js";import{T as l}from"../Csh48aNR.js";import"../Bhjq7kBM.js";const p={name:"Guides",components:{TitleBar:c,ValorantAppLogo:m,ThumbUpIcon:l},data(){return{background:this.$background}},mounted(){let e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","https://embed.cloudflarestream.com/embed/r4xu.fla9.latest.js"),document.head.appendChild(e),e.onload=()=>{window.__stream.init()}},computed:{extension(){return this.background.extension},agent(){return this.background.game.session.agent.id},map(){return this.background.game.session.match.mapId},team(){return this.background.game.session.round.sideId},phase(){return this.background.game.session.round.phaseId},guides(){return this.background.game.guides[this.agent]?this.background.game.guides[this.agent].filter(e=>e.attributes.map===this.map&&(e.attributes.team===this.team||e.attributes.team==="all")):null},guide(){return this.guides&&this.guides.length>0&&this.phase==="shopping"?this.guides[Math.floor(Math.random()*this.guides.length)]:null}},watch:{guide(e){if(e){let t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","https://embed.cloudflarestream.com/embed/r4xu.fla9.latest.js?video="+e.url),document.head.appendChild(t),t.onload=()=>{window.__stream.init()}}}}};var g=function(){var t=this,a=t._self._c;return t.guide?a("div",{staticClass:"guides"},[a("title-bar",{attrs:{extension:t.extension}}),a("div",{staticClass:"video"},[a("div",{staticClass:"loading"},[a("ValorantAppLogo",{staticClass:"logo",attrs:{"primary-color":"rgba(255, 255, 255, 0.75)","secondary-color":"rgba(255, 255, 255, 0.75)"}})],1),a("stream",{attrs:{src:t.guide.url,width:"100%",height:"100%",autoplay:"",loop:"",mute:""}})],1),a("div",{staticClass:"details"},[a("div",{staticClass:"name"},[t._v(t._s(t.guide.metadata.title))]),t.guide.metadata.description?a("div",{staticClass:"description"},[t._v(t._s(t.guide.metadata.description))]):t._e()]),a("div",{staticClass:"metadata"},[a("div",{staticClass:"author"},[t._v("Uploaded by "),a("span",[t._v(t._s(t.guide.metadata.author))])]),a("div",{staticClass:"rating"},[a("thumb-up-icon",{staticClass:"icon"}),t._v(" "+t._s(t.guide.rating)+" ")],1)])],1):t._e()},h=[],b=i(p,g,h,!1,null,"a0eb3bbd");const _=b.exports,v="1.26.1",f=new r({apiKey:n.BUGSNAG_API_KEY,appVersion:v});window.bugsnag=f.getInstance();s.prototype.$background=overwolf.windows.getMainWindow().background;s.config.productionTip=!1;s.config.ignoredElements=["stream"];s.directive("auth",o);s.directive("click-outside",d);s.directive("open-url",u);window.isProduction=!0;new s({render:e=>e(_)}).$mount("#app");
