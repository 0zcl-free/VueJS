import Vue from "vue";

import Vuex from 'vuex'
Vue.use(Vuex)

//定义属性（数据）
const state={
  count:6
}

//定义getters
const getters={
  count: state =>{
    return state.count
  }
}

//定义actions，要执行的操作，如流程判断、异步请求等
const actions={
  increment({commit}){
    commit('increment')  // //提交一个名为increment的变化，名称可自定义，可以认为是类型名
  },
  decrement(context){  // 包含：commit、dispatch、state
    context.commit('decrement')
  },
  incrementAsync({commit,state}){
    var p = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve();
      }, 2000);
    })
    p.then(()=>{
      commit('increment')
    }).catch(()=>{
      console.log('异步操作')
    })
  }
}

const mutations={
  increment(state){
    state.count++
  },
  decrement(state){
    state.count--;
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
