<template>
<Topnav />
<div class="home">
  <h1>
    <span class="left">Re</span>:Zero UI
  </h1>
  <h3>一个厉害的UI轮子库</h3>
  <div class="btn-wrapper">
    <div class="btn" @click="$router.push('/doc')">快速开始</div>
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

  .btn-wrapper {
    .btn {
      border: 1px solid;
      border-color: $colorEmilia;
      background-color: transparent;
      text-transform: uppercase;
      font-size: 14px;
      padding: 10px 20px;
      font-weight: 400;
      color: $colorEmilia;
      cursor: pointer;

      &:hover {
        color: #ffffff;
        background-color: $colorEmilia;
        box-shadow: 10px 10px 99px 6px $colorEmilia;
      }
    }
  }
}
</style>
