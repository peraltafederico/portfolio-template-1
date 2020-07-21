import React, { useState, useLayoutEffect } from 'react'
import { Contact, ContactPros } from './Contact'
import { Form } from './Form'
import s from './Footer.module.scss'
import bh from '../../assets/images/behance-logo.png'
import { useDimensions } from '../../hooks/useDimensions'

export const Footer = ({ columns }: ContactPros) => {
  const [responsive, setResponsive] = useState(true)
  const { width } = useDimensions()

  useLayoutEffect(() => {
    if (width >= 992) {
      setResponsive(false)
    }
  }, [width])

  return (
    <div className={s.container}>
      <div className={s.contactContainer}>
        <div className={s.imgContainer}>
          <img src={bh} alt="BEHANCE" style={{ alignContent: 'center' }} />
        </div>
        {!responsive && <Contact columns={columns} />}
      </div>
      <Form />
      {responsive && <Contact columns={columns} />}
    </div>
  )
}
