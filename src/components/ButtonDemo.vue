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
<h1>示例3</h1>
<div>
  <Button level="main">主要按钮</Button>
  <Button>普通按钮</Button>
  <Button level="danger">危险按钮</Button>
</div>
<div>
  <Button theme="link" level="main">主要链接按钮</Button>
  <Button theme="link">普通链接按钮</Button>
  <Button theme="link" level="danger">危险链接按钮</Button>
</div>
<div>
  <Button theme="text" level="main">主要文字按钮</Button>
  <Button theme="text">普通文字按钮</Button>
  <Button theme="text" level="danger">危险文字按钮</Button>
</div>
<h1>示例4</h1>
<div>
  <Button disabled>主要文字按钮</Button>
  <Button theme="link" disabled>主要文字按钮</Button>
  <Button theme="text" disabled>主要文字按钮</Button>
</div>
<h1>示例5</h1>
<div>
  <Button loading>加载中</Button>
</div>
</template>

<script lang="ts">
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
