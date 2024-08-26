import { FC, HTMLProps } from 'react'
import classNames from 'classnames'

type ButtonType = 'submit' | 'reset' | 'button' | undefined

type ButtonProps = {
  label?: string
  variant?: 'main' | 'secondary' | 'info' | 'success' | 'warning'
  isLoading?: boolean
} & HTMLProps<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({
  label,
  variant = 'main',
  isLoading,
  className,
  type,
  disabled,
  ...rest
}) => {
  const mainStyles = classNames(`relative px-3 py-2 rounded-xl !h-fit`, {
    'opacity-50': disabled,
    'bg-main': variant === 'main',
    'bg-secondary': variant === 'secondary',
    'bg-info': variant === 'info',
    'bg-success': variant === 'success',
    'bg-warning': variant === 'warning',
  })

  return (
    <button
      className={`${mainStyles} ${className}`}
      disabled={disabled || isLoading}
      type={type as ButtonType}
      {...rest}
    >
      <span className="text-button">{label}</span>
    </button>
  )
}
