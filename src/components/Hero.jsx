import React from 'react'
import './hero.css'

function Hero() {
  return (
    <div className='container-fluid hero'>
        <div className="row text-white align-items-center h-100">
            <div className="col-12 col-md-6">
                <div className="hero-left p-2 p-md-5 mt-5">
                    <h1 className="fs-3">Hello, I am</h1>
                    <h1 className="display-1 fw-bold">John Doe</h1>
                    <h1 className="fs-4">Frond end Designer | Developer</h1>
                    <p className="lead mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum rem fugiat ut, amet consequuntur itaque numquam cupiditate quasi minima temporibus quis et voluptate autem iusto harum odit id repellat adipisci?</p>
                  <div className="btns d-flex flex-wrap gap-3">
                  <button className="btn btn-warning rounded-pill fs-4 fw-bold p-3 mt-4">Book Appintment</button>
                    <button className="btn btn-outline-warning rounded-pill fs-4 fw-bold p-3 mt-4 px-5">About me</button>
                  </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="hero-left">
                    <img src="" alt="" className="w-100" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero