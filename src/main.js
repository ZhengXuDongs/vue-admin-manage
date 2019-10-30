import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Tools from './utils/tools'
import Router from 'vue-router'
import { HttpUtils } from './utils/HttpUtils'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(ElementUI)
Vue.use(Tools)

Vue.prototype.HttpUtils = HttpUtils
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(111, to, from, next)
  if (from.path === '/') {
    const token = window.sessionStorage.getItem('token')
    if (token) { // 判断是否登录
      if (!store.getters.getUserInfo.uid) { // 判断是否刷新过 如果vuex中的信息丢失则已刷新
        store.dispatch('saveAsyncRouteData') // 加载异步路由
      }
    }
    next()
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
