<script setup lang="ts"></script>

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
  </footer>
</template>

<style scoped></style>
