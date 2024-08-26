import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/app'
import { SignInPage, HomePage, SignUpPage } from '@/components/pages'
import { APP_ROUTES } from '@/constants'

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.BASE_ROUTE,
    element: <App />,
    children: [
      {
        path: APP_ROUTES.SIGN_IN,
        element: <SignInPage />,
      },
      {
        path: APP_ROUTES.SIGN_UP,
        element: <SignUpPage />,
      },
      {
        path: APP_ROUTES.BASE_APP_ROUTES,
        element: <HomePage />,
      },
    ],
  },
])
