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
    <a class="navbar-brand" href="/"><img src={logo} alt="YSR logo"  className='logo'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/events">Events</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Get Involved</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link" href="/gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blogs">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/donate">Donate</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
        </header>




<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
  <a class="navbar-brand" href="/"><img src={logo} alt="YSR logo"  className='logo'/></a>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul className="p-0 list-group">
        <li className="list-group-item"><a href="" className='nav-link'>Home</a></li>
        <li className="list-group-item"><a href="/about" className='nav-link'>About Us</a></li>
        <li className="list-group-item"><a href="/contact" className='nav-link'>Contact Us</a></li>
        <li className="list-group-item"><a href="/gallery" className='nav-link'>Gallery</a></li>
        <li className="list-group-item"><a href="/Events" className='nav-link'>Events</a></li>
        <li className="list-group-item"><a href="/blogs" className='nav-link'>Blogs</a></li>
        <li className="list-group-item"><a href="/donate" className='nav-link'>Donate</a></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Header