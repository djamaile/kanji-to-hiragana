(this["webpackJsonpdjam-react-version"]=this["webpackJsonpdjam-react-version"]||[]).push([[0],{52:function(e,t,a){e.exports=a(82)},57:function(e,t,a){},58:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=(a(57),a(28)),i=a(14),s=a(10),u=Object(s.a)(),m=a(19),d=(a(58),a(117)),p=a(116),f=a(120),h=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(f.a,{id:"standard-multiline-flexible",multiline:!0,rows:"4",variant:"outlined",value:e.value||"",onChange:e.handleChange,name:"kanji",style:{width:"100%",backgroundColor:"white",borderRadius:20},disabled:e.disabled}))},E=a(47),b=a(118),v=a(29),x=a.n(v),g=a(45),j=a(46),w=a.n(j),O=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),l=Object(m.a)(o,2),i=l[0],s=l[1];return Object(n.useEffect)((function(){if(e)if(/[\u4e00-\u9faf]/g.test(e)){s("");var t={app_id:"".concat("59140e78d8b7c0534929c031a77667892ac027a1ff78f75a0200636149adf196"),sentence:"".concat(e),output_type:"hiragana"};!function(){a.apply(this,arguments)}()}else s("Input is not Japanese");else c("");function a(){return(a=Object(g.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("https://labs.goo.ne.jp/api/hiragana",t).then((function(e){return e.data.converted}));case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}),[e]),[r,i]},k=Object(E.a)((function(e){return{error:{fontSize:20,color:"red"},textBoxText:{textAlign:"center",fontSize:26}}}));var y=function(){var e=k(),t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],o=a[1],l=O(c),i=Object(m.a)(l,2),s=i[0],u=i[1],f=function(e){o(e.target.value)};return Object(n.useEffect)((function(){}),[c]),r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null),r.a.createElement(d.a,{fixed:!0},r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(b.a,{item:!0,xs:3}),r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement("p",{className:e.textBoxText},"\u6f22\u5b57"),r.a.createElement(h,{value:c,handleChange:f,disabled:!1}),r.a.createElement("br",null)),r.a.createElement(b.a,{item:!0,xs:3}),r.a.createElement(b.a,{item:!0,xs:3}),r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement("p",{className:e.textBoxText},"\u3072\u3089\u304c\u306a"),r.a.createElement(h,{value:s,handleChange:f,disabled:!0}),u?r.a.createElement("p",{className:e.error},"Input is not Japanese"):null),r.a.createElement(b.a,{item:!0,xs:3}))))},B=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:y})))},S=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(l.a,{history:u,basename:window.location.pathname||""},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:B}))))},C=a(119),I=a(49),J=Object(I.a)({overrides:{MuiOutlinedInput:{root:{borderRadius:20}},MuiInputBase:{root:{fontSize:20}}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=r.a.createElement(C.a,{theme:J},r.a.createElement(S,null));o.a.render(N,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);