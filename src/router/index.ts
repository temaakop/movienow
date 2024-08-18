import { createRouter, createWebHistory } from 'vue-router'
import FilmsView from '@/views/FilmsView.vue'
import FIlmDetailsView from '@/views/FIlmDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FilmsView
    },
    {
      path: '/film/:id',
      name: 'FilmDetail',
      component: FIlmDetailsView,
      props: true
    }
  ]
})

export default router
