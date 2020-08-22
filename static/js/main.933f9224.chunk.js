(this["webpackJsonpmarvel-page"]=this["webpackJsonpmarvel-page"]||[]).push([[0],{24:function(e,n,t){e.exports=t(38)},29:function(e,n,t){},36:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(19),c=t.n(i),l=(t(29),t(9)),o=t(8),s=t(3),u=t(4);function m(){var e=Object(s.a)(["\n  width: 300px;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 0 1px 0 #3e2020;\n  border-radius: 10px;\n\n  h1 {\n    text-align: center;\n  }\n\n  &:hover {\n    transform: scale(1.02);\n    transition: transform 250ms ease-in;\n  }\n  transition: transform 200ms ease-out;\n"]);return m=function(){return e},e}function d(){var e=Object(s.a)(["\n  display: block;\n\n  img {\n    object-fit: cover;\n    width: 300px;\n    height: 300px;\n    margin: auto;\n    display: block;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n"]);return d=function(){return e},e}var f=u.b.div(d()),p=u.b.div(m()),v=t(23);function b(){var e=Object(s.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return b=function(){return e},e}function h(){var e=Object(s.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return h=function(){return e},e}var E=u.b.div(h()),g=u.b.div(b()),x=function(){return r.a.createElement(E,null,r.a.createElement(g,null))},w=function(e){return function(n){var t=n.isLoading,a=Object(v.a)(n,["isLoading"]);return t?r.a.createElement(x,null):r.a.createElement(e,a)}},y=w((function(e){var n=e.data,t=e.index,a=(e.isLoading,n.name),i=n.thumbnail,c=i.extension,l=i.path,s=n.comics.available;return r.a.createElement(p,null,r.a.createElement(o.b,{to:"/characters/".concat(t)},r.a.createElement(f,null,r.a.createElement("img",{src:"".concat(l,".").concat(c),alt:"".concat(a)}))),r.a.createElement(o.b,{to:"/characters/".concat(t)},r.a.createElement("h1",null,a)),r.a.createElement("p",null,"Comics Available Number: ".concat(s)))}));function j(){var e=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 2rem;\n"]);return j=function(){return e},e}var k=u.b.div(j()),O=w((function(e){var n=e.data,t=e.isLoading;return r.a.createElement(k,null,n.map((function(e,n){return r.a.createElement(y,{key:e.id,isLoading:t,data:e,index:n})})))}));function N(e,n,t){var r=Object(a.useState)(null),i=Object(l.a)(r,2),c=i[0],o=i[1],s=Object(a.useState)(!0),u=Object(l.a)(s,2),m=u[0],d=u[1];return Object(a.useEffect)((function(){fetch(e).then((function(e){if(!e.ok)throw new Error("Failed to fetch");return e.json()})).then((function(e){o("preview"===n?e.data.results:e.data.results[n]),d(!1)}))}),t),[c,m]}var L=w((function(){var e=N("https://mock-data-api.firebaseio.com/marvel-characters.json","preview",[]),n=Object(l.a)(e,2),t=n[0],a=n[1];return r.a.createElement(O,{data:t,isLoading:a})})),A=t(1);function S(e){var n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex justify-content-center mt-4"},r.a.createElement(o.b,{className:" btn btn-outline-primary mr-3 btn-lg",to:"/"},"Home"),r.a.createElement(o.b,{className:" btn btn-outline-info btn-lg ",to:"/characters"},"Go to Chars List")),n)}function C(){var e=Object(s.a)(['\n  display: flex;\n  padding: 30vh 0;\n  margin-top: 2vh;\n  justify-content: center;\n  align-self: center;\n  font-family: "Marvel", sans-serif;\n  background: url("https://i.gifer.com/XsZS.gif") no-repeat fixed center;\n  background-size: cover;\n  border-radius: 10px;\n\n  h1 {\n    place-self: center;\n    font-size: 3rem;\n    color: peru;\n\n    &:hover {\n      transform: scale(1.1);\n      transition: transform 0.2s ease-in-out;\n    }\n    transition: transform 0.2s ease-in-out 0.2s;\n  }\n']);return C=function(){return e},e}var z=u.b.div(C());function M(){return r.a.createElement(z,null,r.a.createElement("h1",null,"Check your favorite Marvel Characters"))}t(36);function B(){var e=Object(s.a)(["\n  body {\n    font-family: 'Open Sans Condensed', sans-serif;\n    padding: 20px 60px;\n    background-color: #d1ccc0;\n    height: 100vh;\n    // background: url('https://i.gifer.com/XsZS.gif') no-repeat fixed center;\n    // background-size: cover;\n\n    @media screen and (max-width: 800px)  {\n      padding: 10px;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: black;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: \"Marvel\", sans-serif;\n  }\n"]);return B=function(){return e},e}var F=Object(u.a)(B());t(37);function J(){var e=Object(s.a)(["\n  margin: 2rem 0;\n  display: flex;\n\n  justify-content: space-between;\n\n  div {\n    display: flex;\n    flex-direction: column;\n\n    h1,\n    h3 {\n      margin-right: auto;\n    }\n  }\n  img {\n    width: 30vw;\n    max-width: 300px;\n    margin: auto;\n  }\n"]);return J=function(){return e},e}function W(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n\n  p {\n    text-indent: 2rem;\n  }\n"]);return W=function(){return e},e}var X=u.b.div(W()),Z=u.b.div(J()),G=function(e){var n=e.item.name;return r.a.createElement("div",null,r.a.createElement("p",null,n))},H=w((function(e){var n=e.data,t=(e.isLoading,n.id),a=n.name,i=n.thumbnail,c=i.extension,l=i.path,o=n.comics,s=o.available,u=o.items,m=n.events,d=m.available,f=m.items,p=n.series,v=p.available,b=p.items,h=n.stories,E=h.available,g=h.items;return r.a.createElement("div",{className:"detail-page-container"},r.a.createElement(Z,null,r.a.createElement("div",null,r.a.createElement("h1",null,a),r.a.createElement("h3",null,t)),r.a.createElement("img",{src:"".concat(l,".").concat(c),alt:"".concat(a)})),r.a.createElement("div",{className:"detail-page-info-body"},r.a.createElement("div",{className:"detail-page-comics"},r.a.createElement("h3",null,"Available comics amount: ".concat(s)),r.a.createElement(X,null,0===s?r.a.createElement(G,null):u.map((function(e,n){return r.a.createElement(G,{key:n,item:e})})))),r.a.createElement("div",{className:"detail-page-events"},r.a.createElement("h3",null,"Available events amount: ".concat(d)),r.a.createElement(X,null,0===d?r.a.createElement(G,null):f.map((function(e,n){return r.a.createElement(G,{key:n,item:e})})))),r.a.createElement("div",{className:"detail-page-events"},r.a.createElement("h3",null,"Available series amount: ".concat(v)),r.a.createElement(X,null,0===v?r.a.createElement(G,null):b.map((function(e,n){return r.a.createElement(G,{key:n,item:e})})))),r.a.createElement("div",{className:"detail-page-stories"},r.a.createElement("h3",null,"Available stories amount: ".concat(E)),r.a.createElement(X,null,0===E?r.a.createElement(G,null):g.map((function(e,n){return r.a.createElement(G,{key:n,item:e})}))))))})),I=function(e){var n=N("https://mock-data-api.firebaseio.com/marvel-characters.json",e.match.params.id,[]),t=Object(l.a)(n,2),a=t[0],i=t[1];return r.a.createElement(H,{data:a,isLoading:i})};var $=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F,null),r.a.createElement(A.c,null,r.a.createElement(A.a,{path:"/",exact:!0},r.a.createElement(S,null,r.a.createElement(M,null))),r.a.createElement(A.a,{path:"/characters/:id",exact:!0,render:function(e){return r.a.createElement(S,null,r.a.createElement(I,e))}}),r.a.createElement(A.a,{path:"/characters"},r.a.createElement(S,null,r.a.createElement(L,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.933f9224.chunk.js.map