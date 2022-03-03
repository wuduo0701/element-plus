// import ElementPlus from 'element-plus'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as antIcons from '@ant-design/icons-vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

import VPApp, { globals, NotFound } from '../vitepress'
import { define } from '../utils/types'

// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

import type { Theme } from 'vitepress'
export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus, { size: 'small', zIndex: 3000 })

    // 全局注册ant所有icon组件
    Object.keys(antIcons).forEach((key) => {
      app.component(key, antIcons[key])
    })
    // antd配置
    app.config.productionTip = false
    app.use(Antd)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
