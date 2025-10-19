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
