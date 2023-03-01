import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/itunesapp/',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
