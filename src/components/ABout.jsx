import React from 'react'

function ABout() {
  return (
    <section className='about-conatiner container-fluid p-2 p-md-4 py-5' id='about'>
    <div className="row align-items-center">
        <div className="col-12 col-md-5 mb-3">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zlII0DtsJ2o?si=xbHh7QMdoQgtm93N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-100 rounded-3 bg-dark'></iframe>
        </div>
        <div className="col-12 col-md-7">
            <h1 className="fs-3 fw-bold">About Me</h1>
            <p className="fs-4 fw-bold">
            Hello ! I'm Professorial UI UX Designer Providing awesome cool design stuff for client. My vision is to satisfy my client
            </p>
            <p className="fs-5 text-dark">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum.
            </p>
          <div className="d-flex gap-2 mt-4">
            <a href='/contact' className="btn btn-success  p-2 fs-4 px-5 rounded-pill">Contact</a>
          </div>
        </div>
    </div>
    </section>
  )
}

export default ABout