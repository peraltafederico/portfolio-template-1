import React, { FC } from 'react'
import s from './Headline.module.scss'

interface HeadlineProps {
  title: string
}

export const Headline: FC<HeadlineProps> = ({ title }: HeadlineProps) => {
  return (
    <div className={s.container}>
      <h1>{title}</h1>
    </div>
  )
}
