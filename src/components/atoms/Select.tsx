import { FC, ReactNode, useState } from 'react'

type SelectProps = {
  options: { value: string; label: string }[]
  opener: ReactNode
}

export const Select: FC<SelectProps> = ({ options, opener }) => {
  const [open, setOpen] = useState(false)

  const handleToggleMenu = () => setOpen((open) => !open)

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={handleToggleMenu}>
        {opener}
      </div>
      {open ? (
        <div className="absolute left-[-80px] top-[100%] w-[150px] rounded-xl bg-secondary p-3">
          <ul>
            {options.map((opt) => (
              <li
                key={opt.value}
                className="cursor-pointer rounded-xl px-2 py-1 text-body text-white hover:bg-tertiary"
              >
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
