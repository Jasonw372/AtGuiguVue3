<script setup lang="ts">
import useLayOutSettingStore from '@/stores/modules/setting'

defineOptions({
  name: 'BreadCrumb',
})

//获取layout配置相关的仓库
const LayOutSettingStore = useLayOutSettingStore()

//点击图标的切换
const changeIcon = () => {
  //图标进行切换
  LayOutSettingStore.fold = !LayOutSettingStore.fold
}
</script>

<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>

  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>权限挂历</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss"></style>
