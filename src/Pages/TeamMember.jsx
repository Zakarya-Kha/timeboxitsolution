import React from 'react'
import headerImage from "../assets/img/header.jpg";
import TeamImage1 from '../assets/img/team-1.jpg'
import TeamImage2 from "../assets/img/team-2.jpg";
import TeamImage3 from "../assets/img/team-3.jpg";
import TeamImage4 from "../assets/img/zakarya.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const data = [
  {
    id:1,
    title : "Zakarya khan",
    img : TeamImage4,
    prop: "Front-End Web Developer/React.js",
    icon1 : (
      <FaFacebookF className="text-white bg-blue-700 p-2 text-4xl rounded-full hover:bg-blue-400 cursor-pointer" />
    ),
    href: "#",
    icon2: (
      <FaTwitter className="text-white bg-blue-700 p-2 text-4xl rounded-full hover:bg-blue-400 cursor-pointer" />
    ),
    href: "#",
    icon3: (
      <FaInstagram className="text-white bg-blue-700 p-2 text-4xl rounded-full hover:bg-blue-400 cursor-pointer" />
    ),
    href: "#",
  }, 

  {
    id: 2,
    title : 'Muhammad Hamza',
    img: TeamImage2,
    prop: "Mobile App Developer",
    icon1 : (
      <FaFacebookF className="text-white bg-blue-700 p-2 text-4xl rounded-full hover:bg-blue-400 cursor-pointer" />
    ),
    href: "#",
    icon2: (
      <FaTwitter className="text-white bg-blue-700 p-2 text-4xl rounded-full hover:bg-blue-400 cursor-pointer" />
    ),
    href: "#",
    icon3: (
      <FaInstagram className="text-white bg-blue-700 p-2 text-4xl rounded-full hover:bg-blue-400 cursor-pointer" />
    ),
    href: "#",

  },
  {
    id: 3,
    title : 'Dores Jordan',
    img: TeamImage3,
    prop: "Shopify Developer",
    icon1 : (
      <FaFacebookF className="text-white bg-blue-700 p-2 text-4xl rounded-full hover:bg-blue-400 cursor-pointer" />
    ),
    href: "http://www.facebook.com",
    icon2: (
      <FaTwitter className="text-white bg-blue-700 p-2 text-4xl rounded-full hover:bg-blue-400 cursor-pointer" />
    ),
    href: "https://twitter.com/",
    icon3: (
      <FaInstagram className="text-white bg-blue-700 p-2 text-4xl rounded-full hover:bg-blue-400 cursor-pointer" />
    ),
    href: "https://instagram.com",
  }
]




const TeamMember = () => {
  return (
    <div className='animate-slide-in-down'>
      <div className="relative flex flex-wrap ">
        <div>
          <img
            src={headerImage}
            alt="Financial Status"
            className="w-full md:h-auto h-[50vh]  "
          />
        </div>
        <div className="absolute inset-0 flex flex-col md:p-48 p-20 mt-12  ">
          <p className="text-3xl md:text-6xl font-bold text-black">Team Members</p>
        </div>
      </div>

      <div>
        <div className="text-center py-4 mt-16">
          <p className="inline-block border rounded font-semibold py-1 px-3 mb-6 text-blue-600">
            Team Members
          </p>
          <h1 className="text-5xl font-bold max-w-2xl mx-auto mb-7">
            What Our Clients Say!
          </h1>
        </div>
       <div className="flex flex-wrap gap-6 justify-center mt-16">
       {
          data.map((item) => (
            <div key={item.id} className=" border mx-4 w-[400px] rounded-md hover:bg-pink-600 hover:text-white shadow-md ">
          <h1 className="text-center p-3 text-2xl font-medium">{item.title}</h1>
          
            <img className=" " src={item.img} alt="" />
            <p className='text-xl font-bold  mt-3 text-center'>{item.prop}</p>
          
          <div className="flex gap-3 p-3 justify-center">
            {item.icon1}
            {item.icon2}
            {item.icon3}
          </div>
        </div>
          ))
        }
       </div>
        
      </div>
    </div>
  )
}

export default TeamMember
