import { FC, HTMLProps } from 'react'

type NavItemProps = {
  label: string
} & HTMLProps<HTMLLIElement>

export const NavItem: FC<NavItemProps> = ({ label, className, ...rest }) => {
  return (
    <li className={`${className}`} {...rest}>
      {label}
    </li>
  )
}
