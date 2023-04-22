import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import DiceSum from '@/views/DiceSum.vue'
import Numbers from '@/views/Numbers.vue'
import Colors from '@/views/Colors.vue'
import HighScores from '@/views/HighScores.vue'
import Signin from '@/components/Signin.vue'
import Login from '@/components/Login.vue'


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
      path: '/numbers',
      name: 'numbers',
      component: Numbers
    },
    {
      path: '/colors',
      name: 'colors',
      component: Colors
    },
    {
      path: '/highScores',
      name: 'highScores',
      component: HighScores
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
