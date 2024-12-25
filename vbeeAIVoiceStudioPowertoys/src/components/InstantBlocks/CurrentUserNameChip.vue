<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'

// SAMPLE: Using store, will be seen in all over app scope
const store = useAppStore()
const name = computed(() => store.name)
</script>

<template>
  <span>{{ name }}</span>
</template>

<style lang="scss" scoped></style>
