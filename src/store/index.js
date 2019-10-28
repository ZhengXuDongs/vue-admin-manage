import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import router from './modules/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    router
  }
})
