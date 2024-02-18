import React from 'react'
import './Style.css'
import Hero from './Hero'
import ABout from './ABout'
import Education from './Education'
import Services from './Services'
function Home() {

  return (
    <div>
        <Hero/>
        <ABout/>
        <Education/>
        <Services/>
    </div>
  )
}

export default Home