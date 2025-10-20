export interface SignInPayload {
  email: string
  password: string
  returnSecureToken: boolean
}

export interface SignUpPayload {
  email: string
  password: string
}
