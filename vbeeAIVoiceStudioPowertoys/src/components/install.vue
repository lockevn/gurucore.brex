<script setup lang="ts">
//  this page showed right after instaling successfully
</script>

<template>
  <div class="w-full h-full flex flex-col gap-y-4 justify-center items-center">
    <h1 class="text-4xl font-bold">🎉 Installed! 🚀</h1>
    <p class="text-xl">
      Thank you for installing
      <DisplayNameChip />
      ! ❤️
    </p>
    <p class="text-lg">
      Now you can close this tab and start using the extension.
    </p>
  </div>

  <div>
    <VersionChip />
  </div>

  <FeatureList />
</template>

<style lang="scss" scoped></style>
