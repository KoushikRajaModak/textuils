(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(13),a(1));a(15);function s(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," ")},l.a.createElement("div",{className:"container-fluid "},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"About"))),l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")),l.a.createElement("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark"," ")},l.a.createElement("input",{className:"form-check-input ",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark Mode"))))))}function m(e){var t=Object(n.useState)("enter text here"),a=Object(o.a)(t,2),c=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:c,onChange:function(e){console.log(" click Onchange"),r(e.target.value)},id:"myBox",rows:"8",style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"dark"===e.mode?"white":"black"}})),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("uppercase was click"+c);var t=c.toUpperCase();r(t),e.showalert("converted to upperCase","success")}},"Convert to upperCase"),l.a.createElement("button",{className:"btn btn-primary  mx-2",onClick:function(){console.log("uppercase was click"+c);var t=c.toLowerCase();r(t),e.showalert("converted to lowerCase","success")}},"Convert to LowerCase")),l.a.createElement("div",{className:"container my-5",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,"Your text summery"),l.a.createElement("p",null," words ",c.split(" ").length," and charactor",c.length),l.a.createElement("p",null," Time to read ",.008*c.split(" ").length," in minites"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,c.length>0?c:"Enter something to preview here")))}s.defaultProps={title:"set titel here"};var i=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=(t[0],t[1]),c=function(e,t){a({msg:e,type:t}),setTimeout(function(){a(null)},2e3)},r=Object(n.useState)("light"),i=Object(o.a)(r,2),u=i[0],d=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"koushik",mode:u,toggleMode:function(){"light"===u?(d("dark"),document.body.style.backgroundColor=" #121738 ",c("Dark mode is Enable","success"),document.title="Text is Dark mode",setInterval(function(){document.title=" Text is WoW"},2e3)):(d("light"),document.body.style.backgroundColor="white",c("Light mode is Enable","success"),document.title="Text is light mode",setInterval(function(){document.title="Install Text"},1500))}}),l.a.createElement("div",null,l.a.createElement(m,{showalert:c,heading:"Text Analise",mode:u})))},u=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),u()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.f21c5927.chunk.js.map