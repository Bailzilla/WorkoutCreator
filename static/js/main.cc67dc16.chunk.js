(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),p=n(4),i=n.n(p),a=(n(10),n(3)),o=(n(11),[{type:"push",name:"Dip",src:"./pics/dips.png"},{type:"push",name:"Push-up",src:"./pics/pushup.jpg"},{type:"push",name:"Wide Grip Push-up",src:"./pics/widegrippushups.jpg"},{type:"push",name:"Cobra Push-up",src:"./pics/cobra.jpg"},{type:"push",name:"Overhead Press",src:"./pics/overheadpress.jpg"},{type:"pull",name:"Pullup",src:"./pics/pullup.jpg"},{type:"pull",name:"Inverted Row",src:"./pics/invertedrow.png"},{type:"pull",name:"Bent Over Row",src:"./pics/bentrow.jpg"},{type:"pull",name:"Chin-up",src:"./pics/chinups.png"},{type:"pull",name:"Curl",src:"./pics/curl.jpg"},{type:"anterior",name:"Squat",src:"./pics/squat.jpg"},{type:"anterior",name:"Bulgarian Squat",src:"./pics/bulgarian.jpg"},{type:"anterior",name:"Side Lunge",src:"./pics/sidelunge.png"},{type:"anterior",name:"Step-up",src:"./pics/stepup.jpg"},{type:"anterior",name:"Pistol",src:"./pics/pistol.jpg"},{type:"posterior",name:"Deadlift",src:"./pics/deadlift.png"},{type:"posterior",name:"Hip Bridge",src:"./pics/hiphinge.jpg"},{type:"posterior",name:"RDL",src:"./pics/rdl.jpg"},{type:"posterior",name:"Hyper Extension",src:"./pics/hyper.jpg"},{type:"posterior",name:"Superman",src:"./pics/superman.jpg"}]),u=(n(12),function(e){var t=e.pic,n=e.name;return Object(r.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma1 dib bw1 shadow-5",children:[Object(r.jsx)("img",{alt:n,src:t}),Object(r.jsx)("h3",{children:n})]})});var l=function(){var e=Math.floor(5*Math.random()),t=Object(s.useState)("https://images.unsplash.com/photo-1579364046732-c21c2177730d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"),n=Object(a.a)(t,2),c=n[0],p=n[1],i=Object(s.useState)("Welcome"),l=Object(a.a)(i,2),h=l[0],g=l[1];function j(t){var n=o.filter((function(e){return e.type===t}));p(n[e].src),g(n[e].name)}return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h2",{id:"quote",children:" "}),Object(r.jsxs)("div",{className:"button-box",children:[Object(r.jsx)("button",{className:"button grow bg-light-green",value:"push",onClick:function(e){return j(e.target.value)},children:"Select a push exercise"}),Object(r.jsx)("button",{className:"button grow bg-light-green",value:"pull",onClick:function(e){return j(e.target.value)},children:"Select a pull exercise"}),Object(r.jsx)("button",{className:"button grow bg-light-green",value:"anterior",onClick:function(e){return j(e.target.value)},children:"Select an anterior lower body exercise"}),Object(r.jsx)("button",{className:"button grow bg-light-green",value:"posterior",onClick:function(e){return j(e.target.value)},children:"Select a posterior lower body exercise"})]}),Object(r.jsx)("h6",{children:"please choose no more than 1 of the same exercise in a row"}),Object(r.jsx)(u,{pic:c,name:h})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,p=t.getTTFB;n(e),r(e),s(e),c(e),p(e)}))};n(13);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root")),fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(e){return document.getElementById("quote").innerHTML='"'+e[Math.floor(Math.random()*e.length)].text+'" - '+e[Math.floor(Math.random()*e.length)].author})),h()}],[[14,1,2]]]);
//# sourceMappingURL=main.cc67dc16.chunk.js.map