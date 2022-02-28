import { createApp } from 'vue'
import ElementPlus from 'element-plus' // 本地测试用Element开发
import 'element-plus/dist/index.css' // 本地测试用Element开发
import '@element-plus/theme-chalk/src/index.scss'
;(async () => {
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default
  const app = createApp(App)

  app.use(ElementPlus, { size: 'middle', zIndex: 3000 }) // play 环境注册elementUI

  app.mount('#play')
})()
