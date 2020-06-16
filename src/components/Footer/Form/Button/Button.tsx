import React from 'react'
import s from './Button.module.scss'

export interface ButtonPros {
  text: string
}

export const Button = ({ text }: ButtonPros) => (
  <div className={s.container}>
    <span>{text}</span>
  </div>
)
