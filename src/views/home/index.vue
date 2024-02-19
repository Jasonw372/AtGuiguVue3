<script setup lang="ts">
import { onMounted } from 'vue'
import useUserStore from '@/stores/modules/user'
import { useRouter } from 'vue-router'

onMounted(async () => {
  await useUserStore()
    .userInfo()
    .catch((error) => {
      // redirect to login page
      const $router = useRouter()
      $router.push({ name: 'login' })
    })
})
</script>

<template>
  <h1>Home</h1>
</template>

<style scoped lang="scss"></style>
