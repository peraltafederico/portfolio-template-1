import React from 'react'
import { Element } from 'react-scroll'
import s from './Biography.module.scss'
import { Headline } from '../UI/Headline'
import { SectionsEnum } from '../../enums'

interface BiographyProps {
  img: string
  bio: string
  title: string
}

export const Biography = ({ img, bio, title }: BiographyProps) => (
  <section className={s.container}>
    <Element name={SectionsEnum.BIOGRAPHY}>
      <Headline title={title} />
      <div className={s.bioContainer}>
        <div className={s.imgContainer}>
          <img src={img} alt="Biography" />
        </div>
        <p>{bio}</p>
      </div>
    </Element>
  </section>
)
