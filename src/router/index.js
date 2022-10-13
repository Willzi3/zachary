import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/Landing.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/purchase',
    name: 'Buy',
    component: () => import('../views/Buy.vue')
  },
  {
    path: '/sell',
    name: 'Sell',
    component: () => import('../views/Sell.vue')
  },
  {
    path: '/rent',
    name: 'Rent',
    component: () => import('../views/Rent.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
