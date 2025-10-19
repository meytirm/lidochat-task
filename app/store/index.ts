import { createStore } from 'vuex'
import type { UserStateData } from '~~/types/store'

export interface State {
  user: null | UserStateData
}

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
    signIn() {

    },
    signUp() {

    },
    setUserStateData() {

    },
  },
})
