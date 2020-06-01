import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import Content from '../views/Content.vue'
import Lookup from '../views/lookup/Lookup.vue'

import Account from '../views/account/Account.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          component: Content
        },
        {
          path: 'lookup',
          component: Lookup
        },
        {
          path: 'account',
          component: Account
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
