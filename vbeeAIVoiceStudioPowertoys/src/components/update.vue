<script setup lang="ts"></script>

<template>
  <div>
    <div
      class="flex flex-col gap-y-4"
      style="grid-area: title"
    >
      <h1 class="text-4xl font-bold text-center">🎉 Updated! 🎉</h1>
      <p class="text-lg">
        <DisplayNameChip />
        has been updated to the latest
        <VersionChip />
        . 🎉
      </p>
    </div>

    <Changelog />

    <i-fa-solid-dice-five />
    <i-heroicons-outline:menu-alt-2 />
  </div>
</template>

<style lang="scss" scoped>
.update-grid {
  grid-template-areas:
    '. . .'
    '. title .'
    '. . .'
    '. content .';
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr 1fr;
}
</style>
