import React from 'react'
import headerImage from "../assets/img/header.jpg";
import FeaturesComponents from "../Components/Features"

const Features = () => {
  return (
    <div>
      <div className="relative flex flex-wrap">
        <div>
          <img
            src={headerImage}
            alt="Financial Status"
            className="w-full md:h-auto h-[50vh]  "
          />
        </div>
        <div className="absolute inset-0 flex flex-col md:p-48 p-20 mt-12  ">
          <p className="text-3xl md:text-6xl font-bold text-black">Features</p>
        </div>
      </div>

      <div className='mt-24'>
        <FeaturesComponents />
      </div>
    </div>
  )
}

export default Features
