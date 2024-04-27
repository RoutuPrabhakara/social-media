import React from 'react'

function Donate() {
  return (
    <div>
        
        <div className="banner d-flex justify-content-center align-items-center ">
           <h1 className="fs-1 fw-bold text-white">Donate</h1>
        </div>
        <div className="py-5 p-3 p-md-5">
        <div className="text-center">
        <h1 className="fs-1 fw-bold title">DOnate</h1>
            <p className="subtitle fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae?</p>
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

                <div className="col-md-12">
                <div className="form-group mt-3">
                    <input type="text" placeholder='EMAIL ADDRESS' className="form-control p-3" />
                </div>
                </div>

                

                <div className="col-md-12">
                <div className="form-group mt-3">
                    <textarea name="" className='w-100 form-control' placeholder='MESSAGE' id="" cols="30" rows="5"></textarea>
                </div>
                </div>

                <div className="text-center py-5">
                    <button className="btn btn-primary rounded-1 p-3">Submit</button>
                </div>
             </div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Donate