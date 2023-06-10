<template>
  <div class="box">
    <span class="num" :style="`transform: translate(-50%, -${number * 10}%)`">0123456789</span>
  </div>
</template>

<script setup lang="ts">
import './style/index.less'
defineProps({
  number: {
    type: Number,
    default: 5,
    required: true,
  },
});
</script>

<style lang="less" scoped>

</style>

