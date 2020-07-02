import React from 'react'
import s from './Experience.module.scss'
import { Headline } from '../../UI/Headline'
import { Card } from '../../UI/Card'
import * as t from '../../../@types/index'

type ExperienceProps = t.Experience

export const Experience = ({ title, activities }: ExperienceProps) => {
  return (
    <div className={s.container}>
      <Headline title={title} />
      {activities.map((exp) => (
        <div key={exp.title} className={s.experience}>
          <Card
            date={exp.date}
            description={exp.description}
            subtitle={exp.subtitle}
            title={exp.title}
          />
        </div>
      ))}
    </div>
  )
}
