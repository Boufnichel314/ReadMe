"use strict";(self.webpackChunkreadme=self.webpackChunkreadme||[]).push([[359],{8104:function(e,t,r){var n=r(8250),a=r(184),i={initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100}};t.Z=function(e){var t=e.children;return(0,a.jsx)(n.E.div,{variants:i,initial:"initial",animate:"animate",exit:"exit",transition:{duration:1},children:t})}},3359:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(2791),a={_origin:"https://api.emailjs.com"},i=function(e,t,r){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},s=r(3144),o=r(5671),c=(0,s.Z)((function e(t){(0,o.Z)(this,e),this.status=t.status,this.text=t.responseText})),u=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,i){var s=new XMLHttpRequest;s.addEventListener("load",(function(e){var t=e.target,r=new c(t);200===r.status||"OK"===r.text?n(r):i(r)})),s.addEventListener("error",(function(e){var t=e.target;i(new c(t))})),s.open("POST",a._origin+e,!0),Object.keys(r).forEach((function(e){s.setRequestHeader(e,r[e])})),s.send(t)}))},l=function(e,t,r,n){var s=n||a._userID,o=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(r);i(s,e,t);var c=new FormData(o);return c.append("lib_version","3.7.0"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",s),u("/api/v1.0/email/send-form",c)},f=r(8104),p=r(803),d=r(485),h=r(2093),v=r(6409),m=r(9434),x=r(184),j=function(){var e=(0,n.useRef)(),t=(0,m.v9)((function(e){return e.userReducer.username})),r={display:"flex"};r.display=t?"none":"flex";var a=(0,d.VY)();return(0,x.jsx)(f.Z,{children:(0,x.jsx)("div",{className:"contact-page",style:r,children:(0,x.jsx)(p.Z,{fixed:!0,children:(0,x.jsxs)("div",{className:"contact-form",children:[(0,x.jsxs)("form",{ref:e,onSubmit:function(t){t.preventDefault(),l("service_hfv5ubn","template_zdf798p",e.current,"rTRcvTs-16xgPsI5T").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},children:[(0,x.jsx)("div",{className:"input",children:(0,x.jsx)("input",{type:"text",placeholder:"\u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644",name:"user_name"})}),(0,x.jsx)("div",{className:"input",children:(0,x.jsx)("input",{type:"email",placeholder:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a",name:"user_email"})}),(0,x.jsx)("div",{className:"input",children:(0,x.jsx)("textarea",{name:"message",placeholder:"\u0631\u0633\u0627\u0644\u062a\u0643"})}),(0,x.jsx)("div",{class:"wrapper input",children:(0,x.jsx)("input",{type:"submit",value:"\u0627\u0631\u0633\u0627\u0644",onClick:function(){a.show("\u062a\u0645 \u0627\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0646\u062c\u0627\u062d")}})})]}),(0,x.jsxs)("div",{className:"icons",children:[(0,x.jsx)("a",{href:"https://www.facebook.com/readme314",target:"_blank",rel:"noreferrer",children:(0,x.jsx)(h.Z,{className:"fb"})}),(0,x.jsx)("a",{href:"https://wa.me/+212771487686",target:"_blank",rel:"noreferrer",children:(0,x.jsx)(v.Z,{className:"whts"})})]})]})})})})}},2093:function(e,t,r){var n=r(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,r&&r.set(e,n)}(r(2791));var a=n(r(5649)),i=r(184);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}var o=(0,a.default)((0,i.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");t.Z=o},6409:function(e,t,r){var n=r(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,r&&r.set(e,n)}(r(2791));var a=n(r(5649)),i=r(184);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}var o=(0,a.default)((0,i.jsx)("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"}),"WhatsApp");t.Z=o}}]);
//# sourceMappingURL=359.3902efd3.chunk.js.map