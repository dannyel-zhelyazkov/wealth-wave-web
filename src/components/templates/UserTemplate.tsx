import { Button } from '@/components/atoms'
import { FC, Fragment, ReactNode } from 'react'
import { useSignOutQuery } from '@/queries'
import { useNavigate } from 'react-router-dom'
import { APP_REDIRECT_ROUTES } from '@/constants'

type UserTemplateProps = { children: ReactNode }

export const UserTemplate: FC<UserTemplateProps> = ({ children }) => {
  const navigate = useNavigate()
  const { signOut, isPending } = useSignOutQuery()

  const handleSignOut = async () => {
    await signOut()

    localStorage.removeItem('user_id')
    navigate(APP_REDIRECT_ROUTES.SIGN_IN_REDIRECT_ROUTE)
  }

  return (
    <Fragment>
      <header className="flex justify-between w-full h-150px p-3 bg-white">
        <h1 className="text-secondary">Wealth Wave</h1>
        <Button
          label="Sign Out"
          variant="info"
          onClick={handleSignOut}
          isLoading={isPending}
        />
      </header>
      <main className="flex items-center justify-center h-screen w-full">
        {children}
      </main>
      <footer></footer>
    </Fragment>
  )
}
