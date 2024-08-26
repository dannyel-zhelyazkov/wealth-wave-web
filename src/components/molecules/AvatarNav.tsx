import { Select } from '@/components/atoms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const AvatarMenu = () => {
  return (
    <div className="flex h-[60px] w-[60px] items-end justify-center rounded-[50%] bg-alert">
      <FontAwesomeIcon icon={faUser} size="3x" color="white" />
    </div>
  )
}

export const AvatarNav = () => {
  return (
    <Select
      opener={<AvatarMenu />}
      options={[{ label: 'dani', value: 'dani' }]}
    />
  )
}
