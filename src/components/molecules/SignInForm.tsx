import { FC } from 'react'
import {
  Button,
  CheckBox,
  Field,
  MessageBox,
  TextInput,
} from '@/components/atoms'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { APP_REDIRECT_ROUTES } from '@/constants'
import { UserAuth } from '@/api/firebase'
import { useSignInQuery } from '@/queries'

export const signInScheme = object({
  email: string().email().required('Email is required'),
  password: string().required('Password is required'),
}).required()

export const SignInForm: FC = () => {
  const navigate = useNavigate()
  const { control, handleSubmit } = useForm<UserAuth>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(signInScheme),
  })

  const { singIn, isPending, isError } = useSignInQuery()

  const onSubmit = async (data: UserAuth) => {
    if (isPending) return

    const result = await singIn(data)

    localStorage.setItem('user_id', result.uid)
    navigate(APP_REDIRECT_ROUTES.BASE_APP_REDIRECT_ROUTE)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full"
    >
      {isError ? (
        <MessageBox
          className="mb-2"
          message="Wrong email or password!"
          variant="error"
        />
      ) : null}
      <Field flow="col" className="mb-2">
        <TextInput<UserAuth>
          label="Email"
          name="email"
          control={control}
          rules={{ required: true }}
        />
      </Field>
      <Field flow="col" className="mb-4">
        <TextInput<UserAuth>
          label="Password"
          type="password"
          name="password"
          control={control}
          rules={{ required: true }}
        />
      </Field>
      <Field flow="row" className="items-center justify-between">
        <CheckBox label="Remember me" name="remember-me" />
        <Button
          type="submit"
          label="Sign In"
          className="self-end"
          isLoading={isPending}
        />
      </Field>
    </form>
  )
}
