import React from 'react'

function Blogs() {
  return (
    <div>
        
        <div className="banner d-flex justify-content-center align-items-center ">
           <h1 className="fs-1 fw-bold text-white">Blogs</h1>
        </div>

       <div className="p-3 p-md-5">
       <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
            <i class="bi bi-cloud-slash display-1 text-secondary d-block"></i>
                <h1 className="fs-1">No Blogs Available</h1>
                <p className="fs-6 text-secondary">once Blogs is uploaded the that blogs will visible here</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Blogs