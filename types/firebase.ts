export interface FirebaseAuthResponse {
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
  registered: boolean
}

export type FirebaseSignInResponse = FirebaseAuthResponse
export type FirebaseSignupResponse = Omit<FirebaseAuthResponse, 'registered'>

interface ProviderUserInfo {
  providerId: string
  federatedId: string
}

export interface FirebaseUserResponse {
  localId: string
  email: string
  emailVerified: boolean
  displayName: string
  providerUserInfo: ProviderUserInfo[]
  photoUrl: string
  passwordHash: string
  passwordUpdatedAt: number // in milliseconds
  validSince: string // in seconds
  disabled: boolean
  lastLoginAt: string // in milliseconds
  createdAt: string // in milliseconds
  customAuth: boolean
}
