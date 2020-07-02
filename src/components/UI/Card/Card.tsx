import React from 'react'
import s from './Card.module.scss'
import { Experience, Activity } from '../../../@types'

type CardProps = Activity

export const Card = ({ date, title, subtitle, description }: CardProps) => {
  return (
    <div className={s.container}>
      <span className={s.date}>{date}</span>
      <h4 className={s.title}>{title}</h4>
      <h6 className={s.subtitle}>{subtitle}</h6>
      <p className={s.description}>{description}</p>
    </div>
  )
}

export default Card
