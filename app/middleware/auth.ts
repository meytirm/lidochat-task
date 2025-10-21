import { useCookie } from '#app'

export default defineNuxtRouteMiddleware(async () => {
  const token = useCookie('accessToken').value
  if (!token) {
    return navigateTo('/sign-in')
  }
})
