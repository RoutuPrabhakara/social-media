import React from 'react'

function Footer() {
  return (
    <footer className='bg-dark p-3 p-md-4'>
        <div className="row">
            <div className="col-md-6 mb-3">
                <img src="./images/logo.jpg" alt="" className='logo mb-3' />
                <p className="fs-5 text-white">Welcome to the official website of Poola Sreenivasulu Reddy, a dedicated advocate for progress and positive change. poola sreenivasulu reddy is committed to serving the people with integrity, transparency, and unwavering dedication. Through this platform, you'll discover the values, vision, and initiatives driving pola sreenivasulu's mission to build a brighter future for all.</p>
            </div>
            <div className="col-md-3 mb-3">
                <h1 className="fs-3 fw-bold text-white subtitle f-heading">Quick Links</h1>
                <ul className="p-0 text-white" type='none'>
                    <li className="fs-6 mb-2"><a href="/about" className='text-white nav-link'>About Us</a></li>
                    <li className="fs-6 mb-2"><a href="/contact" className='text-white nav-link'>Contact Us</a></li>
                    <li className="fs-6 mb-2"><a href="/event" className='text-white nav-link'>Events</a></li>
                    <li className="fs-6 mb-2"><a href="/gallery" className='text-white nav-link'> Gallery</a></li>
                    <li className="fs-6 mb-2"><a href="/donate" className='text-white nav-link'> Donate</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-3">
                <h1 className="fs-3 fw-bold text-white subtitle f-heading">Quick Links</h1>
                <ul className="p-0 text-white" type='none'>
                <li className="fs-5 mb-2"><i className='bi bi-geo-alt-fill '></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit.</li>
                <li className="fs-5 mb-2"><i className='bi bi-telephone-fill '></i> +91787346434</li>
                <li className="fs-5 mb-2"><i className='bi bi-envelope-fill '></i> reddy@gmail.com</li>
                </ul>

                <div className="icons d-flex gap-2 text-white justify-content-between">
                   <a href=""> <i className='bi bi-facebook fs-3'></i></a>
                  <a href="">  <i className='bi bi-instagram fs-3'></i></a>
                   <a href=""> <i className='bi bi-youtube fs-3'></i></a>
                   <a href=""> <i className='bi bi-whatsapp fs-3'></i></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer