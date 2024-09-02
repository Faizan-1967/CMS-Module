import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Global CSS has to be imported

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify()

  nuxtApp.vueApp.use(vuetify)
})
