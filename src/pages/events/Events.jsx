import React, { useState } from 'react'
import './style.css'
import Gallery from '../contact/gallery/Gallery'
import images from '../../data/Images'
import youtubedata from '../../data/youtube'
function Events() {
    const [prev, setPrev]= useState(null)
    const [next, setNext]= useState(null)
    const [index, setIndex]= useState(null)
    const forword = ()=>{
       if(index<youtubedata.length-1){
        setIndex(index+1)
        setNext(true)
       }else{
        setNext(false)
       }
    }

    const backword = ()=>{
        if(index>0){
         setIndex(index-1)
         setPrev(true)
        }
        else{
            setPrev(false)
        }
     }
  return (
    <div className='contact'>
        <div className="banner d-flex justify-content-center align-items-center ">
           <h1 className="fs-1 fw-bold text-white">Attended Events</h1>
        </div>

        {/* <div className="row">
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
        </div> */}

      <div className="py-5 p-3">

      <div className="text-center p-3">
            <h1 className="fs-1 fw-bold title">Youtube Video</h1>
            <p className="subtitle fs-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="youtube">
            <div className="row">
                {
                    youtubedata.map((item, index)=>(
                        <div className="col-md-3 mb-3">
                           <div className="card shadow p-3">
                           <iframe src={item.video} frameborder="0" onClick={()=>setIndex(index)} className='w-100 rounded-3' ></iframe>
                            <button className='btn btn-success mt-2'  data-bs-toggle="modal" data-bs-target="#videoModel">Watch</button>
                           </div>
                        </div>
                    ))
                }
            </div>
        </div>

      <div className="text-center p-3">
            <h1 className="fs-1 fw-bold title">Social Activities</h1>
            <p className="subtitle fs-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
       
       <div className="gallery">
       {/* <div className="row">
            {
                images.map((photo, index)=>(
                    <div className="col-md-3 mb-3">
                        <img src={photo.original} alt="" className="w-100 h-100" />
                    </div>
                ))
            }
        </div> */}
        <Gallery/>
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


        <div class="modal fade " id="videoModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content bg-transparent border-0">
      {/* <div class="modal-header bg-transparent border-0">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
      <div class="modal-body">
       <iframe src={youtubedata[index]?.video} frameborder="0" className="w-100"></iframe>
       <p className="fs-4 text-white">{index+1}/{youtubedata.length}</p>
        <button onClick={backword} className='toggle-btns prev'><i class="bi bi-arrow-left-short"></i></button>
        <button onClick={forword} className='toggle-btns next'><i class="bi bi-arrow-right-short"></i></button>
      </div>
       </div>
  </div>
</div>
    </div>
  )
}

export default Events