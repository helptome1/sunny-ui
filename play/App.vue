<template>
  <sun-button type="primary">全局引入</sun-button>
  <Button type="dashed">Dashed Button</Button>
  <Button type="text">Text Button</Button>
  <br />
  <br />
  <!-- slider -->
  <div class="slider">
    <sun-slider></sun-slider>
    <Slider></Slider>
  </div>

  <button @click="showMessage">message button</button>
  <Select size="large"></Select>
</template>

<script setup lang="ts">
  // import Kinesis from './Kinesis.vue'
  import { Button, Message, Slider, Select } from '@sunny/components'

  const showMessage = () => {
    console.log('message')
    Message({ type: 'success', text: 'demo' })
  }
</script>

<style scoped lang="less">
  .slider {
    position: relative;
    width: 600px;
    left: 200px;
  }
</style>
