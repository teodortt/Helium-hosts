_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"20a2":function(e,t,l){e.exports=l("nOHt")},BWbJ:function(e,t,l){"use strict";l.r(t);var n=l("nKUr"),c=l("q1tI"),a=l("20a2"),r=l("mTzH"),s=l("5Yp1");l("g4pe"),l("YFqc"),l("mR+L");t.default=function(){var e=Object(c.useState)(null),t=e[0],l=e[1],o=Object(c.useState)(""),i=o[0],u=o[1],d=Object(c.useState)(!1),m=(d[0],d[1],Object(c.useState)(!1)),b=m[0],j=m[1],h=Object(c.useState)({telegram:"",discord:""}),f=h[0],O=h[1],p=Object(a.useRouter)();r.b.auth().onAuthStateChanged((function(e){e?(l(e),function(e){r.a.collection("channels").doc("general").collection("messages").where("user","==",e.uid).get().then((function(e){e.empty?(console.log("not exists"),j(!0)):e.forEach((function(e){console.log("exists"),j(!1)}))}))}(e)):(l(null),p.push("/"))}));function g(e){u(e),function(e){r.a.collection("channels").doc("general").collection("messages").where("wallet","==",e).get().then((function(e){e.empty?(console.log("false"),document.getElementById("wallet-validation").innerText="",document.getElementById("submit").disabled=!1):e.forEach((function(e){document.getElementById("submit").disabled=!0,document.getElementById("wallet-validation").style.color="#ff0000",document.getElementById("wallet-validation").innerText="This wallet ID already exists in our database!"}))}))}(e)}return b?Object(n.jsx)(s.a,{children:Object(n.jsxs)("div",{className:"col-md-6 mx-auto text-center pt100",children:[Object(n.jsx)("h3",{children:"Submit your Helium account info"}),Object(n.jsx)("p",{children:"Please add at least one social account."}),t.uid&&Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var l=e.target.elements[0].value,n=e.target.elements[1].value,c=e.target.elements[2].value;r.a.collection("channels").doc("general").collection("messages").add({wallet:l,telegram:n,discord:c,user:t.uid,date:new Date}),e.target.reset(),p.push("/")},className:"mt-5 p-2",children:[Object(n.jsx)("input",{onChange:function(e){return g(e.target.value)},value:i,className:"form-control mb-3",id:"token",placeholder:"Wallet ID"}),Object(n.jsx)("b",{id:"wallet-validation"}),Object(n.jsx)("input",{onChange:function(e){return O({telegram:e.target.value,discord:f.discord})},value:f.telegram,className:"form-control mb-3",id:"telegram",placeholder:"Telegram"}),Object(n.jsx)("input",{onChange:function(e){return O({telegram:f.telegram,discord:e.target.value})},value:f.discord,className:"form-control mb-3",id:"discord",placeholder:"Discord"}),Object(n.jsx)("p",{children:Object(n.jsx)("a",{className:"link",target:"_blank",rel:"noreferrer",href:"https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-",children:"Where to find my id"})}),Object(n.jsx)("button",{id:"submit",className:"btn btn-success",type:"submit",children:"Submit"})]})]})}):Object(n.jsx)("div",{children:Object(n.jsx)(s.a,{children:Object(n.jsx)("h3",{className:"text-center",style:{paddingTop:"150px"},children:"Your helium profile is already sumbitted!"})})})}},Dsvi:function(e,t,l){"use strict";l.r(t);var n=l("nKUr"),c=l("rePB"),a=l("q1tI"),r=l("K8OV"),s=(l("YFqc"),l("g4pe")),o=l.n(s),i=l("20a2"),u=l("mTzH"),d=l("BWbJ"),m=l("RNiq");function b(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function j(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?b(Object(l),!0).forEach((function(t){Object(c.a)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}t.default=function(){Object(i.useRouter)();var e=Object(a.useState)(),t=e[0],l=e[1],c=Object(a.useState)(!1),s=c[0],b=c[1],h=Object(a.useState)({wallet:"",password:"",telegram:"",discord:""}),f=h[0],O=h[1];u.b.auth().onAuthStateChanged((function(e){e?(l(e),function(e){u.a.collection("channels").doc("general").collection("messages").where("email","==",e.email).get().then((function(t){t.empty?(console.log("not exists"),console.log(e.email)):t.forEach((function(e){console.log("exists")}))}))}(e)):l(null)}));return Object(n.jsxs)("div",{children:[s&&t&&Object(n.jsx)(m.default,{}),s&&!t&&Object(n.jsx)(d.default,{}),!s&&Object(n.jsxs)("div",{className:"col-md-6 mx-auto text-center mt-5",children:[Object(n.jsx)(o.a,{children:Object(n.jsx)("link",{rel:"stylesheet",href:"https://bootswatch.com/4/darkly/bootstrap.min.css"})}),Object(n.jsx)("h1",{children:"Register"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.a.collection("channels").doc("general").collection("messages").where("wallet","==",f.wallet).get().then((function(t){t.empty?(document.getElementById("wallet-validation").innerText="",e.preventDefault(),Object(r.c)(f),b(!0)):t.forEach((function(e){document.getElementById("wallet-validation").innerText="This wallet ID already exists in our database!"}))}))},className:"form-group col-md-6 mx-auto text-center",children:[Object(n.jsx)("label",{htmlFor:"wallet",children:"Email address: !!!will be wallet"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Wallet ID",id:"wallet",onChange:function(e){return O(j(j({},f),{},{wallet:e.target.value}))}}),Object(n.jsx)("small",{class:"form-text text-muted",children:"This is public, available at explorer.helium.com"}),Object(n.jsx)("br",{}),Object(n.jsx)("b",{id:"wallet-validation",style:{color:"#ff0000"}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(n.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",onChange:function(e){return O(j(j({},f),{},{password:e.target.value}))}}),Object(n.jsx)("small",{class:"form-text text-muted",children:"Note: Do NOT use your official Helium password here!"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"telegram",children:"Telegram:"}),Object(n.jsx)("br",{}),Object(n.jsx)("small",{children:"t.me/"}),Object(n.jsx)("input",{type:"text",placeholder:"Telegram",className:"rounded",onChange:function(e){return O(j(j({},f),{},{telegram:e.target.value}))}}),Object(n.jsx)("small",{class:"form-text text-muted",children:"Input telegram user to be able to chat!"}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"dsc",children:[Object(n.jsx)("label",{htmlFor:"discord",children:"Discord:"}),Object(n.jsx)("br",{}),Object(n.jsx)("small",{style:{marginLeft:"-70px"},children:"discord.com/users/"}),Object(n.jsx)("input",{type:"text",placeholder:"Discord",className:"rounded",onChange:function(e){return O(j(j({},f),{},{discord:e.target.value}))}}),Object(n.jsx)("br",{})]}),Object(n.jsx)("button",{type:"submit",id:"submit",className:"btn btn-primary mt-3",children:"Submit"})]})]})]})}},"c05+":function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return l("Dsvi")}])}},[["c05+",0,2,3,5,1,4,6]]]);