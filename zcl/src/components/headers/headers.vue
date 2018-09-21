<template>
    <div class="header">
      {{msg}}
      <img :src="seller.avatar" @click="showDetail">
      <h2>1{{count}}</h2>
      <!--<h2>{{seller}}</h2>-->

    </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    name: "headers",
    data(){
      return {
        msg: 'welcome to zcl'
      }
    },
    created(){
      console.log('headers begin created')
      this.$store.dispatch('getGoods');
      this.$store.dispatch('getSeller');
    },
    computed:{
      ...mapState({
        count(state){
          return state.goods.count
        },
        seller(state){
          return state.seller.seller
        }
      }),
      ...mapGetters([
        'seller'
      ])
    },
    methods:{
      showDetail(){
        this.$store.dispatch('showDetail')
      }
    }
  }
</script>

<style lang="less" scoped>
  .header {
    height: 134px;
    background-color: rgba(7, 17, 27, 0.1);
    font-size: 14px;
    img{
      width: 64px;
      height:64px;
      border-radius: 2px;
    }
  }
</style>
