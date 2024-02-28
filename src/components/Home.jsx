import React from 'react'
import './Style.css'
import Hero from './Hero'
import ABout from './ABout'
import Education from './Education'
import Services from './Services'
import Galler from './Galler'
import Youtube from './youtube/Youtube'
import ContactBanner from './ContactBanner'
function Home() {

  return (
    <div>
        <Hero/>
        <ABout/>
        {/* <Education/> */}
        <Youtube/>
        <ContactBanner/>
        {/* <Services/> */}
        <Galler/>
    </div>
  )
}

export default Home