import React from 'react'

function ABout() {
  return (
    <div className='about-conatiner container-fluid p-2 p-md-4'>
    <div className="row">
        <div className="col-12 col-md-5 mb-3">
        <img src="https://getmasum.com/themes-wp/portfex/wp-content/uploads/2024/02/about.jpg" alt="" className='w-100' />

        </div>
        <div className="col-12 col-md-7">
            <h1 className="fs-1 fw-bold">About Me</h1>
            <p className="fs-2">
            Hello ! I'm Professorial UI UX Designer Providing awesome cool design stuff for client. My vision is to satisfy my client
            </p>
            <p className="lead">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum.
            </p>
          <div className="d-flex gap-2 mt-4">
          <button className="btn btn-light border  p-2 fs-4 px-5 rounded-pill">Contact</button>
            <button className="btn btn-warning  p-2 fs-4 px-5 rounded-pill">Contact</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default ABout