import Vue from 'vue'
import VueRouter from 'vue-router'
import order from './order'
import system from './system'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/error',
    name: '404页面',
    code: 'Error',
    component: () => import('../views/error')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

export const asyncRouterMap = [
  {
    path: '/home',
    name: '首页',
    code: 'Index',
    redirect: '/home/index',
    meta: {},
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '/home/index',
        name: '首页',
        code: 'Home',
        isSingle: false,
        image: require('../assets/img/icon/home.png'),
        breadcrumbData: [{ name: '首页', path: '/home/index' }],
        component: () => import('../views/home/index')
      },
      order,
      system
    ]
  }
]
