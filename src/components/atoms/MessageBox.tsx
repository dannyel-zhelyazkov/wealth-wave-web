import { FC, HTMLProps } from 'react'
import classNames from 'classnames'

type MessageBoxProps = {
  message: string | string[]
  variant: 'success' | 'alert' | 'error'
} & HTMLProps<HTMLDivElement>

export const MessageBox: FC<MessageBoxProps> = ({
  message,
  variant,
  className,
  ...rest
}) => {
  const messages = Array.isArray(message) ? (
    message.map((msg) => <p key={msg}>{msg}</p>)
  ) : (
    <p>{message}</p>
  )

  const boxClass = classNames(`p-[10px] rounded-xl text-white`, {
    'bg-success': variant === 'success',
    'bg-error': variant === 'error',
    'bg-alert': variant === 'alert',
  })

  return (
    <div className={`${boxClass} ${className}`} {...rest}>
      <div>{messages}</div>
    </div>
  )
}
