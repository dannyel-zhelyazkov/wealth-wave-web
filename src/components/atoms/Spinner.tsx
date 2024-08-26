import '@/styles/spinner.css'
import { FC } from 'react'
import classNames from 'classnames'

type SpinnerProps = {
  size?: number
}

export const Spinner: FC<SpinnerProps> = ({ size }) => {
  const spinnerClass = classNames('loader', {
    [`w-[${size}px] h-[${size}px]`]: !!size,
  })

  return (
    <div className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className={spinnerClass} />
    </div>
  )
}
