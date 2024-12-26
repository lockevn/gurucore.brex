<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'
import { cs_updateBodyClassname } from '@/content-script/studio/shared'

// NOTE: console.log should be viewed in the popup page console (inspect the popup)

const store = useAppStore()

const isDarkTheme = computed(() => store.isDarkTheme)
const isFocusMode = computed(() => store.isFocusMode)

async function toggleDarkTheme() {
  store.toggleDarkTheme()
  await syncBodyClassname()
  store.increment()
}
async function toggleFocusMode() {
  store.toggleFocusMode()
  await syncBodyClassname()
  store.increment()
}

/** force the CS body to update Classname based on storage flag */
async function syncBodyClassname() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  if (tab && tab.id) {
    // When the button is clicked, inject script into current page
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: cs_updateBodyClassname,
      args: [isDarkTheme.value, isFocusMode.value],
    })
  }
}
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
        @click="toggleDarkTheme"
      >
        Dark theme: {{ isDarkTheme ? 'On' : 'Off' }}
      </button>

      <button
        class="btn btn-primary"
        @click="toggleFocusMode"
      >
        Focus Mode: {{ isFocusMode ? 'On' : 'Off' }}
      </button>
    </div>
  </div>
</template>

<style scoped></style>
