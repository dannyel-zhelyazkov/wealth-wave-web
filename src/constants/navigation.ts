import {
  faFileAlt,
  faGear,
  faReceipt,
  faVault,
} from '@fortawesome/free-solid-svg-icons'
import { APP_REDIRECT_ROUTES } from '@/constants'

export const SIDE_NAV_ITEMS = [
  {
    label: 'Transactions',
    icon: faReceipt,
    navigate: APP_REDIRECT_ROUTES.TRANSACTIONS_APP_REDIRECT_ROUTE,
  },
  {
    label: 'Budget',
    icon: faVault,
    navigate: APP_REDIRECT_ROUTES.BUDGET_APP_REDIRECT_ROUTE,
  },
  {
    label: 'Reports',
    icon: faFileAlt,
    navigate: APP_REDIRECT_ROUTES.REPORTS_APP_REDIRECT_ROUTE,
  },
  {
    label: 'Settings',
    icon: faGear,
    navigate: APP_REDIRECT_ROUTES.SETTINGS_APP_REDIRECT_ROUTE,
  },
]
