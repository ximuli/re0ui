<template>
<div>
  <Button @click="toggle">toggle</Button>
  <Button @click="onClick">一句代码创建dialog</Button>
  <Dialog v-model:visible="visible" :closeOnClickOverlay="false"
    :confirm="confirmFunc" :cancel="cancelFunc">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>加粗的hi</strong>
      <div>hi2</div>  
    </template>
  </Dialog>
  <div class="item" v-for="(item, index) in 30" :key="index">DialogDemo</div>
</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
import { openDialog } from '../lib/Dialog/openDialog.ts'

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
    const onClick = () => {
      openDialog({
        title: '一句代码提示',
        content: '一句代码内容',
        confirm: () => {
          console.log('confirm')
        },
        cancel: () => {
          console.log('cancel')
        }
      })
    }
    return { visible, toggle, confirmFunc, cancelFunc, onClick }
  }
}
</script>

<style lang="scss" scoped>

</style>
