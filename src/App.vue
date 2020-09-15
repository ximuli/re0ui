<template>
<div>
  导航栏 |
  <router-link to='/'>Ximuli</router-link> |
  <router-link to="/xxx">ximuli2</router-link>
</div>
<hr>
<router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App'
}
</script>
