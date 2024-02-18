import React from 'react'
import './hero.css'
const data = [
    {
        title:"Web Development",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting.",
        icons:"backpack2"
    },
    {
        title:"Web Development",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting.",
        icons:"backpack2"
    },
    {
        title:"Web Development",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting.",
        icons:"backpack2"
    },
    {
        title:"Web Development",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting.",
        icons:"backpack2"
    },
    {
        title:"Web Development",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting.",
        icons:"backpack2"
    },
    {
        title:"Web Development",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting.",
        icons:"backpack2"
    },
    {
        title:"Web Development",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting.",
        icons:"backpack2"
    },
    {
        title:"Web Development",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting.",
        icons:"backpack2"
    }
]
function Services() {
  return (
    <div className='services container-fluid p-2 p-md-5 bg-light'>
        <div className="row">
            {
                data.map((item, index)=>(
                    <div className="col-12 col-md-3">
                        <div className="service-card card p-3 mb-3">
                            <i className={`bi bi-${item.icons} display-2`}></i>
                           <div>
                           <h1 className="fs-3 fw-bold">{item.title}</h1>
                            <p className="lead">{item.desc}</p>
                           </div>
                           <div className="service-icon">
                            <h1 className="fs-2">{index+1}</h1>
                           </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services