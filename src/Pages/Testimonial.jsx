import React from 'react'
import headerImage from "../assets/img/header.jpg";
import TestimonialComponents from '../Components/Home/Testimonial'

const Testimonial = () => {
  return (
    <div>
      T<div className="relative flex flex-wrap">
        <div>
          <img
            src={headerImage}
            alt="Financial Status"
            className="w-full md:h-auto h-[50vh]  "
          />
        </div>
        <div className="absolute inset-0 flex flex-col md:p-48 p-20 mt-12  ">
          <p className="text-3xl md:text-6xl font-bold text-black">Testimonial</p>
        </div>
      </div>

      <div>
        <TestimonialComponents />
      </div>
    </div>
  )
}

export default Testimonial
