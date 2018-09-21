import types from '../mutation-types'
import axios from 'axios'

const state = {
  count: 5,
  goods: []
}

const getters = {
  count: state => {
    console.log('getters count', state.count)
    return state.count
  },
  goods: state=>{
    return state.goods
  }
}

const actions = {
  getGoods({commit,state}){
    console.log('getGoods')
    axios.get('/api/goods').then(resp => {
      // console.log(resp)
      if(resp.data.errno==0){
        commit(types.GET_GOODS,resp.data.data);
      }
    });
  }
}

const mutations = {
  [types.GET_GOODS](state, data){  // 整个对象都作为载荷传给 mutation 函数
    state.goods = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
