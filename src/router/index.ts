import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
// import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
  ]
})

export default router
