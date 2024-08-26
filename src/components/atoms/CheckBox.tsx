import { FC, HTMLProps, useState } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

type CheckBoxProps = {
  label: string
} & HTMLProps<HTMLInputElement>

export const CheckBox: FC<CheckBoxProps> = ({ label, ...rest }) => {
  const [checked, setChecked] = useState(false)

  const boxClass = classNames(
    'flex items-center justify-center ml-[0.125rem] w-[20px] h-[20px] border-2 border-black cursor-pointer rounded-xl text-white',
    {
      'bg-tertiary': checked,
    },
  )

  const handleToggleCheck = () => setChecked((value) => !value)

  return (
    <div
      className="flex items-center gap-x-2 cursor-pointer"
      onClick={handleToggleCheck}
    >
      <div className={boxClass}>
        {checked ? (
          <FontAwesomeIcon icon={faCheck} className="text-label-sm" />
        ) : null}
      </div>
      <label htmlFor={rest.id} className="cursor-pointer text-label">
        {label}
      </label>
    </div>
  )
}
