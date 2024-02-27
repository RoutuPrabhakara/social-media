import React from 'react'
import './hero.css'
import brandImage  from '../images/brand.jpeg'

function Hero() {
  return (
    <div className='container-fluid hero'>
        <div className="row text-dark align-items-center h-100">
            <div className="col-12 col-md-7">
                <div className="hero-left p-2 p-md-5 mt-5">
                    <h1 className="fs-1 fw-bold">WELCOME TO <span className="main-text2 text-900 stroke">POOLA SREENIVASULU REDDY</span>  OFFICIAL WEBSITE</h1>
                    <p className=" fs-5 mt-4 text-black">Welcome to the official website of poola sreenivasulu reddy, a dedicated advocate for progress and positive change. poola sreenivasulu reddy is committed to serving the people with integrity, transparency, and unwavering dedication. Through this platform, you'll discover the values, vision, and initiatives driving pola sreenivasulu's mission to build a brighter future for all.</p>
                  <div className="btns d-flex flex-wrap gap-3">
                  <button className="btn btn-dark rounded-pill fs-5 p-3 px-5 fw-bold mt-4">Book Appintment</button>
                    <button className="btn btn-outline-dark rounded-pill fs-5 p-3 px-5 fw-bold mt-4">About me</button>
                  </div>
                </div>
            </div>
            <div className="col-12 col-md-5">
                <div className="hero-right">
                    <img src={brandImage} alt="" className="w-100" />
                    <div className="hero-right-text d-flex flex-column align-items-center ">
                      <h1 className="fs-3 text-black mt-5 fw-bold">POOLA SREENIVASULU REDDY</h1>
                      <p>CEC MEMBER</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero