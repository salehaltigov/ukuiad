import type { PiniaPluginContext } from 'pinia'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(({ store }: PiniaPluginContext) => {
    store.router = markRaw(nuxtApp.$router)
  })
})
