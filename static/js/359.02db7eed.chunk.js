"use strict";(self.webpackChunkreadme=self.webpackChunkreadme||[]).push([[359],{8104:function(e,t,n){var i=n(8250),r=n(4374),a=n(184),s={initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100}};t.Z=(0,r.Le)((function(e){var t=e.children;return(0,a.jsx)(i.E.div,{variants:s,initial:"initial",animate:"animate",exit:"exit",transition:{duration:1},children:t})}))},3359:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(2791),r={_origin:"https://api.emailjs.com"},a=function(e,t,n){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},s=n(3144),o=n(5671),c=(0,s.Z)((function e(t){(0,o.Z)(this,e),this.status=t.status,this.text=t.responseText})),u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(i,a){var s=new XMLHttpRequest;s.addEventListener("load",(function(e){var t=e.target,n=new c(t);200===n.status||"OK"===n.text?i(n):a(n)})),s.addEventListener("error",(function(e){var t=e.target;a(new c(t))})),s.open("POST",r._origin+e,!0),Object.keys(n).forEach((function(e){s.setRequestHeader(e,n[e])})),s.send(t)}))},d=function(e,t,n,i){var s=i||r._userID,o=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);a(s,e,t);var c=new FormData(o);return c.append("lib_version","3.7.0"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",s),u("/api/v1.0/email/send-form",c)},l=n(4374),p=n(8104),m=n(3486),h=n(9434),f=n(184),v=(0,l.Le)((function(){var e=(0,i.useRef)(),t=(0,h.v9)((function(e){return e.userReducer.username})),n={display:"flex"};n.display=t?"none":"flex";var r=(0,m.VY)();return(0,f.jsx)(p.Z,{children:(0,f.jsx)("div",{className:"contact-page",style:n,children:(0,f.jsx)("div",{className:"contact-form",children:(0,f.jsxs)("form",{ref:e,onSubmit:function(t){t.preventDefault(),d("service_hfv5ubn","template_zdf798p",e.current,"rTRcvTs-16xgPsI5T").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},children:[(0,f.jsx)("div",{className:"input",children:(0,f.jsx)("input",{type:"text",placeholder:"\u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644",name:"user_name"})}),(0,f.jsx)("div",{className:"input",children:(0,f.jsx)("input",{type:"email",placeholder:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a",name:"user_email"})}),(0,f.jsx)("div",{className:"input",children:(0,f.jsx)("textarea",{name:"message",placeholder:"\u0631\u0633\u0627\u0644\u062a\u0643"})}),(0,f.jsx)("div",{class:"wrapper input",children:(0,f.jsx)("input",{type:"submit",value:"\u0627\u0631\u0633\u0627\u0644",onClick:function(){r.show("Your message has been sent")}})})]})})})})}))}}]);
//# sourceMappingURL=359.02db7eed.chunk.js.map