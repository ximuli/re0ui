<template>
  <router-view></router-view>
  <div class="full-screen-bg" :class="{ 'inHome': inHome }"></div>
</template>

<script lang="ts">
import { ref, provide, computed } from 'vue'
// import { router } from './router';
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width <= 900 ? false : true)
    const inHome = computed(() => route.path === '/')
    provide('asideVisible', asideVisible)
    router.afterEach(() => {
      if (width <= 900) {
        asideVisible.value = false
      }
    })
    return { inHome }
  }
}
</script>

<style lang="scss" scoped>
.full-screen-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -2;
  // background-color: rgba(255, 255, 255, 0.8);
  background: url('./assets/img/bg.jpeg') center/cover no-repeat;
  &.inHome {
    &::after {
       width: 35vw;
       height: 15vw;
       background-color: rgba(255, 255, 255, .6);
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
    }
  }
  &::after {
    transition: all ease-in-out 300ms;
    width: 100vw;
    height: 100vh;
    transform: unset;
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    // right: 0;
    // bottom: 0;
    pointer-events: none;
    z-index: -1;
    background-color: rgba(255, 255, 255, 0.6);
  }
}
</style>