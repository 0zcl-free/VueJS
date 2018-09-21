<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h3>
      <!-- 通过router-link来导航，to属性指定链接， 默认 会渲染成a标签 -->
      <router-link to="/home">Home</router-link>
      <router-link to="/user">User</router-link>
    </h3>
    <div>
      <!-- 路由出口，路由匹配到的组件将在这里渲染 -->
      <router-view></router-view>
    </div>
    <button @click="send">发送AJAX请求</button>

    <MyButton @click.native="send"></MyButton>

  </div>
</template>

<script>
import MyButton from './components/MyButton'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    MyButton
  },
  methods:{
    send(){
      this.$http.get('https://api.github.com/users/0zcl')
        .then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
      })
    }
  },
  watch:{
    $route:function (newValue, oldValue) {
      console.log('路由发生变化，跳转到：'+newValue.path);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
