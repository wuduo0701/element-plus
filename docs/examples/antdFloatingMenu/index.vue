<template>
  <el-antdFloatingMenu
    :target="getTarget"
    :type="floatingMenuConfig.type"
    :data="floatingMenuConfig.data"
    :right="floatingMenuConfig.right"
    :bottom="floatingMenuConfig.bottom"
    :visibility-height="floatingMenuConfig.visibilityHeight"
  >
  </el-antdFloatingMenu>
</template>
<script lang="ts" setup>
const getTarget = () => document.body
const floatingMenuConfig = {
  target: 'main-content',
  type: ['feedback', 'contact', 'backtop'],
  data: {
    feedback: {
      icon: '',
      type: 'links',
      links: [
        {
          name: '广告数据产品门户',
          url: 'http://dpp.jd.com/',
        },
      ],
    },
    contact: {
      icon: '',
      email: [
        {
          name: 'ads-datateam-opn',
          code: 'ads-datateam-opn@jd.com',
        },
      ],
      dongdong: [
        {
          erp: 'chenxiulin3',
          name: '陈秀林',
        },
      ],
    },
    backtop: {
      icon: '',
    },
  },
  right: 20,
  bottom: 30,
  visibilityHeight: 100,
}
</script>
