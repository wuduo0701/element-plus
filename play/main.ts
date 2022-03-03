import { createApp } from 'vue'

import ElementPlus from 'element-plus' // 本地测试用Element开发
import 'element-plus/dist/index.css' // 本地测试用Element开发

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as antIcons from '@ant-design/icons-vue'

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

  // 全局注册ant所有icon组件
  Object.keys(antIcons).forEach((key) => {
    app.component(key, antIcons[key])
  })
  // antd配置
  app.config.productionTip = false
  app.use(Antd)

  app.use(ElementPlus, { size: 'middle', zIndex: 3000 }) // play 环境注册elementUI

  app.mount('#play')
})()
