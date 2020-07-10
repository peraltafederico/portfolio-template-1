import React from 'react'
import Gallery from 'react-photo-gallery'
import s from './Portfolio.module.scss'
import { Headline } from '../UI/Headline'

interface Photo {
  src: string
  width: number
  height: number
}

interface Props {
  photos: Photo[]
  title: string
}

export const Portfolio = ({ photos, title }: Props) => {
  return (
    <section className={s.container}>
      <Headline title={title} />
      <div className={s.galleryContainer}>
        <Gallery photos={photos} direction="row" />
      </div>
    </section>
  )
}

export default Portfolio
