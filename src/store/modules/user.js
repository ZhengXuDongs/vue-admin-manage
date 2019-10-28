import store from '../../store'
export default {
  state: {
    user: {}
  },
  getters: {
    getUserInfo(state) {
      return state.user
    }
  },
  actions: { // 异步加载
    saveUserInfoData({ commit, state }, params) {
      // 登录获取用户信息
      window.sessionStorage.setItem('token', '125445sasasaasda')
      window.sessionStorage.setItem('userInfo', JSON.stringify(params))
      // 动态加载路由
      store.dispatch('saveAsyncRouteData')
      // 保存用户信息
      commit('saveUserInfo', params)
    }
  },
  mutations: { // 同步加载
    saveUserInfo(state, params) {
      state.user = { ...state.user, ...params }
    }
  }
}
