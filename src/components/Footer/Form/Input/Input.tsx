import React from 'react'
import s from './Input.module.scss'

export interface InputPros {
  label: string
  name: string
}

export const Input = ({ label, name }: InputPros) => (
  <div className={s.container}>
    <label htmlFor={name}>{label}</label>
    <input name={name} id={name} />
  </div>
)
