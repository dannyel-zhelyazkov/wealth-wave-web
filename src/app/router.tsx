import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/app'
import { SignInPage, SignUpPage, DashboardPage } from '@/components/pages'
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
        element: <DashboardPage />,
        children: [
          {
            path: APP_ROUTES.TRANSACTIONS_ROUTE,
            element: <DashboardPage />,
          },
          {
            path: APP_ROUTES.BUDGET_ROUTE,
            element: <DashboardPage />,
          },
          {
            path: APP_ROUTES.REPORTS_ROUTE,
            element: <DashboardPage />,
          },
          {
            path: APP_ROUTES.SETTINGS_ROUTE,
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
])
