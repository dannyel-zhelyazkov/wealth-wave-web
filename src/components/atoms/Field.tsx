import { FC, HTMLProps } from 'react'
import classNames from 'classnames'

type FieldProps = {
  children: React.ReactNode
  flow: 'row' | 'col'
  className?: string
} & HTMLProps<HTMLDivElement>

export const Field: FC<FieldProps> = ({
  children,
  flow,
  className,
  ...rest
}) => {
  const styles = classNames('flex text-light-gray w-full', {
    'flex-col': flow === 'col',
    'flex-row': flow === 'row',
  })

  return (
    <div className={`${styles} ${className}`} {...rest}>
      {children}
    </div>
  )
}
