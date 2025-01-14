import React from 'react'
import Hero from './component/Hero'
import NavBar from './component/NavBar'
import About from './component/About'
import Skills from './component/Skills'
import Education from './component/Education'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>


      <NavBar />
      <Hero/>
      <About/>
      <Skills/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>

      </main>
      


    </>
  )
}

export default App
