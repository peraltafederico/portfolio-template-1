import React from 'react'
import clsx from 'clsx'
import s from './Input.module.scss'

export interface InputPros {
  label: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  className?: string
  hasError?: boolean
}

export const Input = ({
  label,
  onChange,
  name,
  className,
  hasError,
}: InputPros) => (
  <div className={clsx(s.container, className, hasError && s.error)}>
    <label htmlFor={name}>{label}</label>
    <input onChange={onChange} name={name} />
  </div>
)
