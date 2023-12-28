export const messages = Object.fromEntries(
  Object.entries(

    import.meta.glob<{ default: any }>('./*.json', { eager: true }))
    .map(([key, value]) => [key.slice(2, -5), value.default]),
)
