import { createStore } from 'vuex'
import type { UserStateData } from '~~/types/store'
import { AuthService } from '~/service/auth'
import type { SignInPayload, SignUpPayload } from '~~/types/service'
import { UserService } from '~/service/user'
import type { FirebaseUserResponse } from '~~/types/firebase'

export interface State {
  user: null | FirebaseUserResponse
}
const { $api } = useNuxtApp()
const authService = new AuthService($api)
const userService = new UserService($api)

export const store = createStore<State>({
  state: () => ({ user: null }),
  getters: {
    isLoggedIn: (state: State) => !!state.user,
  },
  mutations: {
    setUser(state: State, user: UserStateData) {
      state.user = user
    },
    clearUser(state: State) {
      state.user = null
    },
  },
  actions: {
    async signIn(context, payload: SignInPayload) {
      try {
        const res = await authService.signIn(payload)
        const userData = res.data
        const { registered, ...rest } = userData
        context.commit('setUser', rest)
        await context.dispatch('setToken', {
          accessToken: userData.idToken,
          refreshToken: userData.refreshToken,
        })
      }
      catch (e) {
        console.log(e)
      }
    },
    async signUp(context, payload: SignUpPayload) {
      try {
        const res = await authService.signUp(payload)
        const userData = res.data
        context.commit('setUser', userData)
        await context.dispatch('setToken', {
          accessToken: userData.idToken,
          refreshToken: userData.refreshToken,
        })
      }
      catch (e) {
        console.log(e)
      }
    },
    async getUserData(context, idToken: string) {
      try {
        const res = await userService.getData(idToken)
        const userData = res.data
        context.commit('setUser', userData[0])
      }
      catch (e) {
        console.log(e)
      }
    },
    setToken(context, { accessToken, refreshToken }: { accessToken: string, refreshToken: string }) {
      const accessTokenCookie = useCookie('accessToken')
      const refreshTokenCookie = useCookie('refreshToken')
      accessTokenCookie.value = accessToken
      refreshTokenCookie.value = refreshToken
    },
  },
})
