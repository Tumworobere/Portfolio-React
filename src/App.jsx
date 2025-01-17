import React from 'react'
// import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Projects from './components/project/Projects'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <About />
      <Resume />
      <Projects />
      {/* <Header /> */}
      <Nav />     
      
      <Experience />
      {<Services /> }  
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App