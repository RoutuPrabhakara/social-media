import React from 'react'
import Scroller from '../Scroller'
import './header.css'
import logo from '../../images/logo.jpg'

function Header() {
  return (
    <div className='header'>
        <Scroller/>
        <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} alt="YSR logo"  className='logo'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Get Involved</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Donate</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
        </header>
    </div>
  )
}

export default Header