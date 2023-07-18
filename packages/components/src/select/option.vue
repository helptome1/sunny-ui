<template>
  <li class="select-option">
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { optionProps } from './options'

  const props = defineProps(optionProps)

  const currentLabel = computed(() => {
    return props.label || props.value
  })
</script>

<style scoped lang="less"></style>
