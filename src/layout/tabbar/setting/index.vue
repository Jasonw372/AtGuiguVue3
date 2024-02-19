<script setup lang="ts">
import useLayOutSettingStore from '@/stores/modules/setting'
import { useRouter, useRoute } from 'vue-router'
import useUserStore from '@/stores/modules/user'

defineOptions({
  name: 'Setting',
})

const layoutSettingStore = useLayOutSettingStore()
const updateRefresh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh
}

const userStore = useUserStore()

const fullScreen = () => {
  //DOM对象的一个属性：可以用来判断当前是不是全屏的模式【全屏：true，不是全屏：false】
  let full = document.fullscreenElement
  //切换成全屏
  if (!full) {
    //文档根节点的方法requestFullscreen实现全屏
    document.documentElement.requestFullscreen()
  } else {
    //退出全屏
    document.exitFullscreen()
  }
}

const $router = useRouter()
const $route = useRoute()

const logout = () => {
  userStore.userLogout()
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>

<template>
  <el-button
    size="small"
    icon="Refresh"
    @click="updateRefresh"
    circle
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    @click="fullScreen"
    circle
  ></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <el-avatar
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0 10px"
    class="avatar"
  />
  <!-- 下拉菜单 -->
  <el-dropdown style="margin-right: 20px">
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss"></style>
