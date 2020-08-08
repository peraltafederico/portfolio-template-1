import React from 'react'
import s from './Textarea.module.scss'

export interface TextareaPros {
  label: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  name: string
}

export const Textarea = ({ label, name, onChange }: TextareaPros) => (
  <div className={s.container}>
    <label htmlFor={name}>{label}</label>
    <textarea name={name} onChange={onChange} />
  </div>
)
