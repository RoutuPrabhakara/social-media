import React from 'react'
import ImageGallery from "react-image-gallery";
import images from '../data/Images';


function Galler() {
  return (
    <section className='gallery bg1 p-2 p-md-5 py-5 ' id='gallery'>
        <h1 className="text-center display-3 fw-bold mb-5">Gallery</h1>
        <ImageGallery items={images} />
    </section>
  )
}

export default Galler