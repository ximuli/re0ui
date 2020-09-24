<template>
<Topnav />
<div class="home">
  <h1>
    <span class="left">Re</span>:Zero UI
  </h1>
  <p>一个厉害的UI轮子库</p>
  <div class="btn">
    <button @click="$router.push('/doc')">快速开始</button>
  </div>
</div>
</template>

<script>
import Topnav from './../components/Topnav.vue'

export default {
  components: {
    Topnav
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/style/variable.scss';

.home {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .left {
    color: $colorEmilia;
  }
}
</style>
