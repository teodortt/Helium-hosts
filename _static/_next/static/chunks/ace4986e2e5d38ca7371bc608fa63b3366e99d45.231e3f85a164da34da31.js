(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"5Yp1":function(e,t,c){"use strict";var n=c("nKUr"),s=c("q1tI"),r=c("YFqc"),a=c.n(r),i=(c("6nsN"),c("mTzH")),o=function(){var e=Object(s.useState)(!1),t=e[0],c=e[1];return Object(s.useEffect)((function(){var e=function(){window.innerWidth<1200?c(!0):c(!1)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.jsxs)("div",{className:"nav bg-primary",children:[Object(n.jsx)("input",{type:"checkbox",id:"nav-check"}),Object(n.jsx)("div",{className:"nav-header",children:Object(n.jsx)("div",{className:"nav-title",role:"button",children:Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("img",{width:"50px",src:"https://www.helium.bg/wp-content/uploads/ct-logos/logo_c87d22da853d6ccfcb2a89b1548ec250_1x.png",alt:"Logo"})})})}),Object(n.jsx)("div",{className:"nav-btn",children:Object(n.jsxs)("label",{htmlFor:"nav-check",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]})}),Object(n.jsxs)("div",{className:"nav-links",children:[Object(n.jsx)(a.a,{href:"/",children:"Home"}),Object(n.jsx)(a.a,{href:"/private",children:"My Profile"}),t&&Object(n.jsx)("a",{onClick:function(){i.b.auth().signOut()},children:"Log out"})]}),!t&&Object(n.jsx)("div",{className:"nav-right",children:Object(n.jsx)("a",{role:"button",onClick:function(){i.b.auth().signOut()},children:"Log out"})})]})},l=c("g4pe"),d=c.n(l);t.a=function(e){var t=e.children,c=Object(s.useState)(null),r=(c[0],c[1]);return Object(s.useEffect)((function(){i.b.auth().onAuthStateChanged((function(e){r(e||null)}))})),Object(n.jsxs)("div",{children:[Object(n.jsxs)(d.a,{children:[Object(n.jsx)("title",{children:"Head"}),Object(n.jsx)("link",{rel:"stylesheet",href:"https://bootswatch.com/4/darkly/bootstrap.min.css"})]}),Object(n.jsx)(o,{}),Object(n.jsx)("div",{className:"content",children:t}),Object(n.jsx)("footer",{children:Object(n.jsxs)("div",{className:"text-center pt-5",children:[Object(n.jsx)("p",{style:{color:"#31d66e"},children:Object(n.jsx)("a",{href:"https://discord.gg/z9B4FHESk4",children:"Join to our discord server"})}),Object(n.jsx)("p",{children:"Email:"}),Object(n.jsx)("p",{children:"hello@helium.bg"})]})})]})}},"HaE+":function(e,t,c){"use strict";function n(e,t,c,n,s,r,a){try{var i=e[r](a),o=i.value}catch(l){return void c(l)}i.done?t(o):Promise.resolve(o).then(n,s)}function s(e){return function(){var t=this,c=arguments;return new Promise((function(s,r){var a=e.apply(t,c);function i(e){n(a,s,r,i,o,"next",e)}function o(e){n(a,s,r,i,o,"throw",e)}i(void 0)}))}}c.d(t,"a",(function(){return s}))},K8OV:function(e,t,c){"use strict";c.d(t,"c",(function(){return o})),c.d(t,"b",(function(){return l})),c.d(t,"a",(function(){return d}));var n=c("o0o1"),s=c.n(n),r=c("HaE+"),a=c("Jgta"),i=(c("6nsN"),c("mTzH")),o=function(){var e=Object(r.a)(s.a.mark((function e(t){var c,n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.wallet,n=t.password,r=t.telegram,o=t.discord,e.next=3,a.a.auth().createUserWithEmailAndPassword(c+"@gmail.com",n).then((function(e){var t=e.user;console.log(t),i.a.collection("channels").doc("general").collection("messages").add({wallet:c,telegram:r,discord:o,email:c+"@gmail.com",user:t.uid,date:new Date})})).catch((function(e){e.code;var t=e.message;console.log(t)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(r.a)(s.a.mark((function e(t){var c,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.wallet,n=t.password,e.next=3,a.a.auth().signInWithEmailAndPassword(c+"@gmail.com",n).then((function(e){e.user})).catch((function(e){e.code,e.message;alert(e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new a.a.auth.GoogleAuthProvider,e.next=3,a.a.auth().signInWithPopup(t).then((function(e){var t=e.user;e.additionalUserInfo.isNewUser?(console.log("user "+t.email+" does not exist!"),window.location="/form"):console.log("user "+t.email+" does exist!")})).catch((function(e){}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},RNiq:function(e,t,c){"use strict";c.r(t);var n=c("nKUr"),s=c("rePB"),r=c("q1tI"),a=(c("6nsN"),c("mTzH")),i=c("5Yp1"),o=c("mR+L");function l(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function d(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?l(Object(c),!0).forEach((function(t){Object(s.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var j=function(){var e=Object(r.useState)([]),t=e[0],c=e[1],s=Object(r.useState)([]),i=s[0],o=s[1],l=Object(r.useState)("fixed-footer closed"),j=l[0],h=l[1],b=Object(r.useState)(""),u=b[0],p=b[1],m=Object(r.useState)([]),O=m[0],x=m[1];function f(e){var t="https://api.helium.io/v1/accounts/".concat(e,"/hotspots");fetch(t).then((function(e){return e.json()})).then((function(e){o(e.data)}))}function g(e){var t=e.wallet,c=Object(r.useState)(!1),s=c[0],a=c[1];return navigator.clipboard.writeText(t),Object(n.jsx)("button",{className:s?"btn btn-success btn-sm":"btn btn-secondary btn-sm",onClick:function(e){return a(!0)},children:s?"Copied to clipboard!":"Copy wallet ID"})}return Object(r.useEffect)((function(){a.a.collection("channels").doc("general").collection("messages").orderBy("date","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(d(d({},e.data()),{},{id:e.id}))})),c(t)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"container pb-5",children:Object(n.jsxs)("form",{className:"form col-md-6 mx-auto mt-5",onSubmit:function(e){e.preventDefault(),function(e){a.a.collection("channels").doc("general").collection("messages").where("wallet","==",e).get().then((function(e){e.empty?alert("no data"):e.forEach((function(e){x(e.data())}))}))}(u)},children:[Object(n.jsx)("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search wallet...",value:u,onChange:function(e){return p(e.target.value)}}),Object(n.jsx)("button",{className:"btn btn-secondary my-2 ",children:"Search"})]})})}),Object(n.jsx)("div",{className:"container",children:O.wallet?Object(n.jsxs)("div",{className:"container p-5",children:[Object(n.jsx)("h3",{children:"Results:"}),Object(n.jsxs)("div",{className:"card text-white bg-primary mb-3 mx-auto",style:{maxWidth:"20rem"},children:[Object(n.jsx)("div",{className:"card-header",children:O.wallet.slice(0,25)+"..."}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)(g,{wallet:O.wallet}),Object(n.jsx)("p",{className:"pt-2",children:O.telegram?Object(n.jsx)("a",{className:"link",target:"_blank",href:"https://t.me/".concat(O.telegram),children:Object(n.jsx)("img",{src:"https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png",style:{width:"150px",height:"50px"}})}):Object(n.jsx)("b",{style:{width:"150px",height:"50px",margin:"0 auto"},children:"No Telegram account"})}),Object(n.jsx)("p",{className:"pt-2",children:O.discord?Object(n.jsx)("a",{className:"link",target:"_blank",href:"https://discord.gg/users/".concat(O.discord),children:Object(n.jsx)("img",{src:"https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",style:{width:"130px",height:"40px",marginRight:"10px"}})}):Object(n.jsx)("b",{style:{width:"130px",height:"40px",margin:"0 auto"},children:"No Discord account"})}),Object(n.jsx)("button",{className:"btn btn-info pt-2",onClick:function(){f(token.wallet),h("fixed-footer")},children:"show hotspots"})]})]}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){return x([])},children:"Go back"})]}):Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{children:"Recently added wallets"}),Object(n.jsxs)("div",{className:"row pt-4",children:[Object(n.jsxs)("div",{className:"col-sm",children:[t.slice(0,15).filter((function(e,t){return t%3==0})).map((function(e,t){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"card text-white bg-primary mb-3",style:{maxWidth:"20rem"},children:[Object(n.jsx)("div",{className:"card-header",children:e.wallet.slice(0,25)+"..."}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)(g,{wallet:e.wallet}),Object(n.jsx)("div",{className:"pt-2",children:e.telegram?Object(n.jsx)("a",{className:"link",target:"_blank",href:"https://t.me/".concat(e.telegram),children:Object(n.jsx)("img",{src:"https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png",style:{width:"150px",height:"50px"}})}):Object(n.jsx)("div",{style:{width:"150px",height:"50px",margin:"0 auto"},children:"No Telegram account"})}),Object(n.jsx)("div",{children:e.discord?Object(n.jsx)("a",{className:"link",target:"_blank",href:"https://discord.gg/users/".concat(e.discord),children:Object(n.jsx)("img",{className:"mb-2",src:"https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",style:{width:"130px",height:"35px",marginRight:"10px"}})}):Object(n.jsx)("div",{className:"mb-2",style:{width:"130px",height:"35px",margin:"0 auto"},children:"No Discord account"})}),Object(n.jsx)("button",{className:"btn btn-info mt-2",onClick:function(){f(e.wallet),h("fixed-footer")},children:"show hotspots"})]})]})},t)})),"    "]}),Object(n.jsxs)("div",{className:"col-sm",children:[t.slice(0,15).filter((function(e,t){return t%3==1})).map((function(e,t){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"card text-white bg-primary mb-3",style:{maxWidth:"20rem"},children:[Object(n.jsx)("div",{className:"card-header",children:e.wallet.slice(0,25)+"..."}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)(g,{wallet:e.wallet}),Object(n.jsx)("div",{className:"pt-2",children:e.telegram?Object(n.jsx)("a",{className:"link",target:"_blank",href:"https://t.me/".concat(e.telegram),children:Object(n.jsx)("img",{src:"https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png",style:{width:"150px",height:"50px"}})}):Object(n.jsx)("div",{style:{width:"150px",height:"50px",margin:"0 auto"},children:"No Telegram account"})}),Object(n.jsx)("div",{children:e.discord?Object(n.jsx)("a",{className:"link",target:"_blank",href:"https://discord.gg/users/".concat(e.discord),children:Object(n.jsx)("img",{className:"mb-2",src:"https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",style:{width:"130px",height:"35px",marginRight:"10px"}})}):Object(n.jsx)("div",{className:"mb-2",style:{width:"130px",height:"35px",margin:"0 auto"},children:"No Discord account"})}),Object(n.jsx)("button",{className:"btn btn-info mt-2",onClick:function(){f(e.wallet),h("fixed-footer")},children:"show hotspots"})]})]})},t)})),"    "]}),Object(n.jsx)("div",{className:"col-sm",children:t.slice(0,15).filter((function(e,t){return t%3==2})).map((function(e,t){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"card text-white bg-primary mb-3",style:{maxWidth:"20rem"},children:[Object(n.jsx)("div",{className:"card-header",children:e.wallet.slice(0,25)+"..."}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)(g,{wallet:e.wallet}),Object(n.jsx)("div",{className:"pt-2",children:e.telegram?Object(n.jsx)("a",{className:"link",target:"_blank",href:"https://t.me/".concat(e.telegram),children:Object(n.jsx)("img",{src:"https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png",style:{width:"150px",height:"50px"}})}):Object(n.jsx)("div",{style:{width:"150px",height:"50px",margin:"0 auto"},children:"No Telegram account"})}),Object(n.jsx)("div",{children:e.discord?Object(n.jsx)("a",{className:"link",target:"_blank",href:"https://discord.gg/users/".concat(e.discord),children:Object(n.jsx)("img",{className:"mb-2",src:"https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",style:{width:"130px",height:"35px",marginRight:"10px"}})}):Object(n.jsx)("div",{className:"mb-2",style:{width:"130px",height:"35px",margin:"0 auto"},children:"No Discord account"})}),Object(n.jsx)("button",{className:"btn btn-info mt-2",onClick:function(){f(e.wallet),h("fixed-footer")},children:"show hotspots"})]})]})},t)}))})]})]})}),Object(n.jsxs)("div",{className:j,children:[Object(n.jsxs)("div",{className:"fixcont container",children:[Object(n.jsx)("a",{id:"close",role:"button",className:"close",onClick:function(){return h("fixed-footer closed")},children:"x"}),Object(n.jsxs)("table",{className:"table table-hover mt-5 rounded",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:"table-secondary",children:[Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Status"}),Object(n.jsx)("th",{scope:"col",children:"Address"})]})}),Object(n.jsx)("tbody",{children:i.map((function(e,t){return Object(n.jsxs)("tr",{className:"table-primary",children:[Object(n.jsx)("th",{scope:"row",children:e.name}),Object(n.jsx)("td",{children:e.status.online}),Object(n.jsxs)("td",{children:[e.geocode.long_street,", ",e.geocode.short_country]})]},t)}))})]})]}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"cls btn btn-primary mb-3",onClick:function(){return h("fixed-footer closed")},children:"Close"})]})]})},h=c("g4pe"),b=c.n(h);function u(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function p(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?u(Object(c),!0).forEach((function(t){Object(s.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):u(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}t.default=function(){var e=Object(r.useState)(null),t=e[0],c=e[1],s=Object(r.useState)(null),l=(s[0],s[1]);return Object(r.useEffect)((function(){a.b.auth().onAuthStateChanged((function(e){c(e||null)}))})),Object(r.useEffect)((function(){a.b.firestore().collection("channels").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(p(p({},e.data()),{},{id:e.id}))})),l(t)}))}),[]),t?Object(n.jsx)(i.a,{children:Object(n.jsxs)("div",{className:"container-fluid text-center",children:[Object(n.jsx)("h3",{children:"Wallets information"}),Object(n.jsx)(j,{})]})}):Object(n.jsxs)("div",{children:[Object(n.jsxs)(b.a,{children:[Object(n.jsx)("link",{rel:"stylesheet",href:"https://bootswatch.com/4/darkly/bootstrap.min.css"}),Object(n.jsx)("title",{children:"Helium app"})]}),Object(n.jsx)("div",{className:"App container pt-5",children:Object(n.jsx)(o.a,{})})]})}},"mR+L":function(e,t,c){"use strict";var n=c("rePB"),s=c("nKUr"),r=c("o0o1"),a=c.n(r),i=c("HaE+"),o=c("q1tI"),l=c("g4pe"),d=c.n(l),j=c("YFqc"),h=c.n(j),b=c("K8OV");function u(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function p(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?u(Object(c),!0).forEach((function(t){Object(n.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):u(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}t.a=function(){var e=Object(o.useState)(!1),t=(e[0],e[1]),c=Object(o.useState)({wallet:"",password:""}),n=c[0],r=c[1],l=function(){var e=Object(i.a)(a.a.mark((function e(c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,Object(b.b)(n);case 3:t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{children:[Object(s.jsxs)(d.a,{children:[Object(s.jsx)("link",{rel:"stylesheet",href:"https://bootswatch.com/4/darkly/bootstrap.min.css"}),Object(s.jsx)("title",{children:"Helium Hosts Login"})]}),Object(s.jsx)("img",{width:"100px",src:"https://www.helium.bg/wp-content/uploads/ct-logos/logo_c87d22da853d6ccfcb2a89b1548ec250_1x.png",alt:"Logo"}),Object(s.jsx)("h3",{className:"pt-3",children:"Helium Hosts Login"}),Object(s.jsxs)("p",{className:"pt-3",children:["Private and secure communication between Helium hotspot hosts. You don\u2019t need to provide any personal information to add your hotspots and begin chatting with other hosts in your area.",Object(s.jsx)("br",{}),"If you have already created an account, please login below. Otherwise, you can sign up by creating an account below.",Object(s.jsx)("br",{}),"Keep in mind, all communication between hosts is done via Telegram and Discord."]}),Object(s.jsxs)("form",{onSubmit:l,className:"form-group col-sm-4 pb-5 pt-1",style:{margin:"0 auto"},children:[Object(s.jsx)("label",{htmlFor:"wallet",children:"Wallet"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Wallet ID",id:"wallet",onChange:function(e){return r(p(p({},n),{},{wallet:e.target.value}))}}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",onChange:function(e){return r(p(p({},n),{},{password:e.target.value}))}}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]}),Object(s.jsxs)("div",{style:{paddingBottom:"50px"},children:[Object(s.jsx)("button",{className:"btn btn-success mb-3",onClick:b.a,children:"Sign in with Gmail"}),Object(s.jsx)("p",{children:Object(s.jsx)("b",{children:"OR"})}),Object(s.jsx)(h.a,{className:"nav-link",href:"/register",children:Object(s.jsx)("a",{children:Object(s.jsx)("b",{children:"Create new account"})})})]})]})}},rePB:function(e,t,c){"use strict";function n(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}c.d(t,"a",(function(){return n}))}}]);