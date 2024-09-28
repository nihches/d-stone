import { createRouter, createWebHistory } from 'vue-router'
import DStone from '../views/DStone.vue'
import RegisterU from '@/components/RegisterU.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DStone',
      component: DStone
    },
    {
      path: '/register',
      name: 'registerU',
      component: RegisterU
    },
  ]
})

export default router
