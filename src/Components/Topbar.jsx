import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Topbar = () => {
  return (
    <div className='hidden md:block fixed w-full  z-20 '>
      <div className='flex justify-between  px-4 items-center p-3 bg-slate-400 font-medium '>
      <div className='flex gap-8'>
      <div className='flex items-center gap-2'>
        <span className='text-blue-700'><FaLocationDot /></span>
        <span>Astrulia</span>
      </div>
      <div className='flex items-center gap-2'>
        <span className='text-blue-700'><IoTimeSharp/></span>
        <span>9.00 am - 9.00 pm</span>
      </div>
      </div>


      <div className='flex gap-8'>
      <div className='flex items-center gap-2'>
        <span className='text-blue-700'><MdEmail/></span>
        <span>timeboxitsolution@example.com </span>
      </div>
      <div className='flex items-center gap-2'>
        <span className='text-blue-700'><IoMdCall/></span>
        <span>+012 345 6789</span>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Topbar
