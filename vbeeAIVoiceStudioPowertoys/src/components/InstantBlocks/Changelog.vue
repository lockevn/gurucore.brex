<script setup lang="ts">
const changelog = __CHANGELOG__
</script>

<template>
  <div style="grid-area: content">
    <RenderMarkdown :markdowntext="changelog" />
  </div>
</template>

<style lang="scss" scoped></style>
