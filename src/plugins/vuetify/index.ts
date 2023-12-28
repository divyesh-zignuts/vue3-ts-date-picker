import { createVuetify } from 'vuetify'
import defaults from './defaults'
import { icons } from './icons'

// Styles
import 'vuetify/styles'

export const createVtfy: any = createVuetify({
  defaults,
  icons,
})
