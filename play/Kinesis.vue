<template>
  <div class="kinesis-container">
    <kinesis-container perspective="1000">
      Here, you can put
      <div class="kinesis-body">
        <h1 class="text">
          <kinesis-element :strength="20" type="depth">
            <!-- <kinesis-element :strength="20" type="depth"><span>w</span> </kinesis-element>
            <kinesis-element :strength="20" type="depth_inv"><span>h</span> </kinesis-element>
            <span>a</span>
            <kinesis-element :strength="20" type="depth"><span>t</span> </kinesis-element>
            <span>e</span>
            <kinesis-element :strength="20" type="depth_inv"><span>v</span> </kinesis-element>
            <kinesis-element :strength="20" type="depth"><span>e</span> </kinesis-element>
            <span>r</span> -->
            <span>w</span><span>h</span><span>a</span><span>t</span><span>e</span><span>v</span><span>e</span><span>r</span>
          </kinesis-element>
        </h1>
      </div>
      <!-- <kinesis-element :strength="20" type="depth_inv">
        <div class="kinesis-body">content!</div>
      </kinesis-element> -->
    </kinesis-container>
    <div class="show-text">
      <span ref="showText"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { KinesisContainer, KinesisElement } from 'vue-kinesis'

  const showText = ref()
  console.log(showText)
  let textContent = `what ever you want. you will see the effect when you scroll the page. 
  And you can change the strength of the effect by changing the strength prop of the kinesis-element.
  You can also change the type of the effect by changing the type prop of the kinesis-element.
  But you should know that the type prop only accept two values: depth and depth_inv.
  What is depth and depth_inv? You can see the effect when you scroll the page.
  And you can also change the perspective of the effect by changing the perspective prop of the kinesis-container.
  To be honest, I don't know what is perspective. But you can see the effect when you scroll the page.
  So, enjoy it!
  `
  function showTextContent() {
    if (textContent.length > 0) {
      showText.value.innerHTML += textContent.charAt(0)
      textContent = textContent.substring(1)
    }
  }
  setInterval(showTextContent, 16)
</script>

<style scoped lang="less">
  .kinesis-container {
    width: 500px;
    height: 300px;
    padding: 50px 50px;
    margin: 0 auto;
    .kinesis-body {
      height: 100px;
      margin: 0 auto;
      text-align: center;
      background-color: pink;
      .text {
        display: flex;
        span {
          transition-property: transform;
          transition-duration: 1000ms;
          transform-origin: center center;
        }
      }
    }
    .show-text {
      padding: 5px 10px;
      border: 1px solid gray;
      border-radius: 5px;
      line-height: 30px;
    }
  }
</style>
