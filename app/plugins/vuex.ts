import { defineNuxtPlugin } from '#app'
import { makeStore } from '~/store'
import { AuthService } from '~/service/auth'
import { UserService } from '~/service/user'

export default defineNuxtPlugin((nuxtApp) => {
  const { $api } = useNuxtApp()

  // pass services that depend on Nuxt $api
  const authService = new AuthService($api)
  const userService = new UserService($api)

  const store = makeStore(authService, userService)
  nuxtApp.vueApp.use(store)

  return {
    provide: {
      store,
    },
  }
})
