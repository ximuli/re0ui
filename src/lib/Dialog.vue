<template>
  <div class="re0-dialog-overlay"></div>
  <div class="re0-dialog-wrapper">
    dialog组件

    <header>标题</header>
    <main>
      <p>苟利国家生死以，</p>
      <p>岂因祸福避趋之。</p>
    </main>
    <footer>
      <Button>确认</Button>
      <Button>取消</Button>
    </footer>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>

</style>