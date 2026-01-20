import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/Home.vue') },
  { path: '/projects', component: () => import('../views/Projects.vue') },
  { path: '/work-experience', component: () => import('../views/Work_Achivements.vue') },
  { path: '/about', component: () => import('../views/About.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

