<template>
  <Topnav />
  <div class="content">
    <aside class="aside" v-if="asideVisible" style="border: 1px solid green">
      <ol class="aside-list">
        <li v-for="(item, index) in asideList" :key="index">
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
    const asideList = reactive([
      { to: '/doc/switch', name: 'Switch 组件' },
      { to: '/doc/button', name: 'Button 组件' },
      { to: '/doc/dialog', name: 'Dialog 组件' },
      { to: '/doc/tabs', name: 'Tabs 组件' }
    ])
    return {
      asideVisible,
      asideList
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

    .aside-list {
      // background-color: rgba(255, 255, 255, 0.8);

      li {
        &:not(:first-child) {
          margin-top: 0.5em;
        }
      }
    }
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
