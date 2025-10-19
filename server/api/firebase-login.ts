import { ServiceApi } from '~/service/service-api'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()
  const apiKey = config.apiKey
  const apiBase = config.public.apiBase
  const apiService = new ServiceApi(apiBase)

  const response = await apiService.post(`/accounts:signInWithPassword?key=${apiKey}`,
    body,
  )
  return response.data
})
