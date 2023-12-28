import { ref } from 'vue'

export default function useLimit() {
  // Data
  const isControl = ref(false)

  // Methods
  const controlKey = (ev: any) => {
    if (ev.which === 91 || ev.which === 17)
      isControl.value = false
  }

  const limit = (ev: any, el: any, lm: any) => {
    const allowedKeys = [8, 46, 37, 38, 39, 40]
    if (ev.which === 91 || ev.which === 17)
      isControl.value = true

    if (el?.innerText?.trim()?.length >= lm && !isControl.value && !allowedKeys.includes(Number(ev.which)))
      ev.prevDefault()
  }

  return { controlKey, limit }
}
