<template>
  <!-- <Topnav /> -->
  <div class="home">
    <div class="main">
      <h1 class="title"><span class="left">Re</span>:Zero UI</h1>
      <div class="subtitle">基于 Vue.js 3.x 的 UI 轮子库</div>
      <div class="btn-wrapper">
        <div class="btn" @click="$router.push('/doc')">快速开始</div>
      </div>
    </div>
  </div>
</template>

<script>
// import Topnav from './../components/Topnav.vue'

export default {
  components: {
    // Topnav
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/style/variable.scss";

.home {
  flex-grow: 1;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;

  .main {
    padding: 5vw 0;
    width: 45vw;
    // background-color: rgba(255, 255, 255, .6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-family: "Times New Roman", Times, Baskerville, Georgia, serif;
      margin-top: 0;
    }

    .left {
      color: $colorEmilia;
    }

    .subtitle {
      text-align: center;
      font-size: 18px;
      line-height: 1.5em;
      // margin-bottom: 1.5em;
      margin: 1em 0;
      color: #273849;
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
}
</style>
