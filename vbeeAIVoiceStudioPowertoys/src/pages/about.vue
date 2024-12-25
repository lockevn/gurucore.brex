<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'

const store = useAppStore()
const count = computed(() => store.count)
</script>

<template>
  <!-- Popup About Page -->
  <div class="m-4">
    <button @click="$router.back">Go Back</button>
  </div>

  <div class="m-4">
    <h1>About</h1>

    <p><CurrentUserNameChip /></p>

    <div class="flex gap-x-2 justify-center">
      <button
        class="btn btn-primary"
        @click="store.increment"
      >
        Increment
      </button>
      <p>Count: {{ count }}</p>
      <button
        class="btn btn-primary"
        @click="store.decrement"
      >
        Decrement
      </button>
    </div>
  </div>
</template>

<style scoped></style>
