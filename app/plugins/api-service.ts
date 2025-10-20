import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { ServiceApi } from '~/service/service-api'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.clientApiBase
  const accessToken = () => useCookie('accessToken').value

  const apiService = new ServiceApi(baseUrl, accessToken)
  return {
    provide: {
      api: apiService,
    },
  }
})
