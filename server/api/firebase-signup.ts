import { ServiceApi } from '~/service/service-api'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()
  const apiKey = config.apiKey
  const apiBase = config.public.serverApiBase
  const apiService = new ServiceApi(apiBase)

  const response = await apiService.post(`/accounts:signUp?key=${apiKey}`,
    body,
  )
  return response.data
})
