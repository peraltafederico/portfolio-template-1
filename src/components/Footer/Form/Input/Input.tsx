import React from 'react'
import s from './Input.module.scss'

export interface InputPros {
  name: string
  label: string
  type?: string
}

export const Input = ({ label, name, type }: InputPros) => (
  <div className={s.container}>
    <label htmlFor={name}>{label}</label>
    <input name={name} id={name} type={type} />
  </div>
)
