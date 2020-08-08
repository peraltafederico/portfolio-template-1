import React from 'react'
import s from './Input.module.scss'

export interface InputPros {
  label: string
  field: any
}

export const Input = ({ label, field }: InputPros) => (
  <div className={s.container}>
    <label htmlFor={field.name}>{label}</label>
    <input {...field} />
  </div>
)
