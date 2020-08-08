import React from 'react'
import s from './Input.module.scss'

export interface InputPros {
  label: string
  onChange: any
  name: string
}

export const Input = ({ label, onChange, name }: InputPros) => (
  <div className={s.container}>
    <label htmlFor={name}>{label}</label>
    <input onChange={onChange} name={name} />
  </div>
)
