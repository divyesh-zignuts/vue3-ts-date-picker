import { useSlots } from 'vue'

export default function useSlot() {
  // Slots
  const slots = useSlots()

  // Methods
  const hasSlot = (name: string) => {
    return !!slots[name]
  }

  return { hasSlot }
}
