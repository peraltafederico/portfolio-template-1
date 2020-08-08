import React from 'react'
import clsx from 'clsx'
import s from './Textarea.module.scss'

export interface TextareaPros {
  label: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  name: string
  hasError?: boolean
}

export const Textarea = ({ label, name, onChange, hasError }: TextareaPros) => (
  <div className={clsx(s.container, hasError && s.error)}>
    <label htmlFor={name}>{label}</label>
    <textarea name={name} onChange={onChange} />
  </div>
)
