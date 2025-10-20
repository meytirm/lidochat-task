import type { ServiceApi } from '~/service/service-api'
import type { AxiosResponse } from 'axios'
import type { FirebaseUserResponse } from '~~/types/firebase'

export class UserService {
  constructor(private readonly api: ServiceApi) {
  }

  getData(idToken: string): Promise<AxiosResponse<FirebaseUserResponse[]>> {
    return this.api.post('/api/firebase-user-data', { idToken })
  }
}
