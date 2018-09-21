import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import goods from './modules/goods'
import seller from './modules/seller'
import rating from './modules/ratings'


export default new Vuex.Store({
  getters,
  actions,
  mutations,
  modules:{
    goods,
    seller,
    rating,
  }
})

