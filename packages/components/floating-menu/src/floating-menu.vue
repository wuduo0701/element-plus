<template>
  <el-button :type="type">{{ text }}</el-button>
</template>

<script lang="ts" setup>
import { computed, inject, Text, ref, useSlots } from 'vue'
import { floatingMenuProps } from './floating-menu'

defineOptions({
  name: 'ElFloatingMenu',
})

defineProps(floatingMenuProps)
</script>
