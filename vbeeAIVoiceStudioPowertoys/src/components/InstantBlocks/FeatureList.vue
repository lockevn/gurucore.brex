<script setup lang="ts">
const featurelist = __FEATURELIST__
</script>

<template>
  <div style="grid-area: content">
    <RenderMarkdown :markdowntext="featurelist" />
  </div>
</template>

<style lang="scss" scoped></style>
