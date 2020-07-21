/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useLayoutEffect } from 'react'
import Gallery from 'react-photo-gallery'
import s from './Portfolio.module.scss'
import { Headline } from '../UI/Headline'
import { useDimensions } from '../../hooks/useDimensions'

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
  const { width } = useDimensions()

  useLayoutEffect(() => {
    if (width < 640) {
      photos.forEach((photo) => ((photo.height = 2), (photo.width = 3)))
    }
  }, [width, photos])

  return (
    <section className={s.container}>
      <Headline title={title} />
      <div className={s.galleryContainer}>
        <Gallery photos={photos} direction="row" margin={5} />
      </div>
    </section>
  )
}

export default Portfolio
