import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import VueRouterExample from '@/components/VueRouterExample/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/vue-router-example',
      component: VueRouterExample
    }
  ]
})
