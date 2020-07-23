import React from 'react'
import s from './Caption.module.scss'

interface CaptionProps {
  title: string
  text: string
}

export const Caption = ({ title, text }: CaptionProps) => {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Caption
