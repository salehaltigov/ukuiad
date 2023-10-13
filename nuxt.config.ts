import { fileURLToPath } from 'node:url'
import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    images: fileURLToPath(new URL('./client/assets/images', import.meta.url)),
    models: fileURLToPath(new URL('./client/models', import.meta.url)),
    utils: fileURLToPath(new URL('./client/utils', import.meta.url)),
  },

  build: {
    transpile: ['vuetify'],
  },

  css: [
    '@mdi/font/css/materialdesignicons.css',
    'assets/scss/main.scss',
  ],

  experimental: {
    reactivityTransform: false,
    inlineSSRStyles: false,
  },

  imports: {
    dirs: ['stores'],
  },

  modules: [
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],

    // vuetify
    async (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({ styles: { configFile: 'assets/vuetify.settings.scss' } }))
      }
        ,
      )
    },
  ],

  plugins: [],

  runtimeConfig: {
    public: {
      apiBase: 'https://localhost:8000/api/v1/',
    },
  },

  srcDir: 'client/',

  ssr: false,

  typescript: {
    strict: true,
  },

  // vueuse: {
  //   ssrHandlers: false,
  // },
})
