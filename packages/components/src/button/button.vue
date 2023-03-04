<template>
  <button class="sun-button" :class="buttonStyle">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';

defineOptions({ name: "sun-button" });
type ButtonProps = {
  type?: string;
};

const buttonProps = defineProps<ButtonProps>()
console.log(buttonProps);

const buttonStyle = computed(() => {
  return {
    [`sun-button--${buttonProps.type}`]: buttonProps.type,
  }
});
</script>


