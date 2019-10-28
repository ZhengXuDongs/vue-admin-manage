import router, { asyncRouterMap } from '@/router'
import { formatMenuData } from '../../utils/tools'
import role from '../../assets/role'
export default {
  state: {
    asyncRouteData: []
  },
  getters: {
    getAsyncRouteInfo(state) {
      state.asyncRouteData = JSON.parse(window.sessionStorage.getItem('asyncRouteData'))
      return state.asyncRouteData
    }
  },
  actions: { // 异步
    async saveAsyncRouteData({ commit, state }, params) {
      console.log(111)
      const Array = await formatMenuData(role, asyncRouterMap)
      window.sessionStorage.setItem('asyncRouteData', JSON.stringify(Array))
      Array.push({ path: '*', redirect: '/error' })
      router.addRoutes(Array)
      console.log(666, router.currentRoute)
      commit('saveAsyncRoute', Array)
    }
  },
  mutations: { // 同步
    saveAsyncRoute(state, params) {
      state.asyncRouteData = params
    }
  }
}
