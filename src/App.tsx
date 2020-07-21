import React from 'react'
import s from './App.module.scss'

import { navBarItems, professional, career, photos, columns } from './config'

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

function App() {
  return (
    <>
      <Header navBarItems={navBarItems} logo={logo} />
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
        <Footer columns={columns} />
      </div>
    </>
  )
}

export default App
