webpackJsonp([1],{NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=o("VU/8")({name:"App"},n,!1,function(t){o("gsu9")},null,null).exports,a=o("/ocq"),s={all:function(t){return t},active:function(t){return t.filter(function(t){return!t.completed})},completed:function(t){return t.filter(function(t){return t.completed})}},c={name:"HelloWorld",data:function(){return{visability:"all",newitem:"",lodaing:!0,todolist:[{id:"1",text:"play",completed:!1},{id:"2",text:"work",completed:!0},{id:"3",text:"eat",completed:!1}]}},methods:{clearcompleted:function(){var t=this.todolist.filter(function(t){if(!t.completed)return t});this.todolist=t},addnew:function(){var t=this.newitem;t&&(this.todolist.push({text:t,completed:!1}),this.newitem="")},check_li:function(t){t.completed=!t.completed},displayall:function(t){this.visability=1==t?"all":2==t?"active":"completed"},deleteli:function(t){this.todolist.splice(this.todolist.indexOf(t),1)}},computed:{remaining:function(){return s.active(this.todolist).length},filteredTodos:function(){return s[this.visability](this.todolist)}}},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-app__root",attrs:{id:"root"}},[t._m(0),t._v(" "),o("section",{staticClass:"todo-app__main"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newitem,expression:"newitem"}],staticClass:"todo-app__input",attrs:{id:"todo-input",type:"",placeholder:"What needs to be done?"},domProps:{value:t.newitem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addnew(e)},input:function(e){e.target.composing||(t.newitem=e.target.value)}}}),t._v(" "),o("ul",{staticClass:"todo-app__list",attrs:{id:"todo-list"}},t._l(t.filteredTodos,function(e){return o("li",{staticClass:"todo-app__item"},[o("div",{staticClass:"todo-app__check_box"},[o("label",{staticClass:"container",attrs:{for:"i.id"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"i.completed"}],attrs:{id:"i.id",type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(o){var i=e.completed,n=o.target,l=!!n.checked;if(Array.isArray(i)){var a=t._i(i,null);n.checked?a<0&&t.$set(e,"completed",i.concat([null])):a>-1&&t.$set(e,"completed",i.slice(0,a).concat(i.slice(a+1)))}else t.$set(e,"completed",l)}}}),t._v(" "),o("span",{staticClass:"checkmark"})])]),t._v(" "),o("h1",{staticClass:"todo-app__item-detail",class:{red:e.completed}},[t._v(t._s(e.text))]),t._v(" "),o("button",{staticClass:"todo-app__item-x",on:{click:function(o){return t.deleteli(e)}}},[t._v("X")])])}),0)]),t._v(" "),o("footer",{staticClass:"todo-app__footer",attrs:{id:"todo-footer"}},[o("div",{staticClass:"todo-app__total"},[o("span",{attrs:{id:"todo-count"}},[t._v(t._s(t.remaining)+" left")])]),t._v(" "),o("ul",{staticClass:"todo-app__view-buttons"},[o("li",[o("button",{on:{click:function(e){return t.displayall(1)}}},[t._v("All")])]),t._v("|\n      "),o("li",[o("button",{on:{click:function(e){return t.displayall(2)}}},[t._v("Active")])]),t._v("|\n      "),o("li",[o("button",{on:{click:function(e){return t.displayall(3)}}},[t._v("Completed")])])]),t._v(" "),o("div",{staticClass:"todo-app__clean"},[o("button",{directives:[{name:"show",rawName:"v-show",value:t.todolist.length>t.remaining,expression:"todolist.length > remaining"}],attrs:{id:"button-clean"},on:{click:function(e){return t.clearcompleted()}}},[t._v("Clear completed")]),t._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:t.todolist.length<=t.remaining,expression:"todolist.length <= remaining"}],staticStyle:{visibility:"hidden"},attrs:{id:"button-clean"}},[t._v("Clear completed")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"todo-app__header"},[e("h1",{staticClass:"todo-app__title"},[this._v("todos")])])}]};var d=o("VU/8")(c,r,!1,function(t){o("k7qF")},null,null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v("Click this")]),this._v(" "),e("router-link",{attrs:{to:"/test"}},[e("button",[this._v("go to todolist")])])],1)},staticRenderFns:[]};var u=o("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},p,!1,function(t){o("oGTP")},"data-v-1c3f88dc",null).exports;i.a.use(a.a);var m=new a.a({routes:[{path:"/",name:"HelloWorld",component:u},{path:"/test",name:"test",component:d}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:m,components:{App:l},template:"<App/>"})},gsu9:function(t,e){},k7qF:function(t,e){},oGTP:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a66891bcfc3cdfe62a84.js.map