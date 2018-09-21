<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Headers></Headers>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <Detail></Detail>
    <router-view></router-view>
  </div>

</template>

<script>
import Headers from './components/headers/headers'
import Detail from './components/detail/detail'

export default {
  name: 'App',
  components:{
    Headers,
    Detail,
  }
}
</script>

<style lang="less" scoped>
  #app .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    .tab-item{
      flex: auto;
      text-align: center;
      & > a{  // sass的语法，代表上一级选择器
        font-size: 14px;
        display: block;
        &.active{
          color:#ff7300;
        }
      }
    }
  }
</style>
