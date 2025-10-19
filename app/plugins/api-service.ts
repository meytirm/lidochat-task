import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { ServiceApi } from '~/service/service-api'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.apiBase
  const apiService = new ServiceApi(baseUrl)
  return {
    provide: {
      api: apiService,
    },
  }
})
