<template>
  <Transition name="down">
    <div class="sun-message" :style="styles" v-show="visible">
      <component class="icon-component" :is="styleList[props.type].icon" />
      <span>{{ props.text }}</span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import './style/index.less';
  import { messageProps, styleList } from './messageProps';
  import { computed, onMounted, ref } from 'vue';

  const props = defineProps(messageProps);

  let visible = ref<boolean>(false);
  onMounted(() => {
    visible.value = true;
  });
  const styles = computed(() => {
    const style = styleList[props.type];
    Object.assign(style, { top: `${props.offset}px` });
    return style
  });
</script>

<style scoped lang="less"></style>
