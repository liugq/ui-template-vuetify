import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
/* 
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
 import Content from '../views/Content.vue'
import Lookup from '../views/lookup/Lookup.vue'
import Account from '../views/account/Account.vue' 
*/

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'content',
        component: () => import(/* webpackChunkName: "content" */ '../views/Content.vue')
      },
      {
        path: 'lookup',
        name: 'lookup',
        component: () => import(/* webpackChunkName: "lookup" */ '../views/lookup/Lookup.vue')
      },
      {
        path: 'account',
        name: 'account',
        /*component: Account*/
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "account" */ '../views/account/Account.vue')
      },
      {
        path: 'accountcard',
        name: 'accountcard',
        component: () => import(/* webpackChunkName: "accountcard" */ '../views/account/AccountCard.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '*',
    component: NotFound
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
