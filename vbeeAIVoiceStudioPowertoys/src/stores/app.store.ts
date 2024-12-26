import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'

export const useAppStore = defineStore('app', () => {
  const name = ref('John Doe')
  const count = ref(0)
  const isDarkTheme = ref(false)
  const isFocusMode = ref(false)

  // Load initial state from chrome.storage.sync
  onMounted(async () => {
    const result = await chrome.storage.sync.get({
      name: 'John Doe',
      count: 0,
      isDarkTheme: false,
      isFocusMode: false,
    })

    name.value = result.name
    count.value = result.count
    isDarkTheme.value = result.isDarkTheme
    isFocusMode.value = result.isFocusMode
  })

  // Helpers to update chrome.storage
  const updateStorage = async (key: string, value: any) => {
    await chrome.storage.sync.set({ [key]: value })
  }

  // Watchers to sync state changes to storage
  const setName = (newValue: any) => {
    name.value = newValue
    updateStorage('name', newValue)
  }

  const toggleDarkTheme = () => {
    isDarkTheme.value = !isDarkTheme.value
    updateStorage('isDarkTheme', isDarkTheme.value)
  }

  const toggleFocusMode = () => {
    isFocusMode.value = !isFocusMode.value
    updateStorage('isFocusMode', isFocusMode.value)
  }

  const increment = () => {
    count.value++
    updateStorage('count', count.value)
  }

  const decrement = () => {
    count.value--
    updateStorage('count', count.value)
  }

  return {
    name,
    setName,

    count,
    increment,
    decrement,

    isDarkTheme,
    toggleDarkTheme,

    isFocusMode,
    toggleFocusMode,
  }
})
