import React from 'react'
import s from './Button.module.scss'

export interface ButtonPros {
  text: string
  type?: any
}

export const Button = ({ text, type = 'button' }: ButtonPros) => (
  // eslint-disable-next-line react/button-has-type
  <button className={s.container} type={type}>
    <span>{text}</span>
  </button>
)
