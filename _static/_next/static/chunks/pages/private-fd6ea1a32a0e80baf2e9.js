_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"2sGK":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/private",function(){return n("p9ex")}])},"5Yp1":function(e,t,n){"use strict";var c=n("nKUr"),r=n("q1tI"),s=n("YFqc"),a=n.n(s),i=(n("6nsN"),n("mTzH")),o=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1];return Object(r.useEffect)((function(){var e=function(){window.innerWidth<1200?n(!0):n(!1)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(c.jsxs)("div",{className:"nav bg-primary",children:[Object(c.jsx)("input",{type:"checkbox",id:"nav-check"}),Object(c.jsx)("div",{className:"nav-header",children:Object(c.jsx)("div",{className:"nav-title",role:"button",children:Object(c.jsx)("a",{href:"/",children:Object(c.jsx)("img",{width:"50px",src:"https://www.helium.bg/wp-content/uploads/ct-logos/logo_c87d22da853d6ccfcb2a89b1548ec250_1x.png",alt:"Logo"})})})}),Object(c.jsx)("div",{className:"nav-btn",children:Object(c.jsxs)("label",{htmlFor:"nav-check",children:[Object(c.jsx)("span",{}),Object(c.jsx)("span",{}),Object(c.jsx)("span",{})]})}),Object(c.jsxs)("div",{className:"nav-links",children:[Object(c.jsx)(a.a,{href:"/",children:"Home"}),Object(c.jsx)(a.a,{href:"/private",children:"My Profile"}),t&&Object(c.jsx)("a",{onClick:function(){i.b.auth().signOut()},children:"Log out"})]}),!t&&Object(c.jsx)("div",{className:"nav-right",children:Object(c.jsx)("a",{role:"button",onClick:function(){i.b.auth().signOut()},children:"Log out"})})]})},l=n("g4pe"),u=n.n(l);t.a=function(e){var t=e.children,n=Object(r.useState)(null),s=(n[0],n[1]);return Object(r.useEffect)((function(){i.b.auth().onAuthStateChanged((function(e){s(e||null)}))})),Object(c.jsxs)("div",{children:[Object(c.jsxs)(u.a,{children:[Object(c.jsx)("title",{children:"Head"}),Object(c.jsx)("link",{rel:"stylesheet",href:"https://bootswatch.com/4/darkly/bootstrap.min.css"})]}),Object(c.jsx)(o,{}),Object(c.jsx)("div",{className:"content",children:t}),Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"text-center pt-5",children:[Object(c.jsx)("p",{style:{color:"#31d66e"},children:Object(c.jsx)("a",{href:"https://discord.gg/z9B4FHESk4",children:"Join to our discord server"})}),Object(c.jsx)("p",{children:"Email:"}),Object(c.jsx)("p",{children:"hello@helium.bg"})]})})]})}},"HaE+":function(e,t,n){"use strict";function c(e,t,n,c,r,s,a){try{var i=e[s](a),o=i.value}catch(l){return void n(l)}i.done?t(o):Promise.resolve(o).then(c,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function i(e){c(a,r,s,i,o,"next",e)}function o(e){c(a,r,s,i,o,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return r}))},K8OV:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var c=n("o0o1"),r=n.n(c),s=n("HaE+"),a=n("Jgta"),i=(n("6nsN"),n("mTzH")),o=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,c,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.wallet,c=t.password,s=t.telegram,o=t.discord,e.next=3,a.a.auth().createUserWithEmailAndPassword(n+"@gmail.com",c).then((function(e){var t=e.user;console.log(t),i.a.collection("channels").doc("general").collection("messages").add({wallet:n,telegram:s,discord:o,email:n+"@gmail.com",user:t.uid,date:new Date})})).catch((function(e){e.code;var t=e.message;console.log(t)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.wallet,c=t.password,e.next=3,a.a.auth().signInWithEmailAndPassword(n+"@gmail.com",c).then((function(e){e.user})).catch((function(e){e.code,e.message;alert(e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new a.a.auth.GoogleAuthProvider,e.next=3,a.a.auth().signInWithPopup(t).then((function(e){var t=e.user;e.additionalUserInfo.isNewUser?(console.log("user "+t.email+" does not exist!"),window.location="/form"):console.log("user "+t.email+" does exist!")})).catch((function(e){}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},"mR+L":function(e,t,n){"use strict";var c=n("rePB"),r=n("nKUr"),s=n("o0o1"),a=n.n(s),i=n("HaE+"),o=n("q1tI"),l=n("g4pe"),u=n.n(l),d=n("YFqc"),j=n.n(d),b=n("K8OV");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(){var e=Object(o.useState)(!1),t=(e[0],e[1]),n=Object(o.useState)({wallet:"",password:""}),c=n[0],s=n[1],l=function(){var e=Object(i.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Object(b.b)(c);case 3:t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsxs)(u.a,{children:[Object(r.jsx)("link",{rel:"stylesheet",href:"https://bootswatch.com/4/darkly/bootstrap.min.css"}),Object(r.jsx)("title",{children:"Helium Hosts Login"})]}),Object(r.jsx)("img",{width:"100px",src:"https://www.helium.bg/wp-content/uploads/ct-logos/logo_c87d22da853d6ccfcb2a89b1548ec250_1x.png",alt:"Logo"}),Object(r.jsx)("h3",{className:"pt-3",children:"Helium Hosts Login"}),Object(r.jsxs)("p",{className:"pt-4",children:["Private and secure communication between Helium hotspot hosts. You don\u2019t need to provide any personal information to add your hotspots and begin chatting with other hosts in your area.",Object(r.jsx)("br",{}),"If you have already created an account, please login below. Otherwise, you can sign up by creating an account below.",Object(r.jsx)("br",{}),"Keep in mind, all communication between hosts is done via Telegram and Discord."]}),Object(r.jsxs)("form",{onSubmit:l,className:"form-group col-sm-4 pb-5 pt-3",style:{margin:"0 auto"},children:[Object(r.jsx)("label",{htmlFor:"wallet",children:"Wallet"}),Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Wallet ID",id:"wallet",onChange:function(e){return s(p(p({},c),{},{wallet:e.target.value}))}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",onChange:function(e){return s(p(p({},c),{},{password:e.target.value}))}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]}),Object(r.jsx)("button",{className:"btn btn-success mb-3",onClick:b.a,children:"Sign in with Gmail"}),Object(r.jsx)("p",{children:Object(r.jsx)("b",{children:"OR"})}),Object(r.jsx)(j.a,{className:"nav-link",href:"/register",children:Object(r.jsx)("a",{children:Object(r.jsx)("b",{children:"Create new account"})})})]})}},p9ex:function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),r=n("q1tI"),s=n("5Yp1"),a=n("mTzH"),i=n("g4pe"),o=n.n(i),l=n("mR+L");t.default=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],i=Object(r.useState)([]),u=i[0],d=i[1],j=Object(r.useState)(!1),b=j[0],h=j[1];function p(){a.b.auth().onAuthStateChanged((function(e){e?(n(e),function(e){a.a.collection("channels").doc("general").collection("messages").where("user","==",e.uid).get().then((function(e){e.empty?console.log("false"):e.forEach((function(e){var t=e.data();d(t),console.log(t)}))}))}(e)):n(null)}))}function m(e){var t=e.wallet,n=Object(r.useState)(!1),s=n[0],a=n[1];return navigator.clipboard.writeText(t),Object(c.jsx)("button",{className:s?"btn btn-success btn-sm":"btn btn-info btn-sm",onClick:function(e){return a(!0)},children:s?"Copied to clipboard!":"Copy my wallet ID"})}return Object(r.useEffect)((function(){p()}),[]),t?Object(c.jsx)(s.a,{children:Object(c.jsxs)("div",{className:"container text-center pt100",children:[Object(c.jsx)("h3",{children:"My personal information"}),u&&Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"card text-white mb-5 mt-5 mx-auto",style:{maxWidth:"50rem"},children:[Object(c.jsx)("div",{className:"card-header",children:"Wallet ID"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("p",{className:"card-text",children:u.wallet}),Object(c.jsx)(m,{wallet:u.wallet}),Object(c.jsx)("div",{className:"pt-2",children:u.telegram?Object(c.jsx)("a",{className:"link",href:"https://t.me/".concat(u.telegram),children:Object(c.jsx)("img",{src:"https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png",style:{width:"150px",height:"50px"}})}):Object(c.jsx)("div",{style:{width:"150px",height:"50px",margin:"0 auto"},children:"No Telegram account"})}),Object(c.jsx)("div",{className:"pt-2",children:u.discord?Object(c.jsx)("a",{className:"link",href:"https://discord.gg/users/".concat(u.discord),children:Object(c.jsx)("img",{src:"https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",style:{width:"130px",height:"40px",marginRight:"10px"}})}):Object(c.jsx)("div",{style:{width:"130px",height:"40px",margin:"0 auto"},children:"No Discord account"})})]}),Object(c.jsx)("button",{className:"btn btn-warning",onClick:function(){return h(!b)},children:b?"Close":"Edit my profile"})]})}),Object(c.jsxs)("form",{className:"form-group col-md-6 mx-auto text-center ".concat(b?"":"updForm"),onSubmit:function(e){e.preventDefault(),a.a.collection("channels").doc("general").collection("messages").where("user","==",t.uid).get().then((function(n){n.forEach((function(n){n.ref.update({wallet:e.target.elements[0].value,telegram:e.target.elements[1].value,discord:e.target.elements[2].value}).then((function(){var c=n.data();d(c),e.target.elements[3].click(),t.updateEmail(e.target.elements[0].value+"@gmail.com")}))}))}))},children:[Object(c.jsx)("label",{children:"Wallet:"}),Object(c.jsx)("input",{className:"form-control",type:"text",defaultValue:u.wallet}),Object(c.jsx)("label",{children:"Telegram:"}),Object(c.jsx)("input",{className:"form-control",type:"text",defaultValue:u.telegram}),Object(c.jsx)("label",{children:"Discord:"}),Object(c.jsx)("input",{className:"form-control",type:"text",defaultValue:u.discord}),Object(c.jsx)("input",{className:"btn btn-success mt-3",type:"submit",id:"sbm",value:"Update"})]})]})}):Object(c.jsxs)("div",{children:[Object(c.jsx)(o.a,{children:Object(c.jsx)("link",{rel:"stylesheet",href:"https://bootswatch.com/4/darkly/bootstrap.min.css"})}),Object(c.jsxs)("div",{className:"App container pt-3 pb-3",children:[Object(c.jsx)("h1",{children:"Helium"}),Object(c.jsx)(l.a,{}),Object(c.jsx)("br",{})]})]})}},rePB:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}))}},[["2sGK",0,2,3,5,1,4]]]);