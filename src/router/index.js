
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import client1 from '../clients/client1/client1.vue'
import client2 from '../clients/client2/client2.vue'
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
  },
  {
    path: '/client2',
    name: 'Client2',
    component: client2
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
