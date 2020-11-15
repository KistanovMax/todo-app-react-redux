(this["webpackJsonptodo-app-react-redux"]=this["webpackJsonptodo-app-react-redux"]||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),o=n.n(c),r=n(6),i=n.n(r),s=(n(22),n(2)),d=(n(29),function(e,t){return{type:"ADD_TODO",payload:{title:e,todoId:t}}});function l(){var e=Object(s.b)(),t=new Date,n="".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],", ").concat(t.getDate());return Object(c.useEffect)((function(){!function(t){e(function(e){return{type:"TRANSFER_DATE",payload:e}}(t))}(n)}),[n]),Object(a.jsx)("div",{className:"date",children:n})}n(30);function u(){return Object(a.jsxs)("nav",{className:"navbar container",children:[Object(a.jsxs)("div",{className:"logo",children:[Object(a.jsxs)("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:"bi bi-check2-circle",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("path",{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"}),Object(a.jsx)("path",{fillRule:"evenodd",d:"M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"})]}),Object(a.jsx)("span",{className:"navbar-brand h1",children:"important list"})]}),Object(a.jsx)(l,{})]})}n(31);function b(e){var t=e.title,n=e.todoId,c=e.date,o=e.isDone,r=e.isImportant,i=e.tooggleDone,s=e.tooggleImportant,d=e.clickTrashButton,l="button";return o&&(l+=" done"),Object(a.jsxs)("div",{className:"card text-secondary mb-2",children:[Object(a.jsxs)("div",{className:"card-header bg-light text-secondary",children:[c,Object(a.jsxs)("button",{className:l,onClick:function(){return i(n,o)},children:[o?Object(a.jsx)("div",{className:"button-text-green",children:"Awesome!"}):Object(a.jsx)("div",{className:"button-text",children:"Done?"}),Object(a.jsxs)("svg",{width:"1.7em",height:"1.7em",viewBox:"0 0 16 16",className:"bi bi-check2-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("path",{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"}),Object(a.jsx)("path",{fillRule:"evenodd",d:"M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"})]})]})]}),Object(a.jsxs)("div",{className:"card-body bg-light",onClick:function(){return s(n,r)},children:[Object(a.jsxs)("h5",{className:"card-title",children:[r&&Object(a.jsxs)("svg",{width:"1.3em",height:"1.3em",viewBox:"0 0 16 16",className:"bi bi-exclamation-square",fill:"rgba(255, 102, 0)",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(a.jsx)("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]}),t]}),o&&Object(a.jsx)("div",{className:"card-buttons",children:Object(a.jsx)("button",{onClick:function(){return d(n)},className:"button trash",type:"button",children:Object(a.jsxs)("div",{children:["Delete?"," ",Object(a.jsxs)("svg",{width:"1.7em",height:"1.7em",viewBox:"0 0 16 16",className:"bi bi-trash",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(a.jsx)("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})]})})})]})]})}var j=o.a.memo(b);n(32);function h(){var e=Object(s.c)((function(e){return e.dateReducer})).date,t=Object(s.c)((function(e){return e.todoReducer})),n=Object(s.b)(),c=function(e){return n(function(e){return{type:"DELETE_TODO",payload:e}}(e))},o=function(e,t){return n(function(e,t){return{type:"TODO_DONE",payload:{todoId:e,isTodoDone:t}}}(e,t))},r=function(e,t){return n(function(e,t){return{type:"TODO_IMPORTANT",payload:{todoId:e,isTodoImportant:t}}}(e,t))};return Object(a.jsx)("div",{className:"todo-list",children:t.map((function(t){return Object(a.jsx)(j,{title:t.title,todoId:t.id,isDone:t.isDone,isImportant:t.isImportant,date:e,clickTrashButton:c,tooggleDone:o,tooggleImportant:r},t.id)}))})}var O=o.a.memo(h),m=n(16),p=n(14),v=n.n(p);n(35);function f(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],o=t[1],r=v()(),i=Object(s.b)(),l=Object(c.useCallback)((function(e){o(e.target.value)}),[o]),u=Object(c.useCallback)((function(e){n&&13===e.keyCode&&(i(d(n,r)),o(""))}),[i,n,r]);return Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("input",{onChange:l,onKeyDown:u,type:"text",className:"form-control",placeholder:"New ToDo",value:n}),Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)("button",{disabled:!n,onClick:function(){return function(e,t){i(d(e,t)),o("")}(n,r)},className:"btn btn-secondary",type:"button",children:"Add ToDo"})})]})}var x=o.a.memo(f);n(36);function g(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(u,{}),Object(a.jsx)(x,{}),Object(a.jsx)(O,{})]})}var D=n(4),w=n(15),N=n(3),y=n(12),T=[],I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_TODO":return[].concat(Object(y.a)(e),[{id:a.todoId,title:a.title,isDone:!1,isImportant:!1}]);case"DELETE_TODO":return Object(y.a)(e.filter((function(e){return e.id!==a})));case"TODO_DONE":return e.map((function(e){return e.id===a.todoId?Object(N.a)(Object(N.a)({},e),{},{isDone:!a.isTodoDone}):e}));case"TODO_IMPORTANT":return e.map((function(e){return e.id===a.todoId?Object(N.a)(Object(N.a)({},e),{},{isImportant:!a.isTodoImportant}):e}));default:return e}},A={},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"TRANSFER_DATE":return Object(N.a)(Object(N.a)({},e),{},{date:a});default:return e}},R=Object(D.combineReducers)({todoReducer:I,dateReducer:M}),z=Object(D.createStore)(R,Object(w.composeWithDevTools)());i.a.render(Object(a.jsx)(s.a,{store:z,children:Object(a.jsx)(g,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.6cb2d55d.chunk.js.map