<template>
  <Topnav />
  <div class="content">
    <aside class="aside" v-if="asideVisible" style="border: 1px solid green">
      <ol class="aside-list">
        <li>
          <router-link to="/doc/switch">Switch组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
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
import { inject, Ref } from "vue";

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return {
      asideVisible,
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
    background: rgba(255, 255, 255, 0.6) url("./../assets/img/character_emilia.gif")
      bottom/contain no-repeat;

    .aside-list {
      background-color: rgba(255, 255, 255, 0.8);

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
