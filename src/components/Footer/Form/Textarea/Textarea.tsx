import React from 'react'
import s from './Textarea.module.scss'

export interface TextareaPros {
  label: string
  name: string
}

export const Textarea = ({ label, name }: TextareaPros) => (
  <div className={s.container}>
    <label htmlFor={name}>{label}</label>
    <textarea name={name} id={name} />
  </div>
)
