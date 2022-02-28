import { buildProps, iconPropType } from '@element-plus/utils'

export const floatingMenuProps = buildProps({
  type: String,
  text: {
    type: String,
    default: 'Button',
  },
})
export type FloatingMenuInstance = InstanceType<typeof FloatingMenu>
