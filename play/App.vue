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
  <!-- <Slider></Slider> -->
</template>

<script setup lang="ts">
  import { Button, Slider } from '@sunny/components'
</script>

<style scoped lang="less"> 
.slider{
  position: relative;
  width: 600px;
  left: 200px;
}
</style>
