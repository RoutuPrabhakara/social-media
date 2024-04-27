import React from 'react'
import './style.css'
function Contact() {
  return (
    <div className='contact'>
        <div className="banner d-flex justify-content-center align-items-center ">
           <h1 className="fs-1 fw-bold text-white">Contact us</h1>
        </div>

        <div className="row">
            <div className="col-12 col-md-4 c-card-main">
                <div className="contact-card">
                <div className="icon">
                <i class="bi bi-geo-alt-fill display-4"></i>
                </div>
                <h1 className="fs-3">Address</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat.</p>
                </div>
            </div>
            <div className="col-12 col-md-4 c-card-main">
                <div className="contact-card">
                <div className="icon">
                <i class="bi bi-envelope-fill display-4"></i>
                </div>
                <h1 className="fs-3">Email</h1>
                <p>Reddy@gmail.com</p>
                </div>
            </div>

            <div className="col-12 col-md-4 c-card-main">
                <div className="contact-card">
                <div className="icon">
                <i class="bi bi-telephone-fill display-4"></i>
                </div>
                <h1 className="fs-3">Phone</h1>
                <p>+91973873733</p>
                </div>
            </div>
        </div>

        <div className="text-center p-3">
            <h1 className="fs-1 fw-bold title">Our location</h1>
            <p className="subtitle fs-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15550.301974899947!2d77.55046669999999!3d12.9989812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714177729074!5m2!1sen!2sin" width="600" height="450" className='w-100' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

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

export default Contact