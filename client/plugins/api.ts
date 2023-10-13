export default defineNuxtPlugin((_) => {
  return {
    provide: {
      api: $fetch.create({
        credentials: 'include',
        baseURL: process.env.NODE_ENV === 'production' ? '/api/v1/' : useRuntimeConfig().public.apiBase,
      }),
    },
  }
})
