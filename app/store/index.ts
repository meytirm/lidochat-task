import { createStore } from 'vuex'
import type { UserStateData } from '~~/types/store'
import type { AuthService } from '~/service/auth'
import type { SignInPayload, SignUpPayload } from '~~/types/service'
import type { UserService } from '~/service/user'
import type { FirebaseUserResponse } from '~~/types/firebase'

import { useCookie } from '#app'

export interface State {
  user: null | FirebaseUserResponse
}

export const makeStore = (authService: AuthService, userService: UserService) => createStore<State>({
  state: () => ({ user: null }),
  getters: {
    isLoggedIn: (state: State) => !!state.user,
  },
  mutations: {
    setUser(state: State, user: UserStateData) {
      console.log(state, user)
      state.user = user
    },
    clearUser(state: State) {
      state.user = null
    },
  },
  actions: {
    async signIn(context, payload: SignInPayload) {
      const res = await authService.signIn(payload)
      const userData = res.data
      const { registered, ...rest } = userData
      context.commit('setUser', rest)
      await context.dispatch('setToken', {
        accessToken: userData.idToken,
        refreshToken: userData.refreshToken,
      })
      await context.dispatch('getUserData', userData.idToken)
      return res
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
        await context.dispatch('getUserData', userData.idToken)
        return res
      }
      catch (e) {
        console.log(e)
      }
    },
    async getUserData(context, idToken: string) {
      const res = await userService.getData(idToken)
      const userData = res.data.users
      context.commit('setUser', userData[0])
      return res
    },
    setToken(context, { accessToken, refreshToken }: { accessToken: string, refreshToken: string }) {
      const accessTokenCookie = useCookie('accessToken')
      const refreshTokenCookie = useCookie('refreshToken')
      accessTokenCookie.value = accessToken
      refreshTokenCookie.value = refreshToken
    },
  },
})
