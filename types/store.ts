import type { FirebaseAuthResponse } from './firebase'

export type UserStateData = Omit<FirebaseAuthResponse, 'registered'>
