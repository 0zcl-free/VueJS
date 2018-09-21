/**
 *用户模块
 **/

import types from '../mutation-types'

const state={
  count:6
}

var getters={
  count(state){
    return state.count;
  }
}


//定义actions，要执行的操作，如流程判断、异步请求等
const actions={
  increment({commit}){
    commit(types.INCREMENT)  // //提交一个名为increment的变化，名称可自定义，可以认为是类型名
  },
  decrement(context){  // 包含：commit、dispatch、state
    context.commit(types.DECREMENT)
  },
}

const mutations={
  // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
  [types.INCREMENT](state){  // types.INCREMENT 是一个字符串
    state.count++
  },
  [types.DECREMENT](state){
    state.count--;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
