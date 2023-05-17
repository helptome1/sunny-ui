<template>
  <div class="sun-slider">
    <div class="slider-dot" @mousedown="handleMoveDown" :style="{ left: `${dotX}%` }"></div>
    <div class="slider-bar" :style="progress"></div>
  </div>
</template>

<script setup lang="ts">
  import './style/index.less'
  import { sliderProps } from './slide'
  import { on, off } from '@sunny/hooks'
  import { getCurrentInstance, onMounted, reactive, ref } from 'vue'
  // 组件命名
  defineOptions({ name: 'sun-slider' })
  const porps = defineProps(sliderProps)

  const progress = reactive<Partial<{ width: string; maxWidth: string }>>({})
  const space = ref(0)
  const instance = getCurrentInstance()
  const dotX = ref(0)
  let touchX = ref(0)
  // slider起始位置
  let startX = ref(0)

  const handleMoveDown = (e: MouseEvent) => {
    touchX.value = e.x + 3
    on(document, 'mousemove', handleMouseMove)
    on(document, 'mouseup', () => {
      off(document, 'mousemove', handleMouseMove)
    })
  }

  const handleMouseMove = (event: MouseEvent) => {
    const distance = event.x - startX.value
    if (distance >= 0) {
      const num = Math.floor(distance / space.value)
      if (num <= 100) {
        progress.width = num + '%'
        dotX.value = num
      }

    }
  }

  onMounted(() => {
    useSpace()
    window.addEventListener('resize', () => {
      useSpace()
    })
  })

  const useSpace = () => {
    const el = instance?.vnode.el as HTMLElement
    const ciletRect = el.getBoundingClientRect()
    const clientWidth = ciletRect.width
    startX.value = ciletRect.x;
    progress.maxWidth = clientWidth + 'px'
    space.value = clientWidth / (porps.max - porps.min)
  }
</script>

<style scoped lang="less"></style>
