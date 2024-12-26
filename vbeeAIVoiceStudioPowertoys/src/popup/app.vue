<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'
const store = useAppStore()
const count = computed(() => store.count)
</script>

<template>
  <header
    aria-label="Site Header"
    class="bg-gray-50"
  >
    Popup Header
  </header>

  <RouterView />

  <footer
    aria-label="Site Footer"
    class="bg-gray-50"
  >
    <!-- Popup Footer -->
    <RouterLink
      class="underline"
      to="/common/about"
    >
      About
    </RouterLink>

    <DisplayNameChip />
    <VersionChip />

    <span>Usage: {{ count }}</span>
  </footer>
</template>

<style scoped></style>
