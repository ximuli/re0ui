<template>
  <div class="re0-tabs">
    <div class="re0-tabs-nav">
      <div class="re0-tabs-nav-item" v-for="(title, index) in titles" :key="index">
        {{ title }}
      </div>
    </div>
    <div class="re0-tabs-content">
      <component v-for="(item, index) in defaults" :key="index" :is="item"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'

export default {
  setup(props, context) {
    console.log(context.slots.default())
    const defaults = context.slots.default()
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const titles = defaults.map(tag => {
      return tag.props.title
    })
    return { defaults, titles }
  }
}
</script>

<style lang="scss">
@import './../../assets/style/variable';

.re0-tabs {
  .re0-tabs-nav {
    display: flex;
    color: #333;
    border-bottom: 1px solid #d9d9d9;
    .re0-tabs-nav-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $colorEmilia;
      }
    }
  }

  .re0-tabs-content {
    padding: 8px 0;
  }
}
</style>