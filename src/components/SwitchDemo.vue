<template>
<div>
  <Switch v-model:value="checked" />
  <div class="item" v-for="(item, index) in 30" :key="index">SwitchDemo</div>
</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from './../lib/Switch.vue'

export default {
  components: { Switch },
  setup() {
    const checked = ref(true)
    return { checked }
  },
}
</script>

<style la
Switchng="scss" scoped>
.item {
  padding: 30px;
}
</style>
