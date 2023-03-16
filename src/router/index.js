import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('../views/WorksPage.vue')
  },
  {
    path: '/works/:day',
    name: 'day',
    component: () => import('../views/WorksDayPage.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: () => import('../views/TeamMembers.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
