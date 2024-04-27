import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  './style.css'
import youtubedata from '../../data/youtube';


function Youtube() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // cssEase: 'linear',
        autoplay: true,
        // centerMode: true,
        autoplaySpeed: 3000, // Change delay as needed
      };
      
  return (
    <div className='bg2 py-3'>
        <h1 className="text-center display-3 fw-bold text-dark">Interviews</h1>
        <p className='fs-5 text-center text-secondary'>Poola sreenivasulu reddy social interviews</p>
        <Slider {...settings}>
            {
            youtubedata.map((item, index)=>(
                <div className="video p-2 p-md-5">
                   <iframe width="560" height="315" src={item.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-100 rounded-5'></iframe>
                </div>
            ))
            }
        </Slider>
    </div>
  )
}

export default Youtube