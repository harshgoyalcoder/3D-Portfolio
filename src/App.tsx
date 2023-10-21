// import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Contact from './components/contact'
import About from './components/about'
import Experience from './components/experience'
import Works from './components/works'
import Tech from './components/tech'
import { StarsCanvas } from './components/canvas'
import Parallax from './components/parallex'

function App() {

  return (
    <BrowserRouter>
        <div>
          <section id='Homepage' className='bg-hero-pattern  '>
          <Navbar/>
          <Hero/>
          </section>

          <section id='services'>
          <Parallax type="services" />
         </section>
         <section >

        <About/>
        
        <Parallax type="Portfolio" />
        </section>
        <section id="experience">
        <Experience/>
          </section>
        <section id="Skills">
        <Tech/>
          </section>
        <section id="Works">
        <Works/>
          </section>


        <section id="Contact" className='relative z-0'>
          <StarsCanvas />
        <Contact/>
         </section> 
     


      </div>

    </BrowserRouter>
  )
}

export default App
