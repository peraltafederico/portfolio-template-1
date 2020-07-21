import React, { useLayoutEffect, useState } from 'react'
import s from './Career.module.scss'
import * as t from '../../@types'
import { Experience } from './Experience'
import { Headline } from '../UI/Headline'

interface CareerProps {
  firstColumn: t.Experience
  secondColumn: t.Experience
  title: string
}

export const Career = ({ firstColumn, secondColumn, title }: CareerProps) => {
  return (
    <section className={s.container}>
      <Headline title={title} />
      <div className={s.experienceContainer}>
        <Experience
          title={firstColumn.title}
          activities={firstColumn.activities}
        />
        <Experience
          title={secondColumn.title}
          activities={secondColumn.activities}
        />
      </div>
    </section>
  )
}
