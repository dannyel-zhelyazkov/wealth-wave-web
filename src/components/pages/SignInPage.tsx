import { FC } from 'react'
import { SignInForm } from '@/components/molecules'
import { GuestTemplate } from '@/components/templates'

export const SignInPage: FC = () => {
  return (
    <GuestTemplate>
      <div className="w-[450px] flex flex-col items-center bg-white rounded-xl p-10">
        <SignInForm />
      </div>
    </GuestTemplate>
  )
}
