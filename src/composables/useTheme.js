import { ref, onMounted } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('dark', isDark.value)
    document.documentElement.classList.toggle('my-app-dark', isDark.value)
  }

  const initTheme = () => {
    const storedTheme = localStorage.getItem('dark')
    if (storedTheme) {
      isDark.value = storedTheme === 'true'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    document.documentElement.classList.toggle('my-app-dark', isDark.value)
  }

  onMounted(() => {
    isDark.value = document.documentElement.classList.contains('my-app-dark')
  })

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}
