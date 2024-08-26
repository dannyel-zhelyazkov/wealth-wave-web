import { FC, useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '@/context/User.tsx'
import { APP_REDIRECT_ROUTES } from '@/constants'

export const App: FC = () => {
  const navigate = useNavigate()
  const user_ctx = useContext(UserContext)

  useEffect(() => {
    if (!user_ctx.user_id) navigate(APP_REDIRECT_ROUTES.SIGN_IN_REDIRECT_ROUTE)
  }, [user_ctx.user_id])

  return <Outlet />
}
