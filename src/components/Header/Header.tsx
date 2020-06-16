import React, { FC } from 'react'
import s from './Header.module.scss'

interface HeaderProps {
  navBarItems: string[]
  logo: string
}

export const Header: FC<HeaderProps> = ({ navBarItems, logo }: HeaderProps) => (
  <div className={s.container}>
    <img className={s.logo} alt="TOMAS BOJORGE" src={logo} />
    <div className={s.itemsContainer}>
      {navBarItems.map((item) => (
        <div key={item}>
          <a href={`#${item}`}>{item}</a>
          <div className={s.underline} />
        </div>
      ))}
    </div>
  </div>
)
