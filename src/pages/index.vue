<route>
{
  meta: {
    title: '首页'
  }
}
</route>

<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    首页
    {{ route.meta }}
  </div>
</template>

<style scoped></style>
