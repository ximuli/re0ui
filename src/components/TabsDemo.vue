<template>
<div>
  <Tabs v-model:selected="select">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
  <div class="item" v-for="(item, index) in 15" :key="index">TabsDemo</div>
</div>
</template>

<script>
import Tabs from '../lib/Tabs/Tabs.vue'
import Tab from '../lib/Tabs/Tab.vue'
import { ref } from 'vue'

export default {
  components: {
    Tabs, Tab
  },
  setup() {
    const select = ref('导航2')
    return { select }
  }
}
</script>

<style lang="scss" scoped>

</style>
