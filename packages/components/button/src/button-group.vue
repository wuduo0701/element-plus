<template>
  <div :class="`${ns.b('group')}`">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { provide, reactive, toRef } from 'vue'
import { buttonGroupContextKey } from '@element-plus/tokens'
import { useNamespace } from '@element-plus/hooks'
import { buttonGroupProps } from './button-group'

defineOptions({
  name: 'ElButtonGroup',
})
const props = defineProps(buttonGroupProps)
provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  })
)
const ns = useNamespace('button')
</script>
