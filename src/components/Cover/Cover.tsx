import React, { FC } from 'react'
import s from './Cover.module.scss'

interface CoverProps {
  title: string
  label: string
  cover: string
}

export const Cover: FC<CoverProps> = ({ title, label, cover }: CoverProps) => (
  <div className={s.container} style={{ backgroundImage: `url(${cover})` }}>
    <div>
      <h1>{title}</h1>
      <h2>{label}</h2>
    </div>
    {/* <div className={s.imgContainer}>
      <img src={img} alt="Professional" />
    </div> */}
  </div>
)
