<template>
<div class="topnav">
  <span class="toggleIcon" @click="toggleAside"></span>
  <div class="logo" @click="$router.push('/')">
    <span class="left">Re</span><span>:Zero UI</span>
  </div>
  <div class="links" @click="onClick">
    <span>Doc</span>
    <span>Github</span>
  </div>
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from 'vue'

import {
  useRouter
} from 'vue-router'

export default {
  setup() {
    const asideVisible = inject < Ref < boolean >> ('asideVisible')
    const router = useRouter()
    const onClick = (e) => {
      const text = e.target.innerText
      if (text === 'Doc') {
        console.log('text', text)
        router.push('/doc')
      } else if (text === 'Github') {
        window.open('https://github.com/ximuli/re0ui')
      }
    }
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return {
      asideVisible,
      toggleAside,
      onClick
    }
  },
}
</script>

<style lang="scss" scoped>
@import './../assets/style/variable.scss';

.topnav {
  font-family: "Times New Roman", Times, Baskerville, Georgia, serif;
  padding: 1vw 3vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);

  .toggleIcon {
    display: none;
    position: absolute;
    box-sizing: border-box;
    left: 2vw;
    width: 24px;
    height: 20px;
    border-top: 2px solid $colorEmilia;
    border-bottom: 2px solid $colorEmilia;

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      background-color: $colorEmilia;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .logo {
    font-size: 24px;

    .left {
      color: $colorEmilia;
    }
  }

  .links {
    letter-spacing: 1px;

    >span {
      cursor: pointer;
      margin-left: 2vw;

      &:hover {
        color: $colorEmilia;
      }
    }
  }
}

@media (max-width: 900px) {
  .topnav {
    justify-content: center;

    .toggleIcon {
      display: block;
    }

    .links {
      display: none;
    }
  }
}
</style>
