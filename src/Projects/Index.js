import React from 'react'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import Skills from './Pages/Skills'
 import Testimonials from './Pages/Testimonials'
import Works from './Pages/Works'

// comments......


const Index = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <About />
        <Works />
        <Skills />
        <Testimonials />
        <Footer />

    </div>
  )
}

export default Index