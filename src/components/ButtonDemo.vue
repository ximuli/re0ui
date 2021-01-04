<template>
<div>Button示例</div>
<h1>示例1</h1>
<div>
  <Button @click="onClick" @focus="onFocus" @mouseover="onMouseover">你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="text">你好</Button>
  <Button theme="link">你好</Button>
  <div class="item" v-for="(item, index) in 5" :key="index">ButtonDemo</div>
</div>
<h1>示例2</h1>
<div>
  <Button size="big">你好</Button>
  <Button>你好</Button>
  <Button size="small">你好</Button>
</div>
<div>
  <Button theme="link" size="big">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="link" size="small">你好</Button>
</div>
<div>
  <Button theme="text" size="big">你好</Button>
  <Button theme="text">你好</Button>
  <Button theme="text" size="small">你好</Button>
</div>
</template>

<script>
import Button from './../lib/Button.vue'

export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log('click hi')
    }
    const onFocus = () => {
      console.log('focus hi')
    }
    const onMouseover = () => {
      console.log('mouseover hi')
    }
    return { onClick, onFocus, onMouseover }
  }
}
</script>

<style lang="scss" scoped>

</style>
