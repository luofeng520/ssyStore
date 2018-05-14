import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login1',
      // 懒加载，减少压力
      component: resolve => require(['@/pages/login/login1'], resolve)
    },
    {
      path: '/Login2',
      name: 'Login2',
      component: resolve => require(['@/pages/login/login2'], resolve)
    },
    {
      path: '/reg1',
      name: 'reg1',
      component: resolve => require(['@/pages/reg/reg1'], resolve)
    },
    {
      path: '/start3',
      name: 'start3',
      component: resolve => require(['@/pages/start/start3'], resolve)
    },
    {
      path: '/reg2',
      name: 'reg2',
      component: resolve => require(['@/pages/reg/reg2'], resolve)
    },
    {
      path: '/forget1',
      name: 'forget1',
      component: resolve => require(['@/pages/forget/forget1'], resolve)
    },
    {
      path: '/forget2',
      name: 'forget2',
      component: resolve => require(['@/pages/forget/forget2'], resolve)
    }
  ]
})
