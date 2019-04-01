(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(68),r=a(8),l=a(69),i=a(45),o=a(12),m=a(4),u=a(71),p=a.n(u),d=a(72),_=a.n(d),k=a(13),E=a.n(k);function h(e){var t=Date.parse(e);return isNaN(t)?"":new Date(e).toLocaleString("en-IN",{hour12:!0,month:"long",year:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit"})}var f=Object.freeze({PENDING:"pending",IN_PROGRESS:"in_progress",COMPLETED:"completed",ARCHIVED:"archived"}),v=Object.freeze({HIGH:"high",MEDIUM:"medium",LOW:"low"});function g(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var s=a.call(e,t||"default");if("object"!==typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var N=[{id:E()("task-"),title:"Create a todo app in React",description:"",progress:30,priority:v.HIGH,tags:"todo, work",status:f.PENDING,createdAt:h(new Date)},{id:E()("task-"),title:"Complete 100km running in one week",description:"",progress:0,priority:v.MEDIUM,tags:"health",status:f.PENDING,createdAt:h(new Date)},{id:E()("task-"),title:"Watch 2 movies this weekend with friends",description:"",progress:100,priority:v.LOW,tags:"life, friends",status:f.COMPLETED,createdAt:h(new Date)},{id:E()("task-"),title:"Call doctor for appointments",description:"",progress:0,priority:v.LOW,tags:"health",status:f.PENDING,createdAt:h(new Date)},{id:E()("task-"),title:"Pay house rent",description:"",progress:0,priority:v.LOW,tags:"todo",status:f.PENDING,createdAt:h(new Date)}],b=p()(N,"id"),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":var a=_()(t.task,{id:E()("task-"),title:"Untitled task",description:"",progress:0,priority:v.LOW,tags:"todo",status:f.PENDING,createdAt:h(new Date)});return Object(m.a)(Object(o.a)({},a.id,a),e);case"UPDATE_TASK":var s=e[t.task.id],n=Object(i.a)(e,[t.task.id].map(g));return Object(m.a)(Object(o.a)({},s.id,Object(m.a)({},s,t.task)),n);case"DELETE_TASK":return e[t.task.id],Object(i.a)(e,[t.task.id].map(g));default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_TASK_SELECTION":return e===t.taskId?null:t.taskId;default:return e}},S=Object(r.combineReducers)({tasks:y,selectedTask:O}),w=a(10),C=a(222),D=a(86),T=(a(192),a(223)),j=(a(193),a(73)),I=a.n(j),P=a(74),x=a.n(P),A=a(75),R=a.n(A),L=a(76),M=a.n(L),G=a(77),H=a.n(G),V=(a(194),a(78)),q=a.n(V),W=function(e){var t=e.name;return n.a.createElement("div",{className:"author"},n.a.createElement("img",{className:"author__avatar",src:q.a,alt:"User"}),n.a.createElement("div",{className:"author__details"},n.a.createElement("div",{className:"author__label"},"Showing tasks for"),n.a.createElement("div",{className:"author__name"},t)))},U=a(85),K=function(e){var t=["nav__item"];return e.classes&&e.classes instanceof Array?t.push.apply(t,Object(U.a)(e.classes)):e.classes&&t.push(e.classes),n.a.createElement("div",{className:t.join(" ")},e.children)},F=a(28),z=a(29),B=a(33),J=a(30),Q=a(32),X=function(e){function t(){return Object(F.a)(this,t),Object(B.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"componentDidUpdate",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var e=Math.ceil(this.props.progress),t=this.refs.canvas.getContext("2d"),a=t.canvas.width/2,s=t.canvas.height/2,n=this.props.showLabel?10*this.props.width/100:15*this.props.width/100,c=this.props.width/2-n,r=(this.props.width-n)/2;if(t.clearRect(0,0,this.props.width,this.props.width),t.beginPath(),t.arc(a,s,c,0,2*Math.PI,!1),t.fillStyle="#FFF",t.fill(),t.beginPath(),t.arc(a,s,r,0,2*Math.PI,!1),t.globalAlpha=.5,t.strokeStyle=this.props.color,t.lineWidth=n,t.stroke(),t.globalAlpha=1,this.props.showLabel){var l=15*this.props.width/100;t.fillStyle="#000",t.textAlign="center",t.textBaseline="middle",t.font="".concat(l,"pt Verdana"),t.fillText(e+"%",a+2,s)}var i=e*Math.PI*2/100,o=-Math.PI/2,m=-(i-o);t.beginPath(),t.arc(a,s,r,o,m,!0),t.strokeStyle=this.props.color,t.stroke()}},{key:"render",value:function(){return n.a.createElement("canvas",{className:this.props.className,ref:"canvas",width:this.props.width,height:this.props.width})}}]),t}(n.a.Component),Y=function(){return n.a.createElement("nav",{className:"app__side-nav nav"},n.a.createElement(K,{classes:"nav__header"},n.a.createElement(W,{name:"Vishnu Singh"})),n.a.createElement(K,null,n.a.createElement(T.a,{exact:!0,to:"/tasks",className:"nav__link link",activeClassName:"link_active"},n.a.createElement("img",{src:I.a,alt:"task",className:"link__icon"}),n.a.createElement("span",{className:"link__text"},"All Tasks"))),n.a.createElement(K,null,n.a.createElement(T.a,{to:"/tasks/pending",className:"nav__link link",activeClassName:"link_active"},n.a.createElement("img",{src:x.a,alt:"task",className:"link__icon"}),n.a.createElement("span",{className:"link__text"},"Pending"))),n.a.createElement(K,null,n.a.createElement(T.a,{to:"/tasks/in-progress",className:"nav__link link",activeClassName:"link_active"},n.a.createElement("img",{src:H.a,alt:"task",className:"link__icon"}),n.a.createElement("span",{className:"link__text"},"In Progress"))),n.a.createElement(K,null,n.a.createElement(T.a,{to:"/tasks/completed",className:"nav__link link",activeClassName:"link_active"},n.a.createElement("img",{src:M.a,alt:"task",className:"link__icon"}),n.a.createElement("span",{className:"link__text"},"Completed"))),n.a.createElement(K,null,n.a.createElement(T.a,{to:"/tasks/archived",className:"nav__link link",activeClassName:"link_active"},n.a.createElement("img",{src:R.a,alt:"task",className:"link__icon"}),n.a.createElement("span",{className:"link__text"},"Archived"))))},Z=a(14),$=(a(196),function(e){return{type:"UPDATE_TASK",task:e}}),ee=a(80),te=a.n(ee),ae=a(1),se=a.n(ae),ne=(a(197),function(e){var t=Object(s.useState)(e.task||{}),a=Object(Z.a)(t,2),c=a[0],r=a[1],l=function(e,t){r(Object(m.a)({},c,Object(o.a)({},t,e.target.value)))};return n.a.createElement("form",{className:"task-form",onSubmit:function(t){t.preventDefault(),e.onSubmit(c)}},n.a.createElement("h1",{className:"task-form__title"},e.task?"Edit Task":"Create Task "),n.a.createElement("div",{className:"task-form__group"},n.a.createElement("label",{className:"task-form__label"},"Title:"),n.a.createElement("input",{className:"task-form__input",type:"text",defaultValue:e.task&&e.task.title,placeholder:"Task summary",onChange:function(e){return l(e,"title")}})),n.a.createElement("div",{className:"task-form__group"},n.a.createElement("label",{className:"task-form__label"},"Description:"),n.a.createElement("textarea",{className:"task-form__input",type:"text",defaultValue:e.task&&e.task.description,placeholder:"Task details (optional)",onChange:function(e){return l(e,"description")}})),n.a.createElement("div",{className:"task-form__group"},n.a.createElement("label",{className:"task-form__label"},"Tags:"),n.a.createElement("input",{className:"task-form__input",type:"text",defaultValue:e.task&&e.task.tags,placeholder:"Comma-separated tags",onChange:function(e){return l(e,"tags")}})),n.a.createElement("div",{className:"task-form__group"},n.a.createElement("label",{className:"task-form__label"},"Progress:"),n.a.createElement("input",{className:"task-form__input",type:"number",defaultValue:e.task&&e.task.progress,placeholder:"Progress in percentage between (0-100)",onChange:function(e){var t=+e.target.value,a=c.status;a=100===t?f.COMPLETED:0===t?f.PENDING:f.IN_PROGRESS,r(Object(m.a)({},c,{progress:t,status:a}))}})),n.a.createElement("div",{className:"task-form__group"},n.a.createElement("label",{className:"task-form__label"},"Progress:"),n.a.createElement("select",{className:"task-form__input",defaultValue:e.task&&e.task.priority,placeholder:"Task priority",onChange:function(e){return l(e,"priority")}},n.a.createElement("option",{value:v.LOW},"Low"),n.a.createElement("option",{value:v.MEDIUM},"Medium"),n.a.createElement("option",{value:v.HIGH},"High"))),n.a.createElement("div",{className:"task-form__group task-form__group_right"},n.a.createElement("button",{className:"task-form__action button button_default",type:"button",onClick:function(t){t.preventDefault(),e.onCancel()}},"Cancel"),n.a.createElement("button",{className:"task-form__action button button_info",type:"submit"},e.task?"Update":"Create")))});ne.propType={task:se.a.shape({id:se.a.string.isRequired,title:se.a.string.isRequired,description:se.a.string,tags:se.a.arrayOf(se.a.string).isRequired,progress:se.a.number.isRequired,priority:se.a.string.isRequired,status:se.a.string.isRequired,createdAt:se.a.string.isRequired}),onSubmit:se.a.func.isRequired,onCancel:se.a.func.isRequired};var ce=ne,re=Object(w.b)()(function(e){var t=Object(s.useState)(!1),a=Object(Z.a)(t,2),c=a[0],r=a[1],l=function(){r(!1)};return n.a.createElement("header",{className:"app__header header"},n.a.createElement("div",{className:"header__title"},e.title),n.a.createElement("button",{className:"header__action button button_default",onClick:function(){return r(!0)}},n.a.createElement("img",{src:te.a,className:"button__icon",alt:"plus"}),n.a.createElement("span",{className:"button__text"},"Add Tasks")),c&&n.a.createElement("div",{className:"modal"},n.a.createElement("div",{className:"modal__body"},n.a.createElement(ce,{onSubmit:function(t){r(!1),e.dispatch(function(e){return{type:"ADD_TASK",task:e}}(t))},onCancel:l})),n.a.createElement("div",{className:"modal__backdrop",onClick:l})))}),le=function(e){return n.a.createElement("div",{className:"app__main-container"},n.a.createElement(re,{title:"All Tasks"}),n.a.createElement("div",{className:"app__body"},e.children))},ie=(a(198),a(47)),oe=a.n(ie),me=(a(215),a(81)),ue=a.n(me),pe=a(82),de=a.n(pe),_e=a(83),ke=a.n(_e),Ee=(a(216),a(84)),he=a.n(Ee),fe=function(e){return n.a.createElement("div",{className:"empty-message"},n.a.createElement("img",{src:he.a,alt:"www",className:"empty-message__icon"}),n.a.createElement("p",{className:"empty-message__message"},e.message))},ve=Object(w.b)(function(e){return{selectedTask:e.tasks[e.selectedTask]||{}}})(function(e){var t=Object(s.useState)(!1),a=Object(Z.a)(t,2),c=a[0],r=a[1],l=e.selectedTask,i=!!l.id,o=function(){e.dispatch($(Object(m.a)({},l,{progress:100,status:f.COMPLETED})))},u=function(){e.dispatch($(Object(m.a)({},l,{status:f.ARCHIVED})))};return i&&c?n.a.createElement("div",{className:"tasks__details task-panel"},n.a.createElement(ce,{task:l,onSubmit:function(t){r(!1),e.dispatch($(t))},onCancel:function(){r(!1)}})):i?n.a.createElement("div",{className:"tasks__details task-panel"},n.a.createElement("h1",{className:"task-panel__title"},l.title),n.a.createElement("div",{className:"task-panel__metas"},n.a.createElement("div",{className:"task-panel__section"},n.a.createElement(X,{className:"task-panel__canvas",color:"#fbc02d",showLabel:!0,width:150,progress:l.progress})),n.a.createElement("div",{className:"task-panel__section"},n.a.createElement("div",{className:"meta"},n.a.createElement("span",{className:"meta__title"},"ID:"),n.a.createElement("span",{className:"meta__value"},l.id)),n.a.createElement("div",{className:"meta"},n.a.createElement("span",{className:"meta__title"},"Date of creation:"),n.a.createElement("span",{className:"meta__value"},l.createdAt)),n.a.createElement("div",{className:"meta"},n.a.createElement("span",{className:"meta__title"},"Priority:"),n.a.createElement("span",{className:"meta__value"},oe()(l.priority))),n.a.createElement("div",{className:"meta"},n.a.createElement("span",{className:"meta__title"},"Tags:"),n.a.createElement("span",{className:"meta__value"},l.tags&&l.tags.split(",").map(function(e,t){return n.a.createElement("span",{key:t,className:"tag"},e.trim())}))),n.a.createElement("div",{className:"meta"},n.a.createElement("span",{className:"meta__title"},"Status:"),n.a.createElement("span",{className:"meta__value"},oe()(l.status))))),l.description&&n.a.createElement("div",{className:"task-panel__details-label"},"Description: "),n.a.createElement("p",{className:"task-panel__details"},l.description),function(){switch(l.status){case f.ARCHIVED:return null;case f.COMPLETED:return n.a.createElement("div",{className:"task-panel__actions"},n.a.createElement("button",{className:"button button_danger",onClick:u},n.a.createElement("img",{src:ue.a,alt:"archive",className:"button__icon"}),n.a.createElement("span",{className:"button__text"},"Archive")));default:return n.a.createElement("div",{className:"task-panel__actions"},n.a.createElement("button",{className:"button button_info",onClick:function(){return r(!0)}},n.a.createElement("img",{src:de.a,alt:"edit",className:"button__icon"}),n.a.createElement("span",{className:"button__text"},"Edit Task")),n.a.createElement("button",{className:"button button_success",onClick:o},n.a.createElement("img",{src:ke.a,alt:"done",className:"button__icon"}),n.a.createElement("span",{className:"button__text"},"Done")))}}()):n.a.createElement("div",{className:"tasks__details task-panel"},n.a.createElement(fe,{message:"No tasks selected"}))}),ge=(a(217),a(218),function(e){return n.a.createElement("div",{className:"task-list__search search"},n.a.createElement("input",{type:"text",className:"search__input",placeholder:"Search tasks",onChange:function(t){return e.onSearch(t.target.value)}}))});ge.propType={onSearch:se.a.func.isRequired};var Ne=ge,be=(a(219),function(e){var t=e.isSelected?"task-list__item task task_selected":"task-list__item task";return n.a.createElement("div",{className:t,onClick:e.onTaskSelected},n.a.createElement("div",{className:"task__drag-handle"}),n.a.createElement("div",{className:"task__details"},n.a.createElement("div",{className:"task__title"},e.task.title),n.a.createElement("div",{className:"task__tags"},e.task.tags&&e.task.tags.split(",").map(function(e,t){return n.a.createElement("span",{className:"tag",key:t},e.trim())}))),n.a.createElement(X,{className:"task__progress",color:"#7e57c2",width:40,progress:e.task.progress}))}),ye=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(B.a)(this,Object(J.a)(t).call(this,e))).state={tasks:[]},a}return Object(Q.a)(t,e),Object(z.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.tasks.filter(function(t){return t.status===e.status||"all"===e.status&&t.status!==f.ARCHIVED});this.setState({tasks:t})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.tasks.filter(function(t){return t.status===e.status||"all"===e.status&&t.status!==f.ARCHIVED});this.setState({tasks:t})}},{key:"handleSearch",value:function(e){this.setState(Object(m.a)({},this.state,{tasks:this.props.tasks.filter(function(t){return t.title.match(new RegExp(e,"i"))})}))}},{key:"handleTaskSelection",value:function(e){this.props.dispatch({type:"TOGGLE_TASK_SELECTION",taskId:e.id})}},{key:"render",value:function(){var e=this,t=this.state.tasks,a=this.props.selectedTask;return t.length?n.a.createElement("div",{className:"tasks__list task-list"},n.a.createElement(Ne,{onSearch:this.handleSearch.bind(this)}),n.a.createElement("div",{className:"task-list__list"},t.map(function(t,s){return n.a.createElement(be,{key:s,task:t,isSelected:a.id===t.id,onTaskSelected:e.handleTaskSelection.bind(e,t)})}))):n.a.createElement("div",{className:"tasks__list task-list"},n.a.createElement(fe,{message:"No tasks!"}))}}]),t}(n.a.Component),Oe=Object(w.b)(function(e){return{tasks:Object.keys(e.tasks).map(function(t){return e.tasks[t]}),selectedTask:e.tasks[e.selectedTask]||{}}})(ye),Se=function(e){return n.a.createElement("div",{className:"tasks"},n.a.createElement(Oe,{status:e.status}),n.a.createElement(ve,null))},we=function(e){return function(t){return n.a.createElement(Se,Object.assign({},t,{status:e}))}},Ce=function(e){return n.a.createElement("div",{className:"app"},n.a.createElement(Y,null),n.a.createElement(le,null,n.a.createElement(D.a,{path:"".concat(e.match.path,"/archived"),component:we(f.ARCHIVED)}),n.a.createElement(D.a,{path:"".concat(e.match.path,"/completed"),component:we(f.COMPLETED)}),n.a.createElement(D.a,{path:"".concat(e.match.path,"/in-progress"),component:we(f.IN_PROGRESS)}),n.a.createElement(D.a,{path:"".concat(e.match.path,"/pending"),component:we(f.PENDING)}),n.a.createElement(D.a,{exact:!0,path:"".concat(e.match.path),component:we("all")})))},De=function(e){var t=e.store;return n.a.createElement(w.a,{store:t},n.a.createElement(C.a,{basename:"/todo-react"},n.a.createElement(D.a,{path:"/tasks",component:Ce})))},Te=(a(220),[function(e){return function(t){return function(a){console.group(a.type),console.info("dispatching",a);var s=t(a);return console.log("next state",e.getState()),console.groupEnd(),s}}}]),je=Object(r.createStore)(S,Object(l.composeWithDevTools)(r.applyMiddleware.apply(void 0,Te)));Object(c.render)(n.a.createElement(De,{store:je}),document.getElementById("root"))},73:function(e,t,a){e.exports=a.p+"static/media/task-search.e7cffb9d.svg"},74:function(e,t,a){e.exports=a.p+"static/media/task-pending.2bfbf733.svg"},75:function(e,t,a){e.exports=a.p+"static/media/task-archived.37acd060.svg"},76:function(e,t,a){e.exports=a.p+"static/media/task-completed.981ae311.svg"},77:function(e,t,a){e.exports=a.p+"static/media/task-in-progress.9be52237.svg"},78:function(e,t,a){e.exports=a.p+"static/media/vishnu.59c6254c.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/plus.8601f5bd.svg"},81:function(e,t,a){e.exports=a.p+"static/media/bin.40d5f230.svg"},82:function(e,t,a){e.exports=a.p+"static/media/edit.522a418b.svg"},83:function(e,t,a){e.exports=a.p+"static/media/done.c2625638.svg"},84:function(e,t,a){e.exports=a.p+"static/media/www.c94aea67.svg"},87:function(e,t,a){e.exports=a(221)}},[[87,1,2]]]);
//# sourceMappingURL=main.38b5c821.chunk.js.map