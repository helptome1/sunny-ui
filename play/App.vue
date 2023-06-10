<template>
  <sun-button type="primary">全局引入</sun-button>
  <Button type="dashed">Dashed Button</Button>
  <Button type="text">Text Button</Button>
  <br />
  <br />
  <!-- slider -->
  <div class="slider">
    <sun-slider></sun-slider>
  </div>
  <!-- <sun-message></sun-message> -->
  <!-- <MessageCom type="message" :text="message"></MessageCom> -->
  <button @click="showMessage">message button</button>
  <!-- <Kinesis></Kinesis> -->
  <!-- number滚动流 -->
  <sun-number :number="5 "></sun-number>
  <Number :number="4"></Number>
</template>

<script setup lang="ts">
  // import Kinesis from './Kinesis.vue'
  import { Button, Number, Message } from '@sunny/components'

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
