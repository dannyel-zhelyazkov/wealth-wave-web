import { FC } from 'react'
import { GuestTemplate } from '@/components/templates'
import { SignUpForm } from '@/components/molecules'

export const SignUpPage: FC = () => {
  return (
    <GuestTemplate>
      <div className="w-[450px] flex flex-col items-center bg-white rounded-xl p-10">
        <SignUpForm />
      </div>
    </GuestTemplate>
  )
}
