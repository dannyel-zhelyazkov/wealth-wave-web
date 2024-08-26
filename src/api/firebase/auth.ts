import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { Auth } from 'firebase/auth'

export type UserAuth = {
  email: string
  password: string
}

export const authFirebaseApi = (client: Auth) => {
  const signIn = async (data: UserAuth) => {
    const response = await signInWithEmailAndPassword(
      client,
      data.email,
      data.password,
    )

    return response.user
  }

  const signUp = async (data: UserAuth) => {
    const response = await createUserWithEmailAndPassword(
      client,
      data.email,
      data.password,
    )

    return response.user
  }

  const signOutUser = async () => {
    await signOut(client)

    return 'Logged out'
  }

  return {
    signIn,
    signUp,
    signOutUser,
  }
}
