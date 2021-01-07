<template>
  <button class="re0-switch-wrapper" :class="{ checked: value }" @click="toggle">
    <span class="re0-switch-inner"></span>
  </button>
  <span>{{ value }}</span>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
  }
}
</script>

<style lang="scss">
@import './../assets/style/variable';

$h: 22px;
$h2: $h - 4px;

.re0-switch-wrapper {
  height: $h;
  width: $h*2;
  border: none;
  background: $colorPack;
  border-radius: $h/2;
  position: relative;
  &:focus {
    outline: none;
  }
  &.checked {
    background: $colorEmilia;
    > .re0-switch-inner {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  .re0-switch-inner {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: left 250ms;
  }
}
</style>