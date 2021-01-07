<template>
<div>
  <Dialog></Dialog>
  <div class="item" v-for="(item, index) in 30" :key="index">DialogDemo</div>
</div>
</template>

<script>
import Dialog from '../lib/Dialog.vue'

export default {
  components: {
    Dialog
  }
}
</script>

<style lang="scss" scoped>

</style>
