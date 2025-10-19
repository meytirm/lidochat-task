import type { ServiceApi } from '~/service/service-api'

export class AuthService {
  constructor(private readonly api: ServiceApi) {
  }

  signUp() {

  }

  signIn() {
    return this.api.post('/api/firebase-login', {
      email: 'test@test.com',
      password: 'testtesttest',
      returnSecureToken: true,
    })
  }
}
