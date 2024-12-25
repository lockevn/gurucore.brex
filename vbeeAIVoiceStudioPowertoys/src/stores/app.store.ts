import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  // NOTE: You should probably use chrome.storage API instead of localStorage since localStorage history can be cleared by the user.
  // See https://developer.chrome.com/docs/extensions/reference/api/storage
  const name = useStorage('name', 'John Doe')

  const count = useStorage('count', 0)
  const isDarkTheme = useStorage('isDarkTheme', false)

  const toggleDarkTheme = () => {
    isDarkTheme.value = !isDarkTheme.value
  }

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  return {
    name,

    //
    count,
    increment,
    decrement,

    //
    isDarkTheme,
    toggleDarkTheme,
  }
})
