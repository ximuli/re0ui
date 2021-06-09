<template>
  <Topnav />
  <div class="content">
    <aside class="aside" v-if="asideVisible" style="border: 1px solid green">
      <h2>文档</h2>
      <ol>
        <li v-for="(item, index) in asideDocList" :key="'asideDocList' + index">
          <router-link :to="item.to"> {{ item.name }} </router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li v-for="(item, index) in asideComponentList" :key="'asideComponentList' + index">
          <router-link :to="item.to"> {{ item.name }} </router-link>
        </li>
      </ol>
    </aside>
    <main class="main" style="border: 1px solid blue">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import Topnav from "./../components/Topnav.vue";
import { inject, Ref, reactive } from "vue";

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const asideDocList = reactive([
      { to: '/doc/intro', name: '介绍' },
      { to: '/doc/install', name: '安装' },
      { to: '/doc/get-started', name: '开始使用' },
    ])
    const asideComponentList = reactive([
      { to: '/doc/switch', name: 'Switch 组件' },
      { to: '/doc/button', name: 'Button 组件' },
      { to: '/doc/dialog', name: 'Dialog 组件' },
      { to: '/doc/tabs', name: 'Tabs 组件' }
    ])
    return {
      asideVisible,
      asideDocList,
      asideComponentList
    };
  },
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  position: relative;

  .aside {
    // position: absolute;
    height: 100%;
    width: 260px;
    box-sizing: border-box;
    padding: 20px 0 0 20px;
    background: url("./../assets/img/character_emilia.gif")
      bottom/contain no-repeat;
  }

  .main {
    flex-grow: 1;
    padding-top: 20px;
    padding-left: 20px;
    overflow: scroll;
  }
}

@media (max-width: 900px) {
  .content {
    .aside {
      position: absolute;
      z-index: 99;
      width: 260px;
    }
  }
}
</style>
