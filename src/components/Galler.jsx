import React from 'react'
import './hero.css'
 const data = [
    {
        image:"https://th.bing.com/th/id/OIP.CnabZMxgevzUdRFbe7hHHwHaE8?rs=1&pid=ImgDetMain",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        title:"heading"
    },
    {
        image:"https://th.bing.com/th/id/OIP.CnabZMxgevzUdRFbe7hHHwHaE8?rs=1&pid=ImgDetMain",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        title:"heading"
    },
    {
        image:"https://th.bing.com/th/id/OIP.CnabZMxgevzUdRFbe7hHHwHaE8?rs=1&pid=ImgDetMain",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        title:"heading"
    },
    {
        image:"https://th.bing.com/th/id/OIP.CnabZMxgevzUdRFbe7hHHwHaE8?rs=1&pid=ImgDetMain",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        title:"heading"
    },
    {
        image:"https://th.bing.com/th/id/OIP.CnabZMxgevzUdRFbe7hHHwHaE8?rs=1&pid=ImgDetMain",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        title:"heading"
    },
    {
        image:"https://th.bing.com/th/id/OIP.CnabZMxgevzUdRFbe7hHHwHaE8?rs=1&pid=ImgDetMain",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        title:"heading"
    },
    {
        image:"https://th.bing.com/th/id/OIP.CnabZMxgevzUdRFbe7hHHwHaE8?rs=1&pid=ImgDetMain",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        title:"heading"
    },

    {
        image:"https://th.bing.com/th/id/OIP.CnabZMxgevzUdRFbe7hHHwHaE8?rs=1&pid=ImgDetMain",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        title:"heading"
    },
    {
        image:"https://th.bing.com/th/id/OIP.CnabZMxgevzUdRFbe7hHHwHaE8?rs=1&pid=ImgDetMain",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        title:"heading"
    },

    {
        image:"https://th.bing.com/th/id/OIP.CnabZMxgevzUdRFbe7hHHwHaE8?rs=1&pid=ImgDetMain",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        title:"heading"
    },
    {
        image:"https://th.bing.com/th/id/OIP.CnabZMxgevzUdRFbe7hHHwHaE8?rs=1&pid=ImgDetMain",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        title:"heading"
    },
    {
        image:"https://th.bing.com/th/id/OIP.CnabZMxgevzUdRFbe7hHHwHaE8?rs=1&pid=ImgDetMain",
        desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        title:"heading"
    },

 ]
function Galler() {
  return (
    <div className='container-fluid gallery bg-dark p-2 p-md-5'>
        <h1 className='fs-1 text-white'>our Social Services</h1>
        <p className="lead text-white mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque repellendus voluptatibus dignissimos doloribus, explicabo corrupti neque ratione alias reiciendis iure dolorem esse numquam totam earum magni saepe perferendis eius. Dolores.</p>
        <div className="row">
           {
            data.map((item, index)=>(
                <div className="col-12 col-md-3">
                    <div className="gallery-card mb-3 overflow-hidden">
                    <img src={item.image} alt="" className="w-100 rounded-3" />
                    <div className="text rounded-3">
                        <h1 className="fs-4 text-white">{item.title}</h1>
                        <small className="small text-white">{item.desc}</small>
                    </div>
                    </div>

                </div>
            ))
           }
        </div>
    </div>
  )
}

export default Galler