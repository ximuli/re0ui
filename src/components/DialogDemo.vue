<template>
<div>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" :closeOnClickOverlay="false"
    :confirm="confirmFunc" :cancel="cancelFunc"></Dialog>
  <div class="item" v-for="(item, index) in 30" :key="index">DialogDemo</div>
</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'

export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const confirmFunc = () => {
      return false
    }
    const cancelFunc = () => {}
    return { visible, toggle, confirmFunc, cancelFunc }
  }
}
</script>

<style lang="scss" scoped>

</style>
