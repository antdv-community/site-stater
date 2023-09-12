<script setup lang="ts">
const route = useRoute()
definePage({
  meta: {
    title: '首页'
  }
})
</script>

<template>
  <div>{{ route.meta }}</div>
</template>

<style scoped></style>
