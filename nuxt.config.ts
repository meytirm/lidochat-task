// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@bootstrap-vue-next/nuxt', '@nuxt/eslint'],
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  runtimeConfig: {
    apiKey: '',
    public: {
      apiBase: '',
    },
  },
  compatibilityDate: '2025-07-15',
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        quotes: 'single',
      },
    },
  },
})
