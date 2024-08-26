import { useMutation } from '@tanstack/react-query'
import { api } from '@/api'
import { UserAuth } from '@/api/firebase'

export const useSignInQuery = () => {
  const {
    mutateAsync: singIn,
    data,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationKey: ['sign_in'],
    mutationFn: (data: UserAuth) => api.firebase.auth.signIn(data),
  })

  return {
    singIn,
    isPending,
    data,
    isSuccess,
    isError,
  }
}

export const useSignUpQuery = () => {
  const {
    mutateAsync: signUp,
    data,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
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
  } = useMutation({
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
