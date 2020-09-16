<template>
<Topnav />
<div class="content">
  <aside v-if="asideVisible">
    <ol>
      <li>Switch组件</li>
      <li>Switch组件</li>
      <li>Switch组件</li>
    </ol>
  </aside>
  <main class="main">
    Main
  </main>
</div>
</template>

<script lang="ts">
import Topnav from './../components/Topnav.vue'
import {
  inject,
  Ref
} from 'vue'

export default {
  setup() {
    const asideVisible = inject < Ref < boolean >> ('asideVisible')
    return {
      asideVisible
    }
  },

  components: {
    Topnav
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;

  .main {
    flex-grow: 1;
  }
}
</style>
