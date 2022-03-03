// // 引入element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// // 引入antdv
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

// 注册组件
import installer from './defaults'

export * from '@element-plus/components'
export * from '@element-plus/directives'
export * from '@element-plus/hooks'
export * from '@element-plus/tokens'
export { makeInstaller } from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer
