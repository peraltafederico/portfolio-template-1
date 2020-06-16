import React, { useEffect, useState, useRef } from 'react'
import Swiper from 'react-id-swiper'
import './Gallery.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface Project {
  img: string
  title: string
  description: string
}

interface GalleryProps {
  projects: Project[]
}

export const Gallery = ({ projects }: GalleryProps) => {
  const [gallerySwiper, setGallerySwiper] = useState(null)
  const [thumbnailSwiper, setThumbnailSwiper] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const gallerySwiperParams = {
    getSwiper: setGallerySwiper,
    loop: true,
    watchSlidesProgress: true,
    effect: 'fade',
    speed: 800,
  }

  const thumbnailSwiperParams = {
    getSwiper: setThumbnailSwiper,
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: true,
    slideToClickedSlide: true,
    freeMode: true,
    freeModeMomentumVelocityRatio: 1,
    preventClicks: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  }

  useEffect(() => {
    if (thumbnailSwiper && gallerySwiper) {
      gallerySwiper.on('slideChange', () => {
        setActiveSlide(gallerySwiper.realIndex)
      })
      thumbnailSwiper.on('autoplay click', () => {
        setActiveSlide(thumbnailSwiper.realIndex)
      })
    }
  }, [thumbnailSwiper, gallerySwiper])

  useEffect(() => {
    if (gallerySwiper) {
      gallerySwiper.slideToLoop(activeSlide)
    }
  }, [gallerySwiper, activeSlide])

  return (
    <div className="container">
      <TransitionGroup className="project-info">
        <CSSTransition
          key={activeSlide}
          timeout={500}
          classNames="info"
          component="div"
        >
          <div>
            <div className="title">
              <h1>{projects[activeSlide].title}</h1>
            </div>
            <div className="description">
              <p>{projects[activeSlide].description}</p>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Swiper
        {...gallerySwiperParams}
        containerClass="swiper-container gallery-top"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{ backgroundImage: `url(${project.img})` }}
          />
        ))}
      </Swiper>

      <Swiper
        {...thumbnailSwiperParams}
        containerClass="swiper-container gallery-thumbs"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{ backgroundImage: `url(${project.img})` }}
          />
        ))}
      </Swiper>
    </div>
  )
}
