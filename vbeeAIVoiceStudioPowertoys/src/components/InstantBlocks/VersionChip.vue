<script setup lang="ts">
const version = __VERSION__
const gitCommit = __GIT_COMMIT__
const gitURL = __GITHUB_URL__
const commitURL = `${gitURL}/commit/${gitCommit}`
</script>

<template>
  <span>
    Version:
    <a
      class="text-green-500"
      :href="commitURL"
      target="_blank"
    >
      {{ version }} (#{{ gitCommit }})
    </a>
  </span>
</template>

<style lang="scss" scoped></style>
