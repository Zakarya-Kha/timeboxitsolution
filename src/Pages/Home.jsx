import React from 'react'
import Feed from '../Components/Home/Feed'
import About from '../Components/Home/About'
import Facts from '../Components/Facts'
import Feature from '../Components/Features'
import Service from '../Components/Services'
import Contact from '../Components/Home/Contact'
import Projects from '../Components/Home/Projects'
import Testimonial from '../Components/Home/Testimonial'
import '../../src/index.css'


const Home = () => {
  return (
    <div className='animate-slide-in-down'>
      
      <Feed/>
      <About/>
      <Facts/>
      <Feature/>
      <Service/>
      <Contact/>
      <Projects/>
      <Testimonial/>
    </div>
  )
}

export default Home
