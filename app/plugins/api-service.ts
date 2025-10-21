import { defineNuxtPlugin, useRuntimeConfig, useCookie } from '#app'
import { ServiceApi } from '~/service/service-api'
import type { ToastOptions } from '~~/types/toast'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const { create } = useToast()
  const baseUrl = config.public.clientApiBase
  const accessToken = () => useCookie('accessToken').value
  const createToast = ({ title, body, variant }: ToastOptions) => {
    create({
      title,
      body,
      variant,
      progressProps: {
        variant: 'secondary',
      },
    })
  }

  const apiService = new ServiceApi(baseUrl, accessToken, createToast)
  return {
    provide: {
      api: apiService,
    },
  }
})
