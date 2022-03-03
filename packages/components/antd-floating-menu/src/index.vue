/*eslint-disable*/
<template>
  <div
    v-if="type && data"
    class="floating-menu"
    :style="{
      right: styleRight,
      bottom: styleBottom,
    }"
  >
    <div
      class="jac-menu-wrapper"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
    >
      <!-- 问题反馈 -->
      <a-popover
        v-if="type.includes('feedback') && data.feedback"
        placement="left"
        :trigger="handleFB()"
      >
        <div
          class="jac-feedback jac-floatmenu-icon"
          :style="
            `background: ${data.feedback.background}` || 'background: #FFF'
          "
        >
          <slot name="feedback">
            <component
              :is="data.feedback.icon || 'MessageOutlined'"
            ></component>
          </slot>
          <!-- <template slot="feedback">
            <component :is="data.feedback.icon || 'MessageOutlined'"></component>
          </template> -->
        </div>
        <template #content>
          <div v-if="handleFB() === 'hover'">
            <div class="jac-feedback-img-wrapper">
              <img :src="data.feedback.img.url" class="jac-feedback-img" />
              <div
                v-if="
                  data.feedback.img.info && data.feedback.img.info.length <= 20
                "
                class="jac-feedback-info"
              >
                {{ data.feedback.img.info }}
              </div>
              <div v-else class="jac-feedback-info">
                {{ longtext }}
                <div v-if="longtext">
                  <span
                    v-if="longtext.length <= 20"
                    class="jac-feedback-info-detail"
                    @click="isLongText(1)"
                    >详细 ></span
                  >
                  <span
                    v-else
                    class="jac-feedback-info-detail"
                    @click="isLongText(0)"
                    >收起 ></span
                  >
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div v-for="item in data.feedback.links" :key="item.name">
              <a :href="item.url" target="_blank">{{ item.name }}</a>
            </div>
          </div>
        </template>
      </a-popover>
      <!-- 联系我们 -->
      <a-popover
        v-if="type.includes('contact') && data.contact"
        placement="left"
        trigger="click"
      >
        <div
          class="jac-contactus jac-floatmenu-icon"
          :style="
            `background: ${data.contact.background}` || 'background: #FFF'
          "
        >
          <slot name="contactus">
            <component
              :is="data.contact.icon || 'CustomerServiceOutlined'"
            ></component>
          </slot>
          <!-- <template slot="contactus">
            <component :is="data.contact.icon || 'CustomerServiceOutlined'"></component>
          </template> -->
        </div>
        <template #content>
          <div
            v-if="data.contact.dongdongGroup != ''"
            class="jac-contactus-flex-wrapper"
          >
            <div class="jac-contactus-flex-cell jac-contactus-flex-title">
              <span class="jac-contactus-con-group"></span>
            </div>
            <div class="jac-contactus-flex-cell">
              <div v-for="group in data.contact.dongdongGroup" :key="group.id">
                <a :href="'timline://chat/?topin=' + group.id + '&type=2'">
                  {{ group.name }}
                </a>
              </div>
            </div>
          </div>
          <div
            v-if="data.contact.dongdong != ''"
            class="jac-contactus-flex-wrapper"
          >
            <div class="jac-contactus-flex-cell jac-contactus-flex-title">
              <span class="jac-contactus-con-dongdong"></span>
            </div>
            <div class="jac-contactus-flex-cell">
              <div v-for="dd in data.contact.dongdong" :key="dd.erp">
                <a :href="'timline://chat/?topin=' + dd.erp">
                  {{ dd.name }}
                </a>
              </div>
            </div>
          </div>
          <div
            v-if="data.contact.email && data.contact.email != ''"
            class="jac-contactus-flex-wrapper"
          >
            <div class="jac-contactus-flex-cell jac-contactus-flex-title">
              <span class="jac-contactus-con-email"></span>
            </div>
            <div class="jac-contactus-flex-cell">
              <div v-for="email in data.contact.email" :key="email.code">
                <a :href="'mailto:' + email.code">
                  {{ email.name }}
                </a>
              </div>
            </div>
          </div>
        </template>
      </a-popover>
      <!-- 回到顶部 -->
      <div
        v-if="state.visible"
        class="jac-backtop"
        :style="`background: ${data.backtop.background}` || 'background: #FFF'"
      >
        <a-back-top
          :target="target"
          :visibility-height="visibilityHeight"
          :style="{
            right: styleRight,
            bottom: styleBottom,
          }"
          class="jac-floatmenu-icon"
        >
          <slot name="backtop">
            <component :is="data.backtop.icon || 'CaretUpOutlined'"></component>
          </slot>
          <!-- <template slot="backtop">
            <component :is="data.backtop.icon || 'CaretUpOutlined'"></component>
          </template> -->
        </a-back-top>
      </div>
      <div v-else class="jac-backtop-blank"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed, onMounted, onUnmounted } from 'vue'
import { throttle } from 'lodash-es'
import { antdFloatingMenuProps } from './index'

interface State {
  element: string | null
  container: string | null
  visible: boolean
  longText: string
  mouseIn?: boolean
  throttledScrollHandler: any
}

defineOptions({
  name: 'AntdFloatingMenu',
})

const props = defineProps(antdFloatingMenuProps)

const state = reactive<State>({
  element: null,
  container: null,
  visible: false, // 回顶图标是否可见
  longText: '', // 长文本
  mouseIn: false,
  throttledScrollHandler: null, // 节流处理对象
})

const styleBottom = computed(() => `${props.bottom}px`)
const styleRight = computed(() => `${props.right}px`)

onMounted(() => {
  // 节流处理
  state.throttledScrollHandler = throttle(onScroll, 300)
  props.target().addEventListener('scroll', state.throttledScrollHandler) // 监听滚动事件
})

onUnmounted(() => {
  props.target().removeEventListener('scroll', state.throttledScrollHandler) // 去除监听事件
})

const onScroll = () => {
  const scrollTop = props.target().scrollTop || 0
  state.visible = scrollTop > props.visibilityHeight // 比可视化距离大/回顶按钮可见
}

// 是否显示长文本
const isLongText = (flag: number) => {
  state.longtext = flag
    ? props.data.feedback.img.info
    : props.data.feedback.img.info.slice(0, 20)
}

//  鼠标进入
const mouseEnter = () => {
  state.mouseIn = true
}

// 鼠标离开
const mouseLeave = () => {
  state.mouseIn = false
}

// 判断是hover还是click,img就是hover，links就是click
const handleFB = () => {
  if (!props.data.feedback) return
  if (
    props.data.feedback.type !== 'links' &&
    props.data.feedback.type !== 'img'
  ) {
    throw new Error(
      'The selected type is wrong, please select the correct type'
    )
  }
  return props.data.feedback.type === 'img' ? 'hover' : 'click'
}
</script>
