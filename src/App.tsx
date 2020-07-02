import React from 'react'
import s from './App.module.scss'

import { navBarItems, professional, career } from './config'

import { Header } from './components/UI/Header'
import { Cover } from './components/Cover'
import { Headline } from './components/UI/Headline'
import { Biography } from './components/Biography'

import cover from './assets/images/cover_2.png'
import worker from './assets/images/worker.png'
import logo from './assets/images/nature-1.jpg'
import professionalPhoto from './assets/images/professional.png'
import { Career } from './components/Career'

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
          bio="Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
          img={professionalPhoto}
        />
        <Career
          firstColumn={career.firstColumn}
          secondColumn={career.secondColumn}
        />
      </div>
    </>
  )
}

export default App
