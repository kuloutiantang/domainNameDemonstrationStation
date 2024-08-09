import 'github-markdown-css' // 引入markdown样式
import './assets/main.css' // 引入项目全局样式

import 'virtual:uno.css' // 引入unocss

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
