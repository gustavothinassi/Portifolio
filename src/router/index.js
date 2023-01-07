import { createRouter, createWebHistory } from 'vue-router'

const Page = () => import('../views/Page/index.vue')

const routes = [
  {
    path: '/:sectionName?',
    name: 'Page',
    component: Page
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Page' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
