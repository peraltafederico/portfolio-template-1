import React from 'react'
import s from './Biography.module.scss'
import { Headline } from '../UI/Headline'

interface BiographyProps {
  img: string
  bio: string
  title: string
}

export const Biography = ({ img, bio, title }: BiographyProps) => (
  <section className={s.container}>
    <Headline title={title} />
    <div className={s.bioContainer}>
      <div className={s.imgContainer}>
        <img src={img} alt="Biography" />
      </div>
      <p>{bio}</p>
    </div>
  </section>
)
