<script setup lang="ts">
withDefaults(
  defineProps<{
    prefix?: string
    name: string
    color: string
    width?: number
    height?: number
  }>(),
  {
    prefix: '#icon-',
    width: 16,
    height: 16,
  },
)
</script>

<template>
  <svg :style="{ width: width + 'px', height: height + 'px' }">
    <use :href="prefix + name" :fill="color"></use>
  </svg>
</template>

<style scoped lang="scss"></style>
