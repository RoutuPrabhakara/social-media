import React from 'react'
import ImageGallery from "react-image-gallery";
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import image7 from '../images/image7.jpg'
import image8 from '../images/image8.jpg'
import image9 from '../images/image9.jpg'
import image10 from '../images/image10.jpg'


const images = [
    {
      original: image1,
      thumbnail: image1,
    },
    {
        original: image2,
        thumbnail: image2,
    },
    {
        original: image3,
      thumbnail: image3,
    },
    {
        original: image4,
      thumbnail: image4,
    },
    {
        original: image5,
      thumbnail: image5,
    },
    {
        original: image6,
      thumbnail: image6,
    },
    {
        original: image7,
      thumbnail: image7,
    },
    {
        original: image8,
      thumbnail: image8,
    },
    {
        original: image9,
      thumbnail: image9,
    },
    {
        original: image10,
      thumbnail: image10,
    },
  ];
function Galler() {
  return (
    <div className='gallery bg1 p-2 p-md-5 py-5 '>
        <h1 className="text-center display-3 fw-bold mb-5">Gallery</h1>
        <ImageGallery items={images} />
    </div>
  )
}

export default Galler