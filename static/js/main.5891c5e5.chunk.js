(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(5),r=n.n(l),c=n(6),i=n(3),m=function(e){var t=e.content,n=e.contentChange,a=e.handleSubmit;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:a},o.a.createElement("input",{type:"text",name:"content",id:"content",value:t,onChange:n}),o.a.createElement("button",{type:"submit",id:"add-todo-button"},"Add")))},d=function(e){var t=e.todo,n=e.deleteTodo,a=e.toggleComplete;return o.a.createElement("li",null,o.a.createElement("button",{onClick:function(){return a(t.id)}},o.a.createElement("span",{role:"img","aria-label":"mark-complete",id:"mark-complete"},"\u2705")),t.completed?o.a.createElement("p",{className:"content completed"},o.a.createElement("strike",null,t.content)):o.a.createElement("p",{className:"content"},t.content),o.a.createElement("button",{onClick:function(){return n(t.id)}},o.a.createElement("span",{role:"img","aria-label":"mark-delete",id:"mark-delete"},"\u274c")))},u=function(e){var t=e.todos,n=e.deleteTodo,a=e.toggleComplete;return o.a.createElement("div",null,o.a.createElement("ul",null,t.map((function(e){return o.a.createElement(d,{todo:e,deleteTodo:n,toggleComplete:a,key:e.id})}))))};n(12);var s=function(){var e=Object(a.useState)(localStorage.todos?JSON.parse(localStorage.todos):[]),t=Object(i.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(""),d=Object(i.a)(r,2),s=d[0],p=d[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n)),console.log(JSON.parse(localStorage.todos))}),[n]),o.a.createElement("div",{className:"container"},o.a.createElement("header",null,o.a.createElement("span",{className:"heading"},"This is what I'm gonna do today")),o.a.createElement("main",null,o.a.createElement(m,{content:s,contentChange:function(e){p(e.target.value)},handleSubmit:function(e){e.preventDefault(),""!==s&&l([].concat(Object(c.a)(n),[{content:s,id:Math.floor(1e3*Math.random()),completed:!1}])),p("")}}),o.a.createElement(u,{todos:n,deleteTodo:function(e){l(n.filter((function(t){return e!==t.id})))},toggleComplete:function(e){var t=n.find((function(t){return t.id===e}));t.completed=!t.completed,l(n.map((function(n){return n.id===e?t:n})))}})),o.a.createElement("footer",null,"made with"," ",o.a.createElement("span",{role:"img","aria-label":"heart",id:"heart"},"\u2764")," ","by Chaitanya Raj"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.5891c5e5.chunk.js.map