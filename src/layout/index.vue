<script setup lang="ts">
import Logo from '@/layout/logo/index.vue'
</script>

<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>
    </div>
    <div class="layout_body">
      <div class="layout_tabbar">
        顶部导航
      </div>
      <div class="layout_main">
        <div style="height: 10000px;">我是内容</div>
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