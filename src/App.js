import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import './App.css'
import Contact from './pages/contact/Contact'
import Gallery from './pages/contact/gallery/Gallery'
import About from './pages/about/About'
import Events from './pages/events/Events'
import Footer from './components/Footer'
import Donate from './pages/donate/Donate'
import Blogs from './pages/Blogs/Blogs'

function App() {
  
  return (
    <div className='overflow-hidden'>
     <BrowserRouter>
     <Header/>
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/donate' element={<Donate/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App