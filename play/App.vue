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
  <Message type="message"></Message>
  <!-- <Message type="success"></Message>
  <Message type="danger"></Message> -->
</template>

<script setup lang="ts">
  import { Button, Slider, Message } from '@sunny/components'
</script>

<style scoped lang="less"> 
.slider{
  position: relative;
  width: 600px;
  left: 200px;
}
</style>
