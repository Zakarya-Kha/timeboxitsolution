import React from 'react'
import headerImage from "../assets/img/header.jpg";

const Contact = () => {
  return (
    <div className='animate-slide-in-down'>
      <div className="relative flex flex-wrap">
        <div>
          <img
            src={headerImage}
            alt="Financial Status"
            className="w-full md:h-auto h-[50vh]  "
          />
        </div>
        <div className="absolute inset-0 flex flex-col md:p-48 p-20 mt-12  ">
          <p className="text-3xl md:text-6xl font-bold text-black">Contact</p>
        </div>
      </div>

      <div className="flex justify-center mt-20 ">
        <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-1/2 z-0">
          <div className="text-center mb-6">
            <p className="inline-block border rounded text-primary font-semibold py-1 px-3 mb-4 text-blue-500">
              Contact Us
            </p>
            <h2 className="text-3xl font-bold mb-12">If You Have Any Query, Please Contact Us</h2>
          </div>
          <form>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input type="text" placeholder="First Name" className="w-full md:w-1/2 p-3 border rounded-md" />
              <input type="text" placeholder="Last Name" className="w-full md:w-1/2 p-3 border rounded-md" />
            </div>
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md mb-4" />
            <div className="flex items-center border rounded-md mb-4">
              <input type="text" placeholder="Phone Number" className="w-full p-3" />
            </div>
            <input type="text" placeholder="Subject" className="w-full p-3 border rounded-md mb-4" />
            <textarea placeholder="Message" className="w-full p-3 border rounded-md mb-4"></textarea>
            <button className="w-full p-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
