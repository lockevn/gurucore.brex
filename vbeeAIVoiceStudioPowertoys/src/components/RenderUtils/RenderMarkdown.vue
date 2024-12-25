<script setup lang="ts">
import { marked } from 'marked'
import { defineProps } from 'vue'

const { markdowntext } = defineProps<{
  markdowntext: string
}>()
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="container">
    <div
      class="prose markdown"
      v-html="marked(markdowntext)"
    />
  </div>
  <!--eslint-enable-->
</template>

<style lang="scss" scoped>
:deep(.markdown) {
  input[type='checkbox'] {
    @apply checkbox checkbox-info disabled:opacity-100;
  }
  table {
    @apply table table-zebra;
  }
}
</style>
