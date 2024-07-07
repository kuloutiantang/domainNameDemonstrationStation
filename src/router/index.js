import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: '首页'
      }
    }
  ]
})
router.beforeEach((to) => {
  document.title = to.meta.title || '默认标题'
})
router.afterEach((to) => {
  document.title = to.meta.title || '默认标题'
})

export default router
