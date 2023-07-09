<template>
  <div class="sun-select">
    <div 
      class="sun-select-input" 
      :class="{ 'is-foucs': isFoucs }" 
      :style="style" 
      @click="clickEvent"
    >
      <input class="select-input_inner" type="text" readonly autocomplete="off" :tabindex="0" :placeholder="props.placeholder" />
    </div>
    <div class="sun-select-option-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import './style/index.less'
  import { selectProps, SIZE } from './select'
  import { computed, ref } from 'vue'
  defineOptions({ name: 'sun-select' })

  const props = defineProps(selectProps)

  const style = computed(() => {
    return {
      width: SIZE[props.size as keyof typeof SIZE]
    }
  })
  const isFoucs = ref(false)
  const clickEvent = () => {
    console.log('click')
    isFoucs.value = !isFoucs.value
  }
</script>

<style scoped lang="less"></style>
