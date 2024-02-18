import React from 'react'
import './hero.css'

const data = [
    {
        title:"Computer Science",
        desc:"March 2013 - 2016"
    },
    {
        title:"Computer Science",
        desc:"March 2013 - 2016"
    },
    {
        title:"Computer Science",
        desc:"March 2013 - 2016"
    },
    {
        title:"Computer Science",
        desc:"March 2013 - 2016"
    },
    {
        title:"Computer Science",
        desc:"March 2013 - 2016"
    },
    {
        title:"Computer Science",
        desc:"March 2013 - 2016"
    }
]
function Education() {
  return (
    <div className='education container-fluid'>
        <div className="row">
            {
                data.map((item, index)=>(
                    <div className="col-12 col-md-6">
                        <div className="card p-3  mb-3 shadow">
                            <div className="row align-items-center">
                                <div className="col-2">
                                    <div className="round-circle">
                                        {index+1}
                                    </div>
                                </div>
                                <div className="col-8 p-2">
                                <h1 className="fs-4 text-secondary">{item.desc}</h1>
                            <h1 className="fs-3 fw-bold">{item.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Education