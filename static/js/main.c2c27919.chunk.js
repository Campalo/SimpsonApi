(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(2),c=n.n(i),r=(n(14),n(3)),l=n(4),s=n(6),u=n(5),m=n(7),h=(n(15),function(e){var t=e.selectChar;return o.a.createElement("div",null,o.a.createElement("button",{onClick:t}," Cliiiik "))}),p=function(e){var t=e.mySimpson;return o.a.createElement("div",null,o.a.createElement("img",{src:t.image,alt:"Your favorite simpson character"}),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("i",null,' "',t.quote,'" ')),o.a.createElement("li",null," By ",t.character," ")))},f={quote:"Shoplifting is a victimless crime, like punching someone in the dark.",character:"Nelson Muntz",image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"},d=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={mySimpson:f},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getSimpson",value:function(){var e=this;fetch("https://thesimpsonsquoteapi.glitch.me/quotes").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({mySimpson:t[0]})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Do you know all the famous quotes from the Simpson?"),o.a.createElement("h2",null,"Click to discover if you're a true fan!"),o.a.createElement(h,{selectChar:function(){return e.getSimpson()}}),o.a.createElement(p,{mySimpson:this.state.mySimpson}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.c2c27919.chunk.js.map