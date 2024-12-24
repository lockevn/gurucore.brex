<script setup lang="ts">
const displayName = __DISPLAY_NAME__
const version = __VERSION__
</script>

<template>
  <div>
    <div
      class="flex flex-col gap-y-4"
      style="grid-area: title"
    >
      <h1 class="text-4xl font-bold text-center">🎉 Updated! 🎉</h1>
      <p class="text-lg">
        {{ displayName }} has been updated to the latest version. 🎉
      </p>
    </div>

    <div
      class="flex flex-col gap-y-4"
      style="grid-area: title"
    >
      <h2 class="text-2xl font-bold">What's new in version {{ version }}?</h2>
    </div>

    <Changelog />
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
