_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"20a2":function(e,t,l){e.exports=l("nOHt")},BWbJ:function(e,t,l){"use strict";l.r(t);var a=l("nKUr"),n=l("q1tI"),c=l("20a2"),r=l("mTzH"),s=l("5Yp1");t.default=function(){var e=Object(n.useState)(null),t=e[0],l=e[1],o=Object(n.useState)(""),i=o[0],d=o[1],u=Object(n.useState)(!1),m=u[0],b=u[1],j=Object(n.useState)({telegram:"",discord:""}),h=j[0],g=j[1],f=Object(c.useRouter)();r.b.auth().onAuthStateChanged((function(e){e?(l(e),function(e){r.a.collection("channels").doc("general").collection("messages").where("user","==",e.uid).get().then((function(e){e.empty?b(!0):e.forEach((function(e){b(!1)}))}))}(e)):(l(null),f.push("/"))}));function p(e){d(e),function(e){r.a.collection("channels").doc("general").collection("messages").where("wallet","==",e).get().then((function(e){e.empty?(console.log("false"),document.getElementById("wallet-validation").innerText="",document.getElementById("submit").disabled=!1):e.forEach((function(e){document.getElementById("submit").disabled=!0,document.getElementById("wallet-validation").style.color="#ff0000",document.getElementById("wallet-validation").innerText="This wallet ID already exists in our database!"}))}))}(e)}return m?Object(a.jsx)(s.a,{children:Object(a.jsxs)("div",{className:"col-md-6 mx-auto text-center pt100",children:[Object(a.jsx)("h3",{children:"Submit your Helium account info"}),Object(a.jsx)("p",{children:"Please add at least one social account."}),t.uid&&Object(a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),e.target.elements[1].value.length<1&&e.target.elements[2].value.length<1)alert("Please add at least one social account!");else{var l=e.target.elements[0].value,a=e.target.elements[1].value,n=e.target.elements[2].value;r.a.collection("channels").doc("general").collection("messages").add({wallet:l,telegram:a,discord:n,user:t.uid,date:new Date}),e.target.reset(),f.push("/")}},className:"mt-5 p-2",children:[Object(a.jsx)("input",{onChange:function(e){return p(e.target.value)},value:i,className:"form-control mb-3",id:"token",placeholder:"Wallet ID"}),Object(a.jsx)("b",{id:"wallet-validation"}),Object(a.jsx)("input",{onChange:function(e){return g({telegram:e.target.value,discord:h.discord})},value:h.telegram,className:"form-control mb-3",id:"telegram",placeholder:"Telegram"}),Object(a.jsx)("input",{onChange:function(e){return g({telegram:h.telegram,discord:e.target.value})},value:h.discord,className:"form-control mb-3",id:"discord",placeholder:"Discord"}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{className:"link",target:"_blank",rel:"noreferrer",href:"https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-",children:"Where to find my id"})}),Object(a.jsx)("button",{id:"submit",className:"btn btn-success",type:"submit",children:"Submit"})]})]})}):Object(a.jsx)("div",{children:Object(a.jsx)(s.a,{children:Object(a.jsx)("h3",{className:"text-center",style:{paddingTop:"150px"},children:"Your helium profile is already sumbitted!"})})})}},Dsvi:function(e,t,l){"use strict";l.r(t);var a=l("nKUr"),n=l("rePB"),c=l("q1tI"),r=l("K8OV"),s=l("g4pe"),o=l.n(s),i=l("20a2"),d=l("mTzH"),u=l("BWbJ"),m=l("RNiq");function b(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function j(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?b(Object(l),!0).forEach((function(t){Object(n.a)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}t.default=function(){Object(i.useRouter)();var e=Object(c.useState)(),t=e[0],l=e[1],n=Object(c.useState)(!1),s=n[0],b=n[1],h=Object(c.useState)({wallet:"",password:"",telegram:"",discord:""}),g=h[0],f=h[1];d.b.auth().onAuthStateChanged((function(e){l(e||null)}));return Object(a.jsxs)("div",{children:[s&&t&&Object(a.jsx)(m.default,{}),s&&!t&&Object(a.jsx)(u.default,{}),!s&&Object(a.jsxs)("div",{className:"col-md-6 mx-auto text-center mt-5",children:[Object(a.jsx)(o.a,{children:Object(a.jsx)("link",{rel:"stylesheet",href:"https://bootswatch.com/4/darkly/bootstrap.min.css"})}),Object(a.jsx)("h1",{children:"Register"}),Object(a.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),e.target.elements[1].value.length<6&&(document.getElementById("password-validation").innerText="Your password must to be at least 6 characters!"),e.target.elements[2].value.length<1&&e.target.elements[3].value.length<1)?document.getElementById("socials-validation").innerText="You have to add at least one social account!":(document.getElementById("password-validation").innerText="",d.a.collection("channels").doc("general").collection("messages").where("wallet","==",g.wallet).get().then((function(t){t.empty?(document.getElementById("wallet-validation").innerText="",e.preventDefault(),Object(r.c)(g),b(!0)):t.forEach((function(e){document.getElementById("wallet-validation").innerText="This wallet ID already exists in our database!"}))})))},className:"form-group col-md-6 mx-auto text-center",children:[Object(a.jsx)("label",{htmlFor:"wallet",children:"Wallet"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Wallet ID",id:"wallet",onChange:function(e){return f(j(j({},g),{},{wallet:e.target.value}))}}),Object(a.jsx)("small",{className:"form-text text-muted",children:"This is public, available at explorer.helium.com"}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{id:"wallet-validation",style:{color:"#ff0000"}}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(a.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",onChange:function(e){return f(j(j({},g),{},{password:e.target.value}))}}),Object(a.jsx)("small",{className:"form-text text-muted",children:"Note: Do NOT use your official Helium password here!"}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{id:"password-validation",style:{color:"#ff0000"}}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"telegram",children:"Telegram:"}),Object(a.jsx)("br",{}),Object(a.jsx)("small",{children:"t.me/"}),Object(a.jsx)("input",{type:"text",placeholder:"Telegram",className:"rounded",onChange:function(e){return f(j(j({},g),{},{telegram:e.target.value}))}}),Object(a.jsx)("small",{className:"form-text text-muted",children:"Input telegram user to be able to chat!"}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"dsc",children:[Object(a.jsx)("label",{htmlFor:"discord",children:"Discord:"}),Object(a.jsx)("br",{}),Object(a.jsx)("small",{style:{marginLeft:"-70px"},children:"discord.com/users/"}),Object(a.jsx)("input",{type:"text",placeholder:"Discord",className:"rounded",onChange:function(e){return f(j(j({},g),{},{discord:e.target.value}))}}),Object(a.jsx)("br",{}),Object(a.jsx)("b",{id:"socials-validation",style:{color:"#ff0000"}})]}),Object(a.jsx)("button",{type:"submit",id:"submit",className:"btn btn-primary mt-3",children:"Submit"})]})]})]})}},"c05+":function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return l("Dsvi")}])}},[["c05+",0,2,3,5,1,4,6]]]);