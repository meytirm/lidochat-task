import type { ServiceApi } from '~/service/service-api'
import type { SignInPayload, SignUpPayload } from '~~/types/service'
import type { FirebaseSignInResponse, FirebaseSignupResponse } from '~~/types/firebase'
import type { AxiosResponse } from 'axios'

export class AuthService {
  constructor(private readonly api: ServiceApi) {
  }

  signUp(payload: SignUpPayload): Promise<AxiosResponse<FirebaseSignupResponse>> {
    return this.api.post('/api/firebase-signup', payload)
  }

  signIn(payload: SignInPayload): Promise<AxiosResponse<FirebaseSignInResponse>> {
    return this.api.post('/api/firebase-login', payload)
  }
}
