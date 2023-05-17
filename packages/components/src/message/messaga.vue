<template>
  <Transition name="down">
    <div class="sun-message" :style="styleList[props.type as MessageType]" v-show="visible">
      <component class="icon-component" :is="styleList[props.type as MessageType].icon" />
      <span>{{ props.text }}</span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import './style/index.less';
  import { messageProps, MessageType, styleList } from './messageProps';
  import { onMounted, ref } from 'vue';

  const props = defineProps(messageProps);


  let visible = ref<boolean>(false);
  onMounted(() => {
    visible.value = true;
  });

</script>

<style scoped lang="less"></style>
