import React from 'react'
import { Contact, ContactPros } from './Contact'
import { Form } from './Form'
import s from './Footer.module.scss'
import bh from '../../assets/images/behance-logo.png'

export const Footer = ({ columns }: ContactPros) => (
  <div className={s.container}>
    <div className={s.contactContainer}>
      <div className={s.imgContainer}>
        <img src={bh} alt="BEHANCE" style={{ alignContent: 'center' }} />
      </div>
    </div>
    <Form />
    <Contact columns={columns} />
  </div>
)
