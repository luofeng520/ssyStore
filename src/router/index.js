import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      // 懒加载，减少压力
      component: resolve => require(['@/pages/login'], resolve)
    },
    {
      path: '/reg',
      name: 'Reg',
      // 懒加载，减少压力
      component: resolve => require(['@/pages/reg/reg1'], resolve)
    }
  ]
})
