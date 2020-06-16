import React from 'react'
import s from './App.module.scss'
import { Header } from './components/Header'
import { Cover } from './components/Cover'
import cover from './assets/images/logo.jpg'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'
import { navBarItems, professional, projects, columns } from './config'
import logo from './assets/images/client-logo.png'

function App() {
  return (
    <>
      <Header navBarItems={navBarItems} logo={logo} />
      <div className={s.content}>
        <Cover
          title={professional.name}
          label={professional.job}
          cover={cover}
        />
        <Gallery projects={projects} />
        <Footer columns={columns} />
      </div>
    </>
  )
}

export default App
