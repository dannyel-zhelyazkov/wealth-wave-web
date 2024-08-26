import { authFirebaseApi } from '@/api/firebase/auth.ts'
import { authClient } from '@/clients'

export const api = {
  firebase: {
    auth: authFirebaseApi(authClient),
  },
}
