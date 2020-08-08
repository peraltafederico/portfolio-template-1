import React, { FC } from 'react'
import { Element } from 'react-scroll'
import s from './ContactForm.module.scss'
import { Input } from './Input'
import { Textarea } from './Textarea'
import { Button } from './Button'
import { FormValues } from '../../../@types'
import { SectionsEnum } from '../../../enums'

interface Props {
  values: FormValues
  onSubmit: any
  onChange: (event: React.FormEvent<HTMLFormElement>) => void
  validationSchema: any
  errors: any
}

export const ContactForm: FC<Props> = ({
  onSubmit,
  onChange,
  errors,
}: Props) => {
  console.log(errors)
  return (
    <Element name={SectionsEnum.CONTACT} className={s.container}>
      <form onSubmit={onSubmit}>
        <div className={s.inputsContainer}>
          <Input label="NAME" name="name" onChange={onChange} />
          <Input label="EMAIL" name="email" onChange={onChange} />
          <Input label="COMPANY" name="company" onChange={onChange} />
          <Input label="COUNTRY" name="country" onChange={onChange} />
        </div>
        <div className={s.textareaContainer}>
          <Textarea label="MESSAGE" name="message" onChange={onChange} />
        </div>
        <div className={s.buttonContainer}>
          <Button text="Enviar" type="submit" />
        </div>
      </form>
    </Element>
  )
}
