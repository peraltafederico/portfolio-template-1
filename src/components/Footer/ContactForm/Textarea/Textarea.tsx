import React from 'react'
import s from './Textarea.module.scss'

export interface TextareaPros {
  label: string
  field: any
}

export const Textarea = ({ label, field }: TextareaPros) => (
  <div className={s.container}>
    <label htmlFor={field.name}>{label}</label>
    <textarea {...field} />
  </div>
)
