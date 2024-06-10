import React from 'react';
import bgImage from '../../assets/img/bg.png';

const Contact = () => {
  return (
    <div className="my-20">
      <div className="relative w-full h-[400px]">
        <img className="absolute inset-0 w-full h-full object-cover" src={bgImage} alt="Background" />
        <div className="absolute inset-0 bg-blue-700 opacity-80"></div>
      </div>

      <div className="flex justify-center -mt-40 transition-transform duration-500 ease-in-out hover:-translate-y-24">
        <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-1/2 z-0">
          <div className="text-center mb-6">
            <p className="inline-block border rounded text-primary font-semibold py-1 px-3 mb-4 text-blue-500">
              Get In Touch
            </p>
            <h2 className="text-3xl font-bold">Request A Call-Back</h2>
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
  );
}

export default Contact;
