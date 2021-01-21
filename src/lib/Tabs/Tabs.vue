<template>
  <div class="re0-tabs">
    <div class="re0-tabs-nav" ref="container">
      <div class="re0-tabs-nav-item" :class="{ selected: title === selected }"
        v-for="(title, index) in titles" :key="index"
        :ref="el => { if (el) navItems[index] = el }" @click="onSelect(title)">
        {{ title }}
      </div>
      <div ref="indicator" class="re0-tabs-nav-indicator"></div>
    </div>
    <div class="re0-tabs-content">
      <component class="re0-tabs-content-item"
        :class="{ selected: item.props.title === selected }"
        v-for="(item, index) in defaults" :key="index" :is="item"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
import Tab from './Tab.vue'

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([])
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const getTabBorder = (() => {
      const divs = navItems.value
      const result = divs.filter(div => div.classList.contains('selected'))[0]
      const { width } = result.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      console.log('container', container.value)
      const { left: containerLeft } = container.value.getBoundingClientRect()
      const { left: resultLeft } = result.getBoundingClientRect()
      indicator.value.style.left = resultLeft - containerLeft + 'px'
    })
    onMounted(getTabBorder)
    onUpdated(getTabBorder)
    const defaults = context.slots.default()
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const titles = defaults.map(tag => {
      return tag.props.title
    })

    const onSelect = (title: string) => {
      context.emit('update:selected', title)
    }
    return { defaults, titles, onSelect, navItems, indicator, container }
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
    position: relative;
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
    .re0-tabs-nav-indicator {
      position: absolute;
      height: 3px;
      background: $colorEmilia;
      left: 0;
      bottom: -1px;
      transition: left .3s ease;
      // width: 100px;
    }
  }

  .re0-tabs-content {
    padding: 8px 0;
    .re0-tabs-content-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>