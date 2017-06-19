import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BootstrapVueExample from '@/components/BootstrapVueExample/index'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/bvexample',
      component: BootstrapVueExample
    },
    {
      path: '/admin',
      component: Admin
    }
  ]
})
