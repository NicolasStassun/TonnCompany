import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/ItemsView.vue'
import PerfilView from '../views/PerfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/items',
      name: 'Items',
      component: ItemView
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: PerfilView
    }
  ]
})

export default router
