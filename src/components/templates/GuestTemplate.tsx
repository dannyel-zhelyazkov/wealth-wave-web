import { FC, Fragment, ReactNode, useState } from 'react'
import { Button } from '@/components/atoms'
import { useLocation, useNavigate } from 'react-router-dom'
import { APP_REDIRECT_ROUTES } from '@/constants'

type GuestTemplateProps = { children: ReactNode }

const oppositeAuthMethods = (rawKey: string) => {
  const key = rawKey.replace('/', '')

  const methods: Record<string, { label: string; redirect_path: string }> = {
    'sign-up': {
      label: 'Sign In',
      redirect_path: APP_REDIRECT_ROUTES.SIGN_IN_REDIRECT_ROUTE,
    },
    'sign-in': {
      label: 'Sign Up',
      redirect_path: APP_REDIRECT_ROUTES.SIGN_UP_REDIRECT_ROUTE,
    },
  }

  return methods[key]
}

export const GuestTemplate: FC<GuestTemplateProps> = ({ children }) => {
  const { pathname } = useLocation()

  const navigate = useNavigate()
  const [authMethod, setAuthMethod] = useState(oppositeAuthMethods(pathname))

  const handleToggleAuthMethod = () => {
    const newAuthMethod =
      authMethod.label === 'Sign In'
        ? oppositeAuthMethods('sign-in')
        : oppositeAuthMethods('sign-up')

    navigate(authMethod.redirect_path)
    setAuthMethod(newAuthMethod)
  }

  return (
    <Fragment>
      <header className="flex justify-between w-full h-[8%] p-3 bg-white">
        <h1 className="text-secondary self-center">Wealth Wave</h1>
        <Button
          className="self-center"
          label={authMethod.label}
          variant="info"
          onClick={handleToggleAuthMethod}
        />
      </header>
      <main className="flex items-center justify-center h-[92%] w-full">
        {children}
      </main>
      <footer></footer>
    </Fragment>
  )
}
