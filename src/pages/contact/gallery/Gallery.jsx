import React, { useState } from 'react'
import images from '../../../data/Images'
import './style.css'

function Gallery() {
    const [index, setIndex]= useState(null)
    const [prev, setPrev]= useState(null)
    const [next, setNext]= useState(null)
    const forword = ()=>{
       if(index<images.length-1){
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
    <div className='gallery'>
        <div className="banner d-flex justify-content-center align-items-center ">
           <h1 className="fs-1 fw-bold text-white">Gallery</h1>
        </div>
         <div className="p-3">
         <div className="row">
                {
                    images.map((item, index)=>(
                        <div className="col-6 col-md-4 mb-3">
                            <img src={item.original} alt="" className="w-100 h-100"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setIndex(index)}/>
                        </div>
                    ))
                }
            </div>
         </div>

            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content bg-transparent border-0">
      {/* <div class="modal-header bg-transparent border-0">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
      <div class="modal-body">
        <img src={images[index]?.original} alt="" />
        <button onClick={backword} className='toggle-btns prev'><i class="bi bi-arrow-left-short"></i></button>
        <button onClick={forword} className='toggle-btns next'><i class="bi bi-arrow-right-short"></i></button>
      </div>
       </div>
  </div>
</div>
    </div>
  )
}

export default Gallery