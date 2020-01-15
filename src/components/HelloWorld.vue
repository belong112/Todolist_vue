<template>
  <div class="hello">
    <h1>Click it !</h1>
    <router-link to="/test"><button>go to todolist</button></router-link>
    <router-link to="/list"><button>go to peoplelist</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
button{
  margin: 10px;
  border: #777 solid;
  color: #42b983;
  background-color: #eee;
  width: 200px;
  font-size: 40px;
  border-radius: 10px;
  transition: .3s;
}
button:hover{
  transform: scale(1.1);
}
h1, h2 {
  color: #42b983;
}
</style>
