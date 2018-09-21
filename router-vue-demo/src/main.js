import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config'
import axios from 'axios'

//Vue.use() 明确地安装路由功能
Vue.use(VueRouter)

//3.创建路由实例,然后传入路由配置
var router= new VueRouter(routerConfig);   //缩写，相当于routes:routes

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
