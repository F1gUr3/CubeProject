import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'
import GalleryView from '../views/GalleryView.vue'
import CubeView from '../views/CubeView.vue'
import impressumView from '../views/impressumView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: GalleryView
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: impressumView
  },
    {
        path: '/cube',
        name: 'cube',
        component: CubeView
    }
  ]
})

export default router