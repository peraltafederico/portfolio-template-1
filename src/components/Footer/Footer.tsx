import React, { useState, useLayoutEffect } from 'react'
import { Contact, ContactPros } from './Contact'
import { ContactForm } from './ContactForm'
import s from './Footer.module.scss'
import bh from '../../assets/images/behance-logo.png'
import { useDimensions } from '../../hooks/useDimensions'
import { FormValues } from '../../@types'

type FooterProps = ContactPros & {
  imgLink: string
  onChangeForm: (event: React.FormEvent<HTMLFormElement>) => void
  onSubmitForm: any
  formValues: FormValues
  validationSchema: any
  formErrors: any
}

export const Footer = ({
  columns,
  imgLink,
  onChangeForm,
  onSubmitForm,
  formValues,
  validationSchema,
  formErrors,
}: FooterProps) => {
  const [responsive, setResponsive] = useState(true)
  const { width } = useDimensions()

  useLayoutEffect(() => {
    if (width >= 992) {
      setResponsive(false)
    }
  }, [width])

  return (
    <section>
      <div className={s.container}>
        <div className={s.contactContainer}>
          <div className={s.imgContainer}>
            <a href={imgLink} target="_blank" rel="noreferrer">
              <img
                src={bh}
                alt="portfolio"
                style={{ alignContent: 'center' }}
              />
            </a>
          </div>
          {!responsive && <Contact columns={columns} />}
        </div>
        <ContactForm
          values={formValues}
          onSubmit={onSubmitForm}
          onChange={onChangeForm}
          validationSchema={validationSchema}
          errors={formErrors}
        />
        {responsive && <Contact columns={columns} />}
      </div>
    </section>
  )
}
