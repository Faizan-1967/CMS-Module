// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@ant-design-vue/nuxt",
    "vuetify-nuxt-module",
  ],
  plugins: [
    '~/plugins/vuetify.ts', // Register your Vuetify plugin
  ],
  build: {
    transpile: ['vuetify'],
  },
  css: [
    'vuetify/styles', // Ensure Vuetify styles are included
  ],
});