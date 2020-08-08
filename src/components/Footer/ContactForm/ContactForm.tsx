import React, { FC } from 'react'
import { Formik, Form, Field } from 'formik'
import s from './ContactForm.module.scss'
import { Input } from './Input'
import { Textarea } from './Textarea'
import { Button } from './Button'
import { FormValues } from '../../../@types'

interface Props {
  values: FormValues
  onSubmit: any
  onChange: (event: React.FormEvent<HTMLFormElement>) => void
}

export const ContactForm: FC<Props> = ({
  values,
  onSubmit,
  onChange,
}: Props) => (
  <Formik initialValues={values} onSubmit={onSubmit}>
    <Form className={s.container} onChange={onChange}>
      <div className={s.inputsContainer}>
        <Field name="name" placeholder="First Name">
          {({ field }) => <Input label="NAME" field={field} />}
        </Field>
        <Field name="email" placeholder="Email">
          {({ field }) => <Input label="EMAIL" field={field} />}
        </Field>
        <Field name="company" placeholder="Company">
          {({ field }) => <Input label="COMPANY" field={field} />}
        </Field>
        <Field name="country" placeholder="Country">
          {({ field }) => <Input label="COUNTRY" field={field} />}
        </Field>
      </div>
      <div className={s.textareaContainer}>
        <Field name="message">
          {({ field }) => <Textarea label="MESSAGE" field={field} />}
        </Field>
      </div>
      <div className={s.buttonContainer}>
        <Button text="Enviar" type="submit" />
      </div>
    </Form>
  </Formik>
)
