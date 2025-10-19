import type { ServiceApi } from '~/service/service-api'

export class AuthService {
  constructor(private readonly api: ServiceApi) {
  }

  getData() {
    return this.api.post('/api/firebase-user-data', {})
  }
}
