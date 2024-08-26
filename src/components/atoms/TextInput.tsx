import { Fragment, HTMLProps } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'
import classNames from 'classnames'

type FieldValues = Record<
  string,
  string | number | readonly string[] | undefined
>

type TextInputProps<T extends FieldValues> = {
  label: string
} & UseControllerProps<T> &
  HTMLProps<HTMLInputElement>

export const TextInput = <T extends FieldValues>(props: TextInputProps<T>) => {
  const { field, fieldState } = useController(props)

  const errorStyle = classNames(
    'p-2 rounded-xl outline-none text-black active:border-black border-black border-2',
    {
      'border-2 border-error active:border-error': fieldState.invalid,
    },
  )

  return (
    <Fragment>
      <input
        id={field.name}
        className={errorStyle}
        placeholder={props.label}
        {...field}
        {...props}
      />
      {fieldState.invalid ? (
        <p className="text-error mt-1 text-label-sm">
          {fieldState.error?.message}
        </p>
      ) : null}
    </Fragment>
  )
}
