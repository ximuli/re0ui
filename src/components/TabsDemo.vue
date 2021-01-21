<template>
<div>
  <Tabs>
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
  <div class="item" v-for="(item, index) in 15" :key="index">TabsDemo</div>
</div>
</template>

<script>
import Tabs from '../lib/Tabs/Tabs.vue'
import Tab from '../lib/Tabs/Tab.vue'

export default {
  components: {
    Tabs, Tab
  }
}
</script>

<style lang="scss" scoped>

</style>
