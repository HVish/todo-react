(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(70),r=a(9),l=a(71),i=a(47),o=a(14),m=a(5),u=a(73),p=a.n(u),d=a(74),_=a.n(d),k=a(15),E=a.n(k);function h(e){var t=Date.parse(e);return isNaN(t)?"":new Date(e).toLocaleString("en-IN",{hour12:!0,month:"long",year:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit"})}var f=Object.freeze({PENDING:"pending",IN_PROGRESS:"in_progress",COMPLETED:"completed",ARCHIVED:"archived"}),v=Object.freeze({HIGH:"high",MEDIUM:"medium",LOW:"low"});function g(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var s=a.call(e,t||"default");if("object"!==typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var N=[{id:E()("task-"),title:"Create a todo app in React",description:"",progress:30,priority:v.HIGH,tags:"todo, work",status:f.PENDING,createdAt:h(new Date)},{id:E()("task-"),title:"Complete 100km running in one week",description:"",progress:0,priority:v.MEDIUM,tags:"health",status:f.PENDING,createdAt:h(new Date)},{id:E()("task-"),title:"Watch 2 movies this weekend with friends",description:"",progress:100,priority:v.LOW,tags:"life, friends",status:f.COMPLETED,createdAt:h(new Date)},{id:E()("task-"),title:"Call doctor for appointments",description:"",progress:0,priority:v.LOW,tags:"health",status:f.PENDING,createdAt:h(new Date)},{id:E()("task-"),title:"Pay house rent",description:"",progress:0,priority:v.LOW,tags:"todo",status:f.PENDING,createdAt:h(new Date)}],b=p()(N,"id"),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":var a=_()(t.task,{id:E()("task-"),title:"Untitled task",description:"",progress:0,priority:v.LOW,tags:"todo",status:f.PENDING,createdAt:h(new Date)});return Object(m.a)(Object(o.a)({},a.id,a),e);case"UPDATE_TASK":var s=e[t.task.id],n=Object(i.a)(e,[t.task.id].map(g));return Object(m.a)(Object(o.a)({},s.id,Object(m.a)({},s,t.task)),n);case"DELETE_TASK":return e[t.task.id],Object(i.a)(e,[t.task.id].map(g));default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_TASK_SELECTION":return e===t.taskId?null:t.taskId;default:return e}},C=Object(r.combineReducers)({tasks:y,selectedTask:O}),T=a(6),w=a(223),S=a(226),j=a(87),D=a(224),x=a(11),I=(a(193),a(225)),P=(a(194),a(75)),A=a.n(P),R=a(76),L=a.n(R),M=a(77),G=a.n(M),V=a(78),H=a.n(V),q=a(79),W=a.n(q),U=(a(195),a(80)),K=a.n(U),F=function(e){var t=e.name;return n.a.createElement("div",{className:"author"},n.a.createElement("img",{className:"author__avatar",src:K.a,alt:"User"}),n.a.createElement("div",{className:"author__details"},n.a.createElement("div",{className:"author__label"},"Showing tasks for"),n.a.createElement("div",{className:"author__name"},t)))},z=a(86),B=function(e){var t=["nav__item"];return e.classes&&e.classes instanceof Array?t.push.apply(t,Object(z.a)(e.classes)):e.classes&&t.push(e.classes),n.a.createElement("div",{className:t.join(" ")},e.children)},J=function(e){var t=function(){e.onToggle&&e.onToggle()};return n.a.createElement(s.Fragment,null,n.a.createElement("div",{className:"app__side-nav-backdrop",onClick:t}),n.a.createElement("nav",{className:"app__side-nav nav"},n.a.createElement(B,{classes:"nav__header"},n.a.createElement(F,{name:"Vishnu Singh"})),n.a.createElement(B,null,n.a.createElement(I.a,{exact:!0,to:"/tasks",className:"nav__link link",activeClassName:"link_active",onClick:t},n.a.createElement("img",{src:A.a,alt:"task",className:"link__icon"}),n.a.createElement("span",{className:"link__text"},"All Tasks"))),n.a.createElement(B,null,n.a.createElement(I.a,{to:"/tasks/pending",className:"nav__link link",activeClassName:"link_active",onClick:t},n.a.createElement("img",{src:L.a,alt:"task",className:"link__icon"}),n.a.createElement("span",{className:"link__text"},"Pending"))),n.a.createElement(B,null,n.a.createElement(I.a,{to:"/tasks/in-progress",className:"nav__link link",activeClassName:"link_active",onClick:t},n.a.createElement("img",{src:W.a,alt:"task",className:"link__icon"}),n.a.createElement("span",{className:"link__text"},"In Progress"))),n.a.createElement(B,null,n.a.createElement(I.a,{to:"/tasks/completed",className:"nav__link link",activeClassName:"link_active",onClick:t},n.a.createElement("img",{src:H.a,alt:"task",className:"link__icon"}),n.a.createElement("span",{className:"link__text"},"Completed"))),n.a.createElement(B,null,n.a.createElement(I.a,{to:"/tasks/archived",className:"nav__link link",activeClassName:"link_active",onClick:t},n.a.createElement("img",{src:G.a,alt:"task",className:"link__icon"}),n.a.createElement("span",{className:"link__text"},"Archived")))),n.a.createElement("div",{className:"app__side-nav-handle"},n.a.createElement("div",{className:"hamburger-icon",onClick:t},n.a.createElement("span",{className:"line"}),n.a.createElement("span",{className:"line"}),n.a.createElement("span",{className:"line"}))))},Q=(a(197),function(e){return{type:"UPDATE_TASK",task:e}}),X=function(e){return{type:"TOGGLE_TASK_SELECTION",taskId:e}},Y=a(81),Z=a.n(Y),$=a(1),ee=a.n($),te=(a(198),function(e){var t=Object(s.useState)(e.task||{}),a=Object(x.a)(t,2),c=a[0],r=a[1],l=function(e,t){r(Object(m.a)({},c,Object(o.a)({},t,e.target.value)))};return n.a.createElement("form",{className:"task-form",onSubmit:function(t){t.preventDefault(),e.onSubmit(c)}},n.a.createElement("h1",{className:"task-form__title"},e.task?"Edit Task":"Create Task "),n.a.createElement("div",{className:"task-form__group"},n.a.createElement("label",{className:"task-form__label"},"Title:"),n.a.createElement("input",{className:"task-form__input",type:"text",defaultValue:e.task&&e.task.title,placeholder:"Task summary",onChange:function(e){return l(e,"title")}})),n.a.createElement("div",{className:"task-form__group"},n.a.createElement("label",{className:"task-form__label"},"Description:"),n.a.createElement("textarea",{className:"task-form__input",type:"text",defaultValue:e.task&&e.task.description,placeholder:"Task details (optional)",onChange:function(e){return l(e,"description")}})),n.a.createElement("div",{className:"task-form__group"},n.a.createElement("label",{className:"task-form__label"},"Tags:"),n.a.createElement("input",{className:"task-form__input",type:"text",defaultValue:e.task&&e.task.tags,placeholder:"Comma-separated tags",onChange:function(e){return l(e,"tags")}})),n.a.createElement("div",{className:"task-form__group"},n.a.createElement("label",{className:"task-form__label"},"Progress:"),n.a.createElement("input",{className:"task-form__input",type:"number",defaultValue:e.task&&e.task.progress,placeholder:"Progress in percentage between (0-100)",onChange:function(e){var t=+e.target.value,a=c.status;a=100===t?f.COMPLETED:0===t?f.PENDING:f.IN_PROGRESS,r(Object(m.a)({},c,{progress:t,status:a}))}})),n.a.createElement("div",{className:"task-form__group"},n.a.createElement("label",{className:"task-form__label"},"Progress:"),n.a.createElement("select",{className:"task-form__input",defaultValue:e.task&&e.task.priority,placeholder:"Task priority",onChange:function(e){return l(e,"priority")}},n.a.createElement("option",{value:v.LOW},"Low"),n.a.createElement("option",{value:v.MEDIUM},"Medium"),n.a.createElement("option",{value:v.HIGH},"High"))),n.a.createElement("div",{className:"task-form__group task-form__group_right"},n.a.createElement("button",{className:"task-form__action button button_default",type:"button",onClick:function(t){t.preventDefault(),e.onCancel()}},"Cancel"),n.a.createElement("button",{className:"task-form__action button button_info",type:"submit"},e.task?"Update":"Create")))});te.propType={task:ee.a.shape({id:ee.a.string.isRequired,title:ee.a.string.isRequired,description:ee.a.string,tags:ee.a.arrayOf(ee.a.string).isRequired,progress:ee.a.number.isRequired,priority:ee.a.string.isRequired,status:ee.a.string.isRequired,createdAt:ee.a.string.isRequired}),onSubmit:ee.a.func.isRequired,onCancel:ee.a.func.isRequired};var ae=te,se=Object(T.b)(function(e){return{selectedTask:e.selectedTask}})(function(e){var t=Object(s.useState)(!1),a=Object(x.a)(t,2),c=a[0],r=a[1],l=function(){r(!1)};return n.a.createElement(s.Fragment,null,n.a.createElement("header",{className:"app__header header"},n.a.createElement("div",{className:"header__title"},e.title),n.a.createElement("button",{className:"header__action header__action_lg-screen button button_default",onClick:function(){return r(!0)}},n.a.createElement("img",{src:Z.a,className:"button__icon",alt:"plus"}),n.a.createElement("span",{className:"button__text"},"Add Tasks")),c&&n.a.createElement("div",{className:"modal"},n.a.createElement("div",{className:"modal__body"},n.a.createElement(ae,{onSubmit:function(t){r(!1),e.dispatch(function(e){return{type:"ADD_TASK",task:e}}(t))},onCancel:l})),n.a.createElement("div",{className:"modal__backdrop",onClick:l}))),!e.selectedTask&&n.a.createElement("button",{className:"header__action header__action_sm-screen button button_fab",onClick:function(){return r(!0)}},"+"))}),ne=function(e){return n.a.createElement("div",{className:"app__main-container"},n.a.createElement(se,{title:"All Tasks"}),n.a.createElement("div",{className:"app__body"},e.children))},ce=(a(199),a(49)),re=a.n(ce),le=(a(216),a(82)),ie=a.n(le),oe=a(83),me=a.n(oe),ue=a(84),pe=a.n(ue),de=(a(217),a(85)),_e=a.n(de),ke=function(e){return n.a.createElement("div",{className:"empty-message"},n.a.createElement("img",{src:_e.a,alt:"www",className:"empty-message__icon"}),n.a.createElement("p",{className:"empty-message__message"},e.message))},Ee=a(31),he=a(32),fe=a(34),ve=a(33),ge=a(35),Ne=function(e){function t(){return Object(Ee.a)(this,t),Object(fe.a)(this,Object(ve.a)(t).apply(this,arguments))}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"componentDidUpdate",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var e=Math.ceil(this.props.progress),t=this.refs.canvas.getContext("2d"),a=t.canvas.width/2,s=t.canvas.height/2,n=this.props.showLabel?10*this.props.width/100:15*this.props.width/100,c=this.props.width/2-n,r=(this.props.width-n)/2;if(t.clearRect(0,0,this.props.width,this.props.width),t.beginPath(),t.arc(a,s,c,0,2*Math.PI,!1),t.fillStyle="#FFF",t.fill(),t.beginPath(),t.arc(a,s,r,0,2*Math.PI,!1),t.globalAlpha=.5,t.strokeStyle=this.props.color,t.lineWidth=n,t.stroke(),t.globalAlpha=1,this.props.showLabel){var l=15*this.props.width/100;t.fillStyle="#000",t.textAlign="center",t.textBaseline="middle",t.font="".concat(l,"pt Verdana"),t.fillText(e+"%",a+2,s)}var i=e*Math.PI*2/100,o=-Math.PI/2,m=-(i-o);t.beginPath(),t.arc(a,s,r,o,m,!0),t.strokeStyle=this.props.color,t.stroke()}},{key:"render",value:function(){return n.a.createElement("canvas",{className:this.props.className,ref:"canvas",width:this.props.width,height:this.props.width})}}]),t}(n.a.Component),be=Object(T.b)(function(e){return{selectedTask:e.tasks[e.selectedTask]||{}}})(function(e){var t=Object(s.useState)(!1),a=Object(x.a)(t,2),c=a[0],r=a[1],l=e.selectedTask,i=!!l.id,o=function(){e.dispatch(Q(Object(m.a)({},l,{progress:100,status:f.COMPLETED})))},u=function(){e.dispatch(Q(Object(m.a)({},l,{status:f.ARCHIVED})))};return i&&c?n.a.createElement("div",{className:"tasks__details task-panel"},n.a.createElement(ae,{task:l,onSubmit:function(t){r(!1),e.dispatch(Q(t))},onCancel:function(){r(!1)}})):i?n.a.createElement("div",{className:"tasks__details task-panel"},n.a.createElement("h1",{className:"task-panel__title"},n.a.createElement("span",{className:"title"},l.title),n.a.createElement("span",{className:"close",onClick:function(){e.dispatch(X(l.id))}},"\xd7")),n.a.createElement("div",{className:"task-panel__metas"},n.a.createElement("div",{className:"task-panel__section"},n.a.createElement("div",{className:"meta"},n.a.createElement("span",{className:"meta__title"},"ID:"),n.a.createElement("span",{className:"meta__value"},l.id)),n.a.createElement("div",{className:"meta"},n.a.createElement("span",{className:"meta__title"},"Created At:"),n.a.createElement("span",{className:"meta__value"},l.createdAt)),n.a.createElement("div",{className:"meta"},n.a.createElement("span",{className:"meta__title"},"Priority:"),n.a.createElement("span",{className:"meta__value"},re()(l.priority))),n.a.createElement("div",{className:"meta"},n.a.createElement("span",{className:"meta__title"},"Tags:"),n.a.createElement("span",{className:"meta__value"},l.tags&&l.tags.split(",").map(function(e,t){return n.a.createElement("span",{key:t,className:"tag"},e.trim())}))),n.a.createElement("div",{className:"meta"},n.a.createElement("span",{className:"meta__title"},"Status:"),n.a.createElement("span",{className:"meta__value"},re()(l.status)))),n.a.createElement("div",{className:"task-panel__section"},n.a.createElement(Ne,{className:"task-panel__canvas",color:"#fbc02d",showLabel:!0,width:150,progress:l.progress}))),l.description&&n.a.createElement("div",{className:"task-panel__details-label"},"Description: "),n.a.createElement("p",{className:"task-panel__details"},l.description),function(){switch(l.status){case f.ARCHIVED:return null;case f.COMPLETED:return n.a.createElement("div",{className:"task-panel__actions"},n.a.createElement("button",{className:"button button_danger",onClick:u},n.a.createElement("img",{src:ie.a,alt:"archive",className:"button__icon"}),n.a.createElement("span",{className:"button__text"},"Archive")));default:return n.a.createElement("div",{className:"task-panel__actions"},n.a.createElement("button",{className:"button button_info",onClick:function(){return r(!0)}},n.a.createElement("img",{src:me.a,alt:"edit",className:"button__icon"}),n.a.createElement("span",{className:"button__text"},"Edit Task")),n.a.createElement("button",{className:"button button_success",onClick:o},n.a.createElement("img",{src:pe.a,alt:"done",className:"button__icon"}),n.a.createElement("span",{className:"button__text"},"Done")))}}()):n.a.createElement("div",{className:"tasks__details task-panel"},n.a.createElement(ke,{message:"No tasks selected"}))}),ye=(a(218),a(219),function(e){return n.a.createElement("div",{className:"task-list__search search"},n.a.createElement("input",{type:"text",className:"search__input",placeholder:"Search tasks",onChange:function(t){return e.onSearch(t.target.value)}}))});ye.propType={onSearch:ee.a.func.isRequired};var Oe=ye,Ce=(a(220),function(e){var t=e.isSelected?"task-list__item task task_selected":"task-list__item task";return n.a.createElement("div",{className:t,onClick:e.onTaskSelected},n.a.createElement("div",{className:"task__drag-handle"}),n.a.createElement("div",{className:"task__details"},n.a.createElement("div",{className:"task__title"},e.task.title),n.a.createElement("div",{className:"task__tags"},e.task.tags&&e.task.tags.split(",").map(function(e,t){return n.a.createElement("span",{className:"tag",key:t},e.trim())}))),n.a.createElement(Ne,{className:"task__progress",color:"#7e57c2",width:40,progress:e.task.progress}))}),Te=function(e){function t(e){var a;return Object(Ee.a)(this,t),(a=Object(fe.a)(this,Object(ve.a)(t).call(this,e))).state={tasks:[],search:""},a}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.initList(e)}},{key:"componentDidMount",value:function(){this.initList(this.props)}},{key:"initList",value:function(e){var t=this,a=e.tasks.filter(function(a){return(a.status===e.status||"all"===e.status&&a.status!==f.ARCHIVED)&&a.title.match(new RegExp(t.state.search,"i"))});this.setState(Object(m.a)({},this.state,{tasks:a}))}},{key:"handleSearch",value:function(e){var t=this;this.setState(Object(m.a)({},this.state,{search:e,tasks:this.props.tasks.filter(function(a){return(a.status===t.props.status||"all"===t.props.status&&a.status!==f.ARCHIVED)&&a.title.match(new RegExp(e,"i"))})}))}},{key:"handleTaskSelection",value:function(e){this.props.dispatch(X(e.id))}},{key:"render",value:function(){var e=this,t=this.state.tasks,a=this.props.selectedTask;return n.a.createElement("div",{className:"tasks__list task-list"},n.a.createElement(Oe,{onSearch:this.handleSearch.bind(this)}),t.length?n.a.createElement("div",{className:"task-list__list"},t.map(function(t,s){return n.a.createElement(Ce,{key:s,task:t,isSelected:a.id===t.id,onTaskSelected:e.handleTaskSelection.bind(e,t)})})):n.a.createElement(ke,{message:"No tasks!"}))}}]),t}(n.a.Component),we=Object(T.b)(function(e){return{tasks:Object.keys(e.tasks).map(function(t){return e.tasks[t]}),selectedTask:e.tasks[e.selectedTask]||{}}})(Te),Se=Object(T.b)(function(e){return{selectedTask:e.selectedTask}})(function(e){var t=e.selectedTask?"tasks tasks__details-visible":"tasks tasks__list-visible";return n.a.createElement("div",{className:t},n.a.createElement(we,e),n.a.createElement(be,null))}),je=function(e){return function(t){return n.a.createElement(Se,Object.assign({},t,{status:e}))}},De=function(e){var t=Object(s.useState)(!1),a=Object(x.a)(t,2),c=a[0],r=a[1];return n.a.createElement("div",{className:c?"app app_nav-visible":"app"},n.a.createElement(J,{isVisible:c,onToggle:function(){r(!c)}}),n.a.createElement(ne,null,n.a.createElement(j.a,{path:"".concat(e.match.path,"/archived"),component:je(f.ARCHIVED)}),n.a.createElement(j.a,{path:"".concat(e.match.path,"/completed"),component:je(f.COMPLETED)}),n.a.createElement(j.a,{path:"".concat(e.match.path,"/in-progress"),component:je(f.IN_PROGRESS)}),n.a.createElement(j.a,{path:"".concat(e.match.path,"/pending"),component:je(f.PENDING)}),n.a.createElement(j.a,{exact:!0,path:"".concat(e.match.path),component:je("all")})))},xe=function(e){var t=e.store;return n.a.createElement(T.a,{store:t},n.a.createElement(w.a,{basename:"/todo-react"},n.a.createElement(S.a,null,n.a.createElement(j.a,{exact:!0,path:"/",render:function(){return n.a.createElement(D.a,{to:"/tasks"})}}),n.a.createElement(j.a,{path:"/tasks",component:De}))))},Ie=(a(221),[function(e){return function(t){return function(a){console.group(a.type),console.info("dispatching",a);var s=t(a);return console.log("next state",e.getState()),console.groupEnd(),s}}}]),Pe=Object(r.createStore)(C,Object(l.composeWithDevTools)(r.applyMiddleware.apply(void 0,Ie)));Object(c.render)(n.a.createElement(xe,{store:Pe}),document.getElementById("root"))},75:function(e,t,a){e.exports=a.p+"static/media/task-search.e7cffb9d.svg"},76:function(e,t,a){e.exports=a.p+"static/media/task-pending.2bfbf733.svg"},77:function(e,t,a){e.exports=a.p+"static/media/task-archived.37acd060.svg"},78:function(e,t,a){e.exports=a.p+"static/media/task-completed.981ae311.svg"},79:function(e,t,a){e.exports=a.p+"static/media/task-in-progress.9be52237.svg"},80:function(e,t,a){e.exports=a.p+"static/media/vishnu.59c6254c.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/plus.8601f5bd.svg"},82:function(e,t,a){e.exports=a.p+"static/media/bin.40d5f230.svg"},83:function(e,t,a){e.exports=a.p+"static/media/edit.522a418b.svg"},84:function(e,t,a){e.exports=a.p+"static/media/done.c2625638.svg"},85:function(e,t,a){e.exports=a.p+"static/media/www.c94aea67.svg"},88:function(e,t,a){e.exports=a(222)}},[[88,1,2]]]);
//# sourceMappingURL=main.4a25d0ef.chunk.js.map