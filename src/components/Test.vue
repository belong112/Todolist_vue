<template>
  <div id="root" class="todo-app__root">
    <header class="todo-app__header">
      <h1 class="todo-app__title">Todos</h1>
    </header>
    <section class="todo-app__main">
      <input class="todo-app__input" id="todo-input" type="" placeholder="What needs to be done?" v-model="newitem" @keyup.enter="addnew">
      <ul class="todo-app__list" id="todo-list">
        <li class="todo-app__item" v-for="i in filteredTodos">
          <div class="todo-app__check_box">
            <label for="i.id" class="container">
              <input id='i.id' type="checkbox" v-model="i.completed">
              <span class="checkmark"></span>
            </label> 
          </div>
          <h1 class="todo-app__item-detail" v-bind:class="{red: i.completed}">{{i.text}}</h1>
          <button class="todo-app__item-x" @click="deleteli(i)">X</button>
        </li>
      </ul>
    </section>
    <footer class="todo-app__footer" id="todo-footer">
      <div class="todo-app__total">
        <span id="todo-count">{{remaining}} left</span>
      </div>
      <ul class="todo-app__view-buttons">
        <li><button @click="displayall(1)">All</button></li>|
        <li><button @click="displayall(2)">Active</button></li>|
        <li><button @click="displayall(3)">Completed</button></li>
      </ul>
      <div class="todo-app__clean">
        <button id="button-clean" v-show="todolist.length > remaining" @click="clearcompleted()">Clear completed</button>
        <button id="button-clean" style="visibility: hidden;" v-show="todolist.length <= remaining" >Clear completed</button>
      </div>
    </footer>
  </div>
</template>

<script>
var filters = {
  all: function (todos) {
    return todos
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}

export default {
  name: 'HelloWorld',
  data () {
    return{
      visability : "all",
      newitem : "",
      lodaing : true,
      todolist : [
        { id:'1',text:'play',completed:false},
        { id:'2',text:'work',completed:true},
        { id:'3',text:'eat',completed:false}
      ]
    }
  },
  methods:{
     clearcompleted:function(){
     var temp = this.todolist.filter(function(i){
        if(!i.completed)
          return i
      })
     this.todolist = temp
    },
    addnew:function(){
      var value = this.newitem
      if(!value){
        return
      }
      this.todolist.push({
        text:value,
        completed:false
      })
      this.newitem=""
    },
    check_li:function(i){
      i.completed = !i.completed
    },
    displayall:function(i){
      if(i==1)
        this.visability = 'all'
      else if(i==2)
        this.visability = 'active'
      else
        this.visability = 'completed'
    },
    deleteli:function(i){
      this.todolist.splice(this.todolist.indexOf(i),1)
    }
  },
  computed:{
    remaining: function () {
      return filters.active(this.todolist).length
    },
    filteredTodos: function () {
      return filters[this.visability](this.todolist)
    }
  }
}
</script>
<style type="text/css">
  @import '../assets/styles.css';
</style>
