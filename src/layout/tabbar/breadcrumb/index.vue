<script setup lang="ts">
import useLayOutSettingStore from '@/stores/modules/setting'
import { useRoute } from 'vue-router'

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

const $route = useRoute()
</script>

<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>

  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>

      <span style="margin: 0 3px">
        {{ item.meta.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss"></style>
