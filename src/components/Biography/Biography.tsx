import React from 'react'
import s from './Biography.module.scss'
import { Headline } from '../UI/Headline'

interface BiographyProps {
  img: string
  bio: string
}

export const Biography = ({ img, bio }: BiographyProps) => (
  <section className={s.container}>
    <Headline title="Quién Soy?" />
    <div className={s.bioContainer}>
      <img src={img} alt="Biography" />
      <p>{bio}</p>
    </div>
  </section>
)
