import type { ServiceApi } from '~/service/service-api'

export class AuthService {
  constructor(private readonly api: ServiceApi) {
  }

  signUp(payload: {
    email: string
    password: string
  }) {
    return this.api.post('/api/firebase-signup', payload)
  }

  signIn(payload: {
    email: string
    password: string
    returnSecureToken: boolean
  }) {
    return this.api.post('/api/firebase-login', payload)
  }
}
