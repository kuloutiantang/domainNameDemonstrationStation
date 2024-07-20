import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: '大的要来了！'
      }
    }
  ]
})
router.beforeEach((to) => {
  document.title = to.meta.title || '默认标题'
})
router.afterEach(() => {})

export default router
