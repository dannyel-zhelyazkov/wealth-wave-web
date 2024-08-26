import { useMutation } from '@tanstack/react-query'
import { api } from '@/api'
import { UserAuth } from '@/api/firebase'
import { User } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

export const useSignInQuery = () => {
  const {
    mutateAsync: singIn,
    data,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation<User, FirebaseError, UserAuth, unknown>({
    mutationKey: ['sign_in'],
    mutationFn: (data: UserAuth) => api.firebase.auth.signIn(data),
  })

  return {
    singIn,
    isPending,
    data,
    isSuccess,
    isError,
    error: error?.code,
  }
}

export const useSignUpQuery = () => {
  const {
    mutateAsync: signUp,
    data,
    isPending,
    isSuccess,
    isError,
  } = useMutation<User, FirebaseError, UserAuth, unknown>({
    mutationKey: ['sign_up'],
    mutationFn: (data: UserAuth) => api.firebase.auth.signUp(data),
  })

  return {
    signUp,
    isPending,
    data,
    isSuccess,
    isError,
  }
}

export const useSignOutQuery = () => {
  const {
    mutateAsync: signOut,
    data,
    isPending,
    isSuccess,
    isError,
  } = useMutation<string, FirebaseError, void, unknown>({
    mutationKey: ['sign_out'],
    mutationFn: api.firebase.auth.signOutUser,
  })

  return {
    signOut,
    isPending,
    data,
    isSuccess,
    isError,
  }
}
