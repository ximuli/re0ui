<template>
  <button class="re0-button" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup(props) {
    const { theme, size } = props
    const classes = computed(() => {
      return {
        [`re0-theme-${theme}`]: theme,
        [`re0-size-${size}`]: size
      }
    })

    return { classes }
  }
}
</script>

<style lang="scss">
@import './../assets/style/variable';

$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;

.re0-button {
  box-sizing: border-box; height: $h; padding: 0 12px; cursor: pointer;
  display: inline-flex; justify-content: center; align-items: center;
  white-space: nowrap; background: white; color: $color;
  border: 1px solid $border-color; border-radius: $radius;
  box-shadow: 0 1px 0 fade-out($color: black, $amount: 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,&:focus {
    color: $colorEmilia; border-color: $colorEmilia;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &.re0-theme-text {
    border: none;
    box-shadow: none;
    color: #333;
    &:hover {
      opacity: 0.8;
    }
  }

  &.re0-theme-link {
    border: none;
    box-shadow: none;
    color: $colorEmilia;
    &:hover {
      opacity: 0.8;
    }
  }

  &.re0-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.re0-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
}
</style>