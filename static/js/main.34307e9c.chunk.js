(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),p=n.n(s),c=n(4),i=n.n(c),a=(n(10),n(3)),o=(n(11),[{type:"push",name:"dip",src:"./pics/dips.png"},{type:"push",name:"push-up",src:"./pics/pushup.jpg"},{type:"push",name:"wide grip push-up",src:"./pics/widegrippushups.jpg"},{type:"push",name:"cobra push-up",src:"./pics/cobra.jpg"},{type:"push",name:"overhead press",src:"./pics/overheadpress.jpg"},{type:"pull",name:"pullup",src:"./pics/pullup.jpg"},{type:"pull",name:"inverted row",src:"./pics/invertedrow.png"},{type:"pull",name:"bent over row",src:"./pics/bentrow.jpg"},{type:"pull",name:"chin-up",src:"./pics/chinups.png"},{type:"pull",name:"curl",src:"./pics/curl.jpg"},{type:"anterior",name:"squat",src:"./pics/squat.jpg"},{type:"anterior",name:"bulgarian squat",src:"./pics/bulgarian.jpg"},{type:"anterior",name:"side lunge",src:"./pics/sidelunge.png"},{type:"anterior",name:"step-up",src:"./pics/stepup.jpg"},{type:"anterior",name:"pistol",src:"./pics/pistol.jpg"},{type:"posterior",name:"deadlift",src:"./pics/deadlift.png"},{type:"posterior",name:"hip hinge",src:"./pics/hiphinge.jpg"},{type:"posterior",name:"RDL",src:"./pics/rdl.jpg"},{type:"posterior",name:"hyper",src:"./pics/hyper.jpg"},{type:"posterior",name:"Superman",src:"./pics/superman.jpg"}]),u=(n(12),function(e){var t=e.pic,n=e.name;return Object(r.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"example of chosen lift",src:t}),Object(r.jsx)("h3",{children:n})]})});var l=function(){var e=Math.floor(5*Math.random()),t=9,n=Object(s.useState)("https://images.unsplash.com/photo-1579364046732-c21c2177730d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"),p=Object(a.a)(n,2),c=p[0],i=p[1],l=Object(s.useState)("Welcome"),h=Object(a.a)(l,2),g=h[0],m=h[1],j=[{type:"push",name:"test",src:"test"}];function b(n){var r=o.filter((function(e){return e.type===n}));i(r[e].src),m(r[e].name),j.push({type:n,name:r[e].name,src:r[e].src}),console.log(j[1].type),t++,console.log(t)}return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h2",{id:"quote",children:" "}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"button grow bg-light-green",value:"push",onClick:function(e){return b(e.target.value)},children:"Select a push exercise"}),Object(r.jsx)("button",{className:"button grow bg-light-green",value:"pull",onClick:function(e){return b(e.target.value)},children:"Select a pull exercise"}),Object(r.jsx)("button",{className:"button grow bg-light-green",value:"anterior",onClick:function(e){return b(e.target.value)},children:"Select an anterior lower body exercise"}),Object(r.jsx)("button",{className:"button grow bg-light-green",value:"posterior",onClick:function(e){return b(e.target.value)},children:"Select a posterior lower body exercise"}),Object(r.jsx)("h6",{children:"please choose no more than 1 of the same exercise in a row"})]}),Object(r.jsx)(u,{pic:c,name:g})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,p=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),p(e),c(e)}))};n(13);i.a.render(Object(r.jsx)(p.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root")),fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(e){return document.getElementById("quote").innerHTML='"'+e[Math.floor(Math.random()*e.length)].text+'" - '+e[Math.floor(Math.random()*e.length)].author})),h()}],[[14,1,2]]]);
//# sourceMappingURL=main.34307e9c.chunk.js.map