import React from 'react'
import s from './Form.module.scss'
import { Input } from './Input'
import { Textarea } from './Textarea'
import { Button } from './Button'

export const Form = () => (
  <form className={s.container}>
    <div className={s.inputsContainer}>
      <Input label="NOMBRE" name="name" />
      <Input label="APELLIDO" name="lastname" />
      <Input label="EMPRESA" name="enterprise" />
      <Input label="PAIS" name="country" />
    </div>
    <div className={s.textareaContainer}>
      <Textarea label="MENSAJE" name="message" />
    </div>
    <div className={s.buttonContainer}>
      <Button text="Enviar" />
    </div>
  </form>
)
