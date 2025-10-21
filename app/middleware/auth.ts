import { useCookie } from '#app'

export default defineNuxtRouteMiddleware(async () => {
  console.log('1')
  const token = useCookie('accessToken').value
  if (!token) {
    return navigateTo('/sign-in')
  }
})
