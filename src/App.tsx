// import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Contact from './components/contact'
import About from './components/about'
import Experience from './components/experience'
import Feedback from './components/feedback'
import Project from './components/project'

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
         <Navbar/>
         {/* <Hero/> */}
        </div>
        {/* <About/>
        <Experience/>
        <Project/>
        <Feedback/> */}

       {/* <div className='relative z-0'>
         StarCanvas 
        <Contact/>
       </div>*/}


      </div>

    </BrowserRouter>
  )
}

export default App
