import React, { FC, useRef, useEffect, useState, useLayoutEffect } from 'react'
import clsx from 'clsx'
import s from './Header.module.scss'
import menu from '../../../assets/icons/menu.svg'
import { useDimensions } from '../../../hooks/useDimensions'

interface HeaderProps {
  navBarItems: string[]
  logo: string
}

export const Header: FC<HeaderProps> = ({ navBarItems, logo }: HeaderProps) => {
  const rootRef = useRef(null)
  const [hideItems, setHideItems] = useState(false)
  const [scroll, setScroll] = useState(false)
  const { width } = useDimensions()

  useLayoutEffect(() => {
    if (width <= 640) {
      setHideItems(true)
    }
  }, [width])

  useEffect(() => {
    window.onscroll = () => {
      const { scrollY } = window

      if (scrollY > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
  }, [])

  return (
    <div className={clsx(s.container, scroll && s.scroll)} ref={rootRef}>
      <img className={s.logo} alt="Professional" src={logo} />
      {!hideItems && (
        <div className={s.itemsContainer}>
          {navBarItems.map((item) => (
            <div key={item}>
              <a href={`#${item}`}>{item}</a>
              <div className={s.underline} />
            </div>
          ))}
        </div>
      )}
      {hideItems && <img src={menu} alt="Menu" />}
    </div>
  )
}
