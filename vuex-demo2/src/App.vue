<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <button @click="increment">增加</button>
    <button @click="decrement">减小</button>
    <button @click="incrementAsync">延时增加</button>
    <p>当前数字为：{{count}}</p>
    <p>当前数字为：{{isEvenOrOdd}}</p>


  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    //方式1：通过this.$store访问
    // computed:{
    //   count(){
    //     return this.$store.state.count
    //   }
    // }
    //方式2：通过mapState访问
    // computed:mapState({
    //   // 箭头函数可使代码更简练
    //   // count: state => state.count,
    //   count1: 'count'
    // })
    computed:mapGetters([
      'count',
      'isEvenOrOdd'
    ]),
    methods:mapActions([
      'increment',
      'decrement',
      'incrementAsync'
    ])
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
