import { useCookie } from '#app'

export default defineNuxtRouteMiddleware(async (to) => {
  const token = useCookie('accessToken').value
  if (!token && to.meta.isProtected) {
    return navigateTo('/sign-in')
  }

  if (to.meta.requiresGuest && token) {
    return navigateTo('/') // or any private page
  }
})
