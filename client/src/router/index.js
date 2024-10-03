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
    {
      path: '/xText',
      name: 'xText',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/xText.vue')
    }
  ]
})

export default router
