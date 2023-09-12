<script setup lang="ts">
import { computed } from 'vue'
import DefaultLayout from './layouts/default/index.vue'
const route = useRoute()
const layout = computed<string>(() => {
  return route.meta?.layout || 'default'
})
const layouts = {
  default: DefaultLayout
}
const comp = computed(() => {
  if (layout.value in layouts) {
    return layouts[layout.value as keyof typeof layouts]
  } else {
    return DefaultLayout
  }
})
</script>

<template>
  <component :is="comp">
    <router-view />
  </component>
</template>
