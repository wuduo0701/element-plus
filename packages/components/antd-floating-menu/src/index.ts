import { buildProps } from '@element-plus/utils'

export const antdFloatingMenuProps = buildProps({
  type: { type: Array, default: [] }, // 按钮类型
  data: { type: Object, default: {} }, // 详情
  visibilityHeight: { type: Number, default: 200 }, // 滚动高度达到此参数值才出现回到顶部按钮
  right: { type: Number, default: 10 }, // 页面右边距离
  bottom: { type: Number, default: 10 }, // 页面底部距离
  target: { type: Function, default: () => document.body }, // 滚动触发对象
})
// export type FloatingMenuInstance = InstanceType<typeof FloatingMenu>
