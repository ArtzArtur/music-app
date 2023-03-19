import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/music-app/',
      name: 'home',
      component: HomeView
    },
    {
      name:'CartView',
      component:CartView
    }
  ]
})

export default router
