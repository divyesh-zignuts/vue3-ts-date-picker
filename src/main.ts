import '@assets/css/normalize.css'
import '@mdi/font/css/materialdesignicons.css'
import '@styles/styles.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { createVtfy } from '@/plugins/vuetify'
import i18n from '@/plugins/i18n'

const app = createApp(App)
  .use(i18n)
  .use(createVtfy)

app.mount('#app')
