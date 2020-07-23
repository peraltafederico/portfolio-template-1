/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useLayoutEffect, useState } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-image-lightbox'
import s from './Portfolio.module.scss'
import { Headline } from '../UI/Headline'
import { useDimensions } from '../../hooks/useDimensions'
import 'react-image-lightbox/style.css'
import { Caption } from './Caption'

interface Photo {
  src: string
  width: number
  height: number
  title?: string
  text?: string
}

interface Props {
  photos: Photo[]
  title: string
}

export const Portfolio = ({ photos, title }: Props) => {
  const [imgIndex, setImgIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const { width } = useDimensions()

  const images = photos.map((photo): string => photo.src)
  const nextImgIndex = (imgIndex + 1) % images.length
  const prevImgIndex = (imgIndex + images.length - 1) % images.length

  useLayoutEffect(() => {
    if (width < 640) {
      photos.forEach((photo) => ((photo.height = 2), (photo.width = 3)))
    }
  }, [width, photos])

  const onClick = (a) => {
    setImgIndex(a.index)
    setLightboxOpen(true)
  }

  return (
    <section className={s.container}>
      <Headline title={title} />
      <div className={s.galleryContainer}>
        <Gallery
          photos={photos}
          direction="row"
          margin={5}
          onClick={(a, b) => onClick(b)}
        />
      </div>
      <div>
        {lightboxOpen && (
          <Lightbox
            mainSrc={images[imgIndex]}
            nextSrc={images[nextImgIndex]}
            prevSrc={images[prevImgIndex]}
            onCloseRequest={() => setLightboxOpen(false)}
            onMovePrevRequest={() => setImgIndex(prevImgIndex)}
            onMoveNextRequest={() => setImgIndex(nextImgIndex)}
            enableZoom={false}
            wrapperClassName={s.wrapperLightbox}
            imageCaption={
              <Caption
                title={photos[imgIndex].title}
                text={photos[imgIndex].text}
              />
            }
          />
        )}
      </div>
    </section>
  )
}

export default Portfolio
