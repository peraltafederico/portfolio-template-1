import React from 'react'
import { Element } from 'react-scroll'
import s from './Career.module.scss'
import * as t from '../../@types'
import { Experience } from './Experience'
import { Headline } from '../UI/Headline'
import { SectionsEnum } from '../../enums'

interface CareerProps {
  firstColumn: t.Experience
  secondColumn: t.Experience
  title: string
}

export const Career = ({ firstColumn, secondColumn, title }: CareerProps) => {
  return (
    <section className={s.container}>
      <Element name={SectionsEnum.CAREER}>
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
      </Element>
    </section>
  )
}
