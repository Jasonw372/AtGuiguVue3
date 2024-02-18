<script setup lang="ts">
import Logo from '@/layout/logo/index.vue'
import Menu from '@/layout/menu/index.vue'
import Main from '@/layout/main/index.vue'
import Tabbar from '@/layout/tabbar/index.vue'

import useUserStore from '@/stores/modules/user'
import { useRoute } from 'vue-router'
import useLayOutSettingStore from '@/stores/modules/setting'

const store = useUserStore()
const menuRoutes = store.menuRoutes
const $route = useRoute()
const LayOutSettingStore = useLayOutSettingStore()
</script>

<template>
  <div class="layout_container">
    <div class="layout_slider" :class="{ fold: LayOutSettingStore.fold }">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="LayOutSettingStore.fold"
          background-color="#001529"
          text-color="white"
          active-text-color="yellowgreen"
          :default-active="$route.path"
          :collapse-transition="true"
        >
          <Menu :menuList="menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_body">
      <div class="layout_tabbar">
        <Tabbar></Tabbar>
      </div>
      <div class="layout_main">
        <Main></Main>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  min-height: 100vh;

  display: flex;

  .layout_slider {
    width: $base-menu-width;
    min-height: 100vh;
    background-color: $base-menu-background-color;
    transition: all 0.5s;
    .scrollbar {
      width: $base-menu-width;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
        transition: all 0.5s;

        &.fold {
          width: $base-menu-min-width;
        }
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout_body {
    width: 100%;

    .layout_tabbar {
      position: sticky;
      top: 0;
      width: 100%;
      height: $base-tabbar-height;
      background-color: $base-tabbar-background-color;
    }

    .layout_main {
      width: 100%;
      min-height: calc(100vh - $base-tabbar-height);
      background-color: $base-main-background-color;
      padding: 20px;
      overflow: auto;
    }
  }
}
</style>
