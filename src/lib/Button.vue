<template>
  <button class="re0-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="re0-button-loading"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
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
    },
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { theme, size, level } = props
    const classes = computed(() => {
      return {
        [`re0-theme-${theme}`]: theme,
        [`re0-size-${size}`]: size,
        [`re0-level-${level}`]: level
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

  &.re0-theme-button {
    &.re0-level-main {
      background: $colorEmilia;
      color: #ffffff;
      border-color: $colorEmilia;
      &:hover, &:focus {
        background: darken($colorEmilia, 10%);
        border-color: darken($colorEmilia, 10%);
      }
    }
    &.re0-level-danger {
      background: $colorReinhard;
      color: #ffffff;
      border-color: $colorReinhard;
      &:hover, &:focus {
        background: darken($colorReinhard, 10%);
        border-color: darken($colorReinhard, 10%);
      }
    }
  }
  &.re0-theme-link {
    &.re0-level-main {
      color: $colorEmilia;
      &:hover, &:focus {
        color: darken($colorEmilia, 10%);
      }
    }
    &.re0-level-danger {
      color: $colorReinhard;
      &:hover, &:focus {
        color: darken($colorReinhard, 10%);
      }
    }
  }
  &.re0-theme-text {
    &.re0-level-main {
      color: $colorEmilia;
      &:hover, &:focus {
        color: darken($colorEmilia, 10%);
      }
    }
    &.re0-level-danger {
      color: $colorReinhard;
      &:hover, &:focus {
        color: darken($colorReinhard, 10%);
      }
    }
  }

  &.re0-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $colorPack;
      &:hover {
        border-color: $colorPack;
      }
    }
  }
  &.re0-theme-link, &.re0-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $colorPack;
    }
  }

  > .re0-button-loading {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $colorEmilia $colorEmilia $colorEmilia transparent;
    border-style: solid;
    border-width: 2px;
    animation: re0-button-loading-spin 1s infinite linear;
  }
}

@keyframes re0-button-loading-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>