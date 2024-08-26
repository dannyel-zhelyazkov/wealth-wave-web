import { FC, Fragment, ReactNode } from 'react'
import { useSignOutQuery } from '@/queries'
import { useNavigate } from 'react-router-dom'
import { APP_REDIRECT_ROUTES } from '@/constants'
import { AvatarNav } from '@/components/molecules/AvatarNav.tsx'
import { SIDE_NAV_ITEMS } from '@/constants/navigation.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

type UserTemplateProps = { children: ReactNode }

export const UserTemplate: FC<UserTemplateProps> = ({ children }) => {
  const navigate = useNavigate()
  const { signOut } = useSignOutQuery()

  const handleNavigateHome = () => {
    navigate(APP_REDIRECT_ROUTES.BASE_APP_REDIRECT_ROUTE)
  }

  const handleSignOut = async () => {
    await signOut()

    localStorage.removeItem('user_id')
    navigate(APP_REDIRECT_ROUTES.SIGN_IN_REDIRECT_ROUTE)
  }

  const handleNavigate = (item: any) => () => {
    navigate(item.navigate)
  }

  return (
    <Fragment>
      <main className="flex h-full">
        <aside className="w-[13%] bg-secondary">
          <div
            className="mb-16 flex h-[8%] cursor-pointer flex-col items-center justify-center"
            onClick={handleNavigateHome}
          >
            <h1 className="text-white">Wealth Wave</h1>
          </div>
          <div className="ml-8 flex h-[85%] flex-col justify-between">
            <nav>
              <ul className="flex w-full flex-col">
                {SIDE_NAV_ITEMS.map((item) => (
                  <li
                    key={item.navigate}
                    className="mb-8 w-fit cursor-pointer rounded-xl p-3 text-white hover:bg-main"
                    onClick={handleNavigate(item)}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="mr-6"
                      size="lg"
                    />
                    <span className="text-nav">{item.label}</span>
                  </li>
                ))}
              </ul>
            </nav>
            <div
              className="text-label-xl w-fit cursor-pointer p-3 text-white"
              onClick={handleSignOut}
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="mr-6" />
              <span>Sign Out</span>
            </div>
          </div>
        </aside>
        <article className="h-full w-[87%]">
          <header className="h-[8%] bg-white px-8">
            <nav className="flex h-full items-center justify-end">
              <AvatarNav />
            </nav>
          </header>
          <div className="flex h-[92%] items-center justify-center">
            {children}
          </div>
        </article>
      </main>
      <footer></footer>
    </Fragment>
  )
}
