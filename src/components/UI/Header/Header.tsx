import React, { FC, useEffect, useState, useLayoutEffect, useRef } from 'react'
import clsx from 'clsx'
import { scroller } from 'react-scroll'
import s from './Header.module.scss'
import menu from '../../../assets/icons/menu.svg'
import { useDimensions } from '../../../hooks/useDimensions'

interface HeaderProps {
  items: {
    name: string
    scrollTo: string
  }[]
  logo: string
}

export const Header: FC<HeaderProps> = ({ items, logo }: HeaderProps) => {
  const [hideItems, setHideItems] = useState(false)
  const [scroll, setScroll] = useState(false)
  const { width } = useDimensions()
  const rootRef = useRef<HTMLDivElement>(null)

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

  const onClick = (element) => {
    const headerWidth = rootRef.current.offsetHeight

    scroller.scrollTo(element, {
      duration: 600,
      delay: 0,
      smooth: 'easeInOut',
      offset: -headerWidth,
    })
  }

  return (
    <div className={clsx(s.container, scroll && s.scroll)} ref={rootRef}>
      <img className={s.logo} alt="professional" src={logo} />
      {!hideItems && (
        <div className={s.itemsContainer}>
          {items.map((item) => (
            <div key={item.name}>
              <a
                href={`#${item.name.toLowerCase()}`}
                onClick={() => onClick(item.scrollTo)}
              >
                {item.name.toUpperCase()}
              </a>
              <div className={s.underline} />
            </div>
          ))}
        </div>
      )}
      {hideItems && <img src={menu} alt="Menu" />}
    </div>
  )
}
