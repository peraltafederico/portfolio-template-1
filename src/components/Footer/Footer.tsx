import React from 'react'
import { Contact, ContactPros } from './Contact'
import { Form } from './Form'
import s from './Footer.module.scss'
import bh from '../../assets/images/behance-logo.png'

export const Footer = ({ columns }: ContactPros) => (
  <div className={s.container}>
    <div className={s.contactContainer}>
      <img src={bh} width="200" height="200" alt="BEHANCE" />
      <Contact columns={columns} />
    </div>
    <Form />
  </div>
)
