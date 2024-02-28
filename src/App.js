import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import './App.css'

function App() {
  
  return (
    <div className='overflow-hidden'>
     <BrowserRouter>
     <Header/>
     <Routes>

      <Route path='/' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App