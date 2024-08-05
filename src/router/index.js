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
    },
    {
      path: '/understand',
      name: '知识碎片',
      component: () => import('../views/pages/knowledgeFragments.vue'),
      meta: {
        title: '知识碎片'
      }
    },
    {
      path: '/chart',
      name: '图表',
      component: () => import('../views/pages/chartTesting.vue'),
      meta: {
        title: '图表测试'
      }
    },
    {
      path: '/ws',
      name: 'WebSocket',
      component: () => import('../views/pages/wsTesting.vue'),
      meta: {
        title: 'Socket.io测试'
      }
    }
  ]
})
router.beforeEach((to) => {
  document.title = to.meta.title || '默认标题'
})
router.afterEach(() => {})

export default router
