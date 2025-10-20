import axios from 'axios'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()
  const apiKey = config.apiKey
  const apiBase = config.public.serverApiBase

  const response = await axios.post(`${apiBase}/accounts:signUp?key=${apiKey}`,
    body,
  )
  return response.data
})
