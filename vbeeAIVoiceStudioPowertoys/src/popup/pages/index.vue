<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'

const store = useAppStore()

const count = computed(() => store.count)
const isDarkTheme = computed(() => store.isDarkTheme)
</script>

<template>
  <!-- the popup page -->
  <div class="text-center m-4 flex flex-col gap-y-2">
    <h1 class="text-xl font-bold pb-6">
      Powertoys, hello
      <CurrentUserNameChip />
    </h1>

    <div class="flex gap-x-2 justify-center">
      <button
        class="btn btn-primary"
        @click="store.toggleDarkTheme"
      >
        Dark theme: {{ isDarkTheme ? 'On' : 'Off' }}
      </button>
    </div>
    <p>Usage Count: {{ count }}</p>
  </div>
</template>

<style scoped></style>
