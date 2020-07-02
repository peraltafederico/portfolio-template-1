import React, { FC } from 'react'
import s from './Cover.module.scss'

interface CoverProps {
  title: string
  label: string
  cover: string
  img: string
}

export const Cover: FC<CoverProps> = ({
  title,
  label,
  cover,
  img,
}: CoverProps) => (
  <div id={s.cover} style={{ backgroundImage: `url(${cover})` }}>
    <div className={s.container}>
      <div className={s.infoContainer}>
        <h1>{title}</h1>
        <h2>{label}</h2>
      </div>
      {/* <div className={s.imgContainer}>
        <img src={img} alt="Description" />
      </div> */}
    </div>
  </div>
)
