import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import client1 from '../clients/client1.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/client1',
    name: 'Client1',
    component: client1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
