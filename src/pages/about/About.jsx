import React from 'react'
import './style.css'
import Gallery from '../contact/gallery/Gallery'
function About() {
  return (
    <div className='contact'>
        <div className="banner d-flex justify-content-center align-items-center ">
           <h1 className="fs-1 fw-bold text-white">About us</h1>
        </div>

        <div className="row">
            <div className="col-12 col-md-4 c-card-main">
                <div className="contact-card">
                <div className="icon">
                <i class="bi bi-geo-alt-fill display-4"></i>
                </div>
                <h1 className="fs-3">Vision</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam suscipit nisi, adipisci libero nihil quae dolore earum molestias perferendis harum! Tempora eligendi sit obcaecati! Laudantium consequatur reprehenderit alias eos.</p>
                </div>
            </div>
            <div className="col-12 col-md-4 c-card-main">
                <div className="contact-card">
                <div className="icon">
                <i class="bi bi-envelope-fill display-4"></i>
                </div>
                <h1 className="fs-3">Mission</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut hic tempora eveniet sequi repudiandae unde quaerat eos illum sed, obcaecati aut minima natus dolore, fugit id quasi expedita, amet inventore.</p>
                </div>
            </div>

            <div className="col-12 col-md-4 c-card-main">
                <div className="contact-card">
                <div className="icon">
                <i class="bi bi-telephone-fill display-4"></i>
                </div>
                <h1 className="fs-3">About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat incidunt, perferendis debitis eum velit blanditiis eligendi magnam quod adipisci, culpa commodi odio ipsam libero architecto modi placeat veniam! Nisi.</p>
                </div>
            </div>
        </div>

      <div className="py-5 p-3">
      <div className="text-center p-3">
            <h1 className="fs-1 fw-bold title">About</h1>
            <p className="subtitle fs-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
       


<div className="container">
<div className="row">
    <div className="col-md-7">
        <h1 className="fs-1">ABOUT POOLA SREENIVASULU REDDY</h1>
        <p className="fs-6 text-secondary">Welcome to the official website of Poola Sreenivasulu Reddy, a dedicated advocate for progress and positive change. poola sreenivasulu reddy is committed to serving the people with integrity, transparency, and unwavering dedication. Through this platform, you'll discover the values, vision, and initiatives driving pola sreenivasulu's mission to build a brighter future for all.</p>
    </div>
    <div className="col-md-5">
        <Gallery/>
    </div>
</div>
</div>
      </div>
        <div className="py-5 p-3 p-md-5">
        <div className="text-center">
        <h1 className="fs-1 fw-bold title">Get in touch</h1>
            <p className="subtitle fs-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>

        <div className="contact-form">
            <div className="row">
              <div className="col-md-6 offset-md-3">
             <div className="row">
                <div className="col-md-6">
                <div className="form-group mt-3">
                    <input type="text" placeholder='USERNAME' className="form-control p-3" />
                </div>
                </div>

                <div className="col-md-6">
                <div className="form-group mt-3">
                    <input type="text" placeholder='PHONE NUMBER' className="form-control p-3" />
                </div>
                </div>

                <div className="col-md-6">
                <div className="form-group mt-3">
                    <input type="text" placeholder='EMAIL ADDRESS' className="form-control p-3" />
                </div>
                </div>

                <div className="col-md-6">
                <div className="form-group mt-3">
                    <input type="text" placeholder='SUBJECT' className="form-control p-3" />
                </div>
                </div>

                <div className="col-md-12">
                <div className="form-group mt-3">
                    <textarea name="" className='w-100 form-control' placeholder='MESSAGE' id="" cols="30" rows="5"></textarea>
                </div>
                </div>

                <div className="text-center py-5">
                    <button className="btn btn-primary rounded-1">Submit</button>
                </div>
             </div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About