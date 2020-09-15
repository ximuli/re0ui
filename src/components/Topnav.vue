<template>
<div class="topnav">
  <div class="logo">
    <span class="left">Re</span><span>:Zero UI</span>
  </div>
  <div class="links" @click="onClick">
    <span>Doc</span>
    <span>Github</span>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onClick(e) {
      const text = e.target.innerText
      if (text === 'Doc') {
        this.$router.push('/doc')
      } else if (text === 'Github') {
        window.open('https://github.com/ximuli/re0ui')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import './../assets/style/variable.scss';

.topnav {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 24px;
    font-family: "Times New Roman", Times, Baskerville, Georgia, serif;

    .left {
      color: $colorEmilia;
    }
  }

  .links {
    >span {
      margin-left: 10px;
    }
  }
}
</style>
