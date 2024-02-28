import React from 'react'

function ContactBanner() {
  return (
    <div className='contact-banner bg-black p-5 text-center'>
        <h1 className="text-white"> you have any Problem?</h1>
        <a href="tel:+91977544444"><button className='btn btn-warning p-3 rounded-pill mt-5'>Contact Now</button></a>
    </div>
  )
}

export default ContactBanner