import React, { FC } from 'react'
import { Element } from 'react-scroll'
import { ObjectSchema } from 'yup'
import { FormikErrors } from 'formik'
import s from './ContactForm.module.scss'
import { Input } from './Input'
import { Textarea } from './Textarea'
import { Button } from './Button'
import { FormValues } from '../../../@types'
import { SectionsEnum } from '../../../enums'

interface Props {
  values: FormValues
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  validationSchema: ObjectSchema<FormValues>
  errors: FormikErrors<FormValues>
  isSubmitting: boolean
}

export const ContactForm: FC<Props> = ({
  onSubmit,
  onChange,
  errors,
  isSubmitting,
}: Props) => {
  console.log(errors)
  return (
    <Element name={SectionsEnum.CONTACT} className={s.container}>
      <form onSubmit={onSubmit}>
        <div className={s.inputsContainer}>
          <Input
            label="NAME"
            name="name"
            onChange={onChange}
            hasError={!!errors.name}
          />
          <Input
            label="EMAIL"
            name="email"
            onChange={onChange}
            hasError={!!errors.email}
          />
          <Input label="COMPANY" name="company" onChange={onChange} />
          <Input
            label="COUNTRY"
            name="country"
            onChange={onChange}
            hasError={!!errors.country}
          />
        </div>
        <div className={s.textareaContainer}>
          <Textarea
            label="MESSAGE"
            name="message"
            onChange={onChange}
            hasError={!!errors.message}
          />
        </div>
        <div className={s.buttonContainer}>
          <Button text="Enviar" type="submit" />
        </div>
      </form>
    </Element>
  )
}
