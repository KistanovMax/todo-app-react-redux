(this["webpackJsonptodo-app-react-redux"]=this["webpackJsonptodo-app-react-redux"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),o=n.n(a),r=n(5),i=n.n(r);n(20),n(21);function s(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"ToDo App"})})}var u=n(2),l=n(7);n(28);function d(t){var e=t.title,n=t.todoId,o=Object(a.useState)(!1),r=Object(l.a)(o,2),i=r[0],s=r[1],d=Object(u.b)(),j=Object(a.useCallback)((function(){s(!i)}),[i]),b="list-group-item-secondary";return i&&(b="list-group-item-danger"),Object(c.jsx)("ul",{className:"list-group",children:Object(c.jsxs)("li",{className:"list-group-item ".concat(b," item-box"),children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{className:"form-check-input",onChange:j,type:"checkbox"}),Object(c.jsx)("div",{className:"titleText",children:e})]}),i&&Object(c.jsx)("button",{onClick:function(){return d(function(t){return{type:"DELETE_TODO",payload:t}}(n))},className:"btn btn-info btn-sm",type:"button",children:Object(c.jsxs)("svg",{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-trash",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(c.jsx)("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})]})})}var j=o.a.memo(d);n(29);function b(){var t=Object(u.c)((function(t){return t.todoReducer}));return Object(c.jsx)("div",{children:t.filter((function(t){return t.id>0})).map((function(t){return Object(c.jsx)(j,{title:t.title,todoId:t.id},t.id)}))})}var O=o.a.memo(b);n(30);function h(){var t=Object(a.useState)(""),e=Object(l.a)(t,2),n=e[0],o=e[1],r=Object(u.b)(),i=Object(a.useCallback)((function(t){o(t.target.value)}),[o]);return Object(c.jsxs)("div",{className:"input-group mb",children:[Object(c.jsx)("input",{onChange:i,type:"text",className:"form-control",placeholder:"New ToDo",value:n}),Object(c.jsx)("div",{className:"input-group-append",children:Object(c.jsx)("button",{disabled:!n,onClick:function(){return function(t){return r(function(t){return{type:"ADD_TODO",payload:t}}(t))}(n,o(""))},className:"btn btn-info",type:"button",children:"Add ToDo"})})]})}var p=o.a.memo(h);n(31);function m(){return Object(c.jsxs)("div",{className:"container jumbotron",children:[Object(c.jsx)(s,{}),Object(c.jsx)(p,{}),Object(c.jsx)(O,{})]})}var f=n(3),v=n(14),x=n(12),g=[{id:0,title:""}],D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case"ADD_TODO":return[].concat(Object(x.a)(t),[{id:t.length,title:c}]);case"DELETE_TODO":return Object(x.a)(t.filter((function(t){return t.id!==c})));default:return t}},N=Object(f.combineReducers)({todoReducer:D}),y=Object(f.createStore)(N,Object(v.composeWithDevTools)());i.a.render(Object(c.jsx)(u.a,{store:y,children:Object(c.jsx)(m,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ba432039.chunk.js.map