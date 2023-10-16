// import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Contact from './components/contact'
import About from './components/about'
import Experience from './components/experience'
import Feedback from './components/feedback'
// import { StarsCanvas } from './components/canvas'
import Works from './components/works'
import Tech from './components/tech'
import { StarsCanvas } from './components/canvas'

function App() {

  return (
    <BrowserRouter>
        <div className='relative z-0 bg-primary '>
          <div className='bg-hero-pattern bg-cover bg-no-repeat '>
          <Navbar/>
          <Hero/>
          </div>
        <About/>
        <Feedback/>
        <Experience/>
        <Tech/>
        <Works/>

        <div className='relative z-0'>
          <StarsCanvas />
        <Contact/>
         </div> 
     


      </div>

    </BrowserRouter>
  )
}

export default App
