<script setup lang="ts">
import BreadCrumb from '@/layout/tabbar/breadcrumb/index.vue'
import Setting from '@/layout/tabbar/setting/index.vue'

defineOptions({
  name: 'Tabbar',
})
</script>

<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <BreadCrumb></BreadCrumb>
    </div>
    <div class="tabbar-right">
      <Setting></Setting>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgb(236, 229, 229),
    //rgb(151, 136, 136),
    rgb(240, 234, 234)
  );

  .tabbar-left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .tabbar-right {
    display: flex;
    align-items: center;
  }
}
</style>
