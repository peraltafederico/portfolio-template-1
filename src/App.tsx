import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import s from './App.module.scss'

import {
  navBarItems,
  professional,
  career,
  photos,
  columns,
  behanceUrl,
} from './config'

import { Header } from './components/UI/Header'
import { Cover } from './components/Cover'
import { Biography } from './components/Biography'

import cover from './assets/images/cover_2.png'
import worker from './assets/images/worker.png'
import logo from './assets/images/project-1.jpg'
import professionalPhoto from './assets/images/professional.png'
import { Career } from './components/Career'
import { Portfolio } from './components/Portfolio'
import { Footer } from './components/Footer'

const validationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required(),
  company: Yup.string().notRequired(),
  country: Yup.string().required(),
  message: Yup.string().required().min(10),
})

function App() {
  const {
    handleSubmit,
    handleChange,
    initialValues,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      company: '',
      country: '',
      message: '',
    },
    validationSchema,
    onSubmit(values) {},
  })

  return (
    <>
      <Header items={navBarItems} logo={logo} />
      <div className={s.content}>
        <Cover
          title={professional.name}
          label={professional.job}
          cover={cover}
          img={worker}
        />
        <Biography
          title="Quién soy?"
          bio="Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
          img={professionalPhoto}
        />
        <Career
          firstColumn={career.firstColumn}
          secondColumn={career.secondColumn}
          title="Career"
        />
        <Portfolio photos={photos} title="Portfolio" />
        <Footer
          validationSchema={validationSchema}
          columns={columns}
          imgLink={behanceUrl}
          formValues={initialValues}
          onChangeForm={handleChange}
          onSubmitForm={handleSubmit}
          formErrors={errors}
          isSubmitting={isSubmitting}
        />
      </div>
    </>
  )
}

export default App
