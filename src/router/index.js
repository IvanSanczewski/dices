import { createRouter, createWebHistory } from 'vue-router'

import DiceSum from '@/views/DiceSum.vue'
import Home from '@/views/Home.vue'
import Scores from '@/views/Scores.vue'
import Colors from '@/views/Colors.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/diceSum',
      name: 'diceSum',
      component: DiceSum
    },
    {
      path: '/colors',
      name: 'colors',
      component: Colors
    },
    {
      path: '/scores',
      name: 'scores',
      component: Scores
    },
    
  ]
})

export default router
