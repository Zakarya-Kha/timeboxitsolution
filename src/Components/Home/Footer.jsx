import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const officeDetails = [
  { icon: <FaMapMarkerAlt />, text: "123 Street, New York, USA" },
  { icon: <FaPhoneAlt />, text: "x.y.z" },
  { icon: <FaEnvelope />, text: "timeboxitsolution@.com" },
];

const services = [
  "Financial Planning",
  "Cash Investment",
  "Financial Consultancy",
  "Business Loans",
  "Business Analysis",
];

const quickLinks = [
  { text: "About Us", to: "/about" },
  { text: "Contact Us", to: "/contact" },
  { text: "Our Services", to: "/service" },
  { text: "Terms & Condition", to: "/terms" },
  { text: "Support", to: "/support" },
];

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com" },
  { icon: <FaTwitter />, url: "https://www.twitter.com" },
  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com" },
];

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white text-light mt-5 py-5 px-6">
      <div className="container py-5">
        <div className="flex flex-wrap mx-9 lg:gap-40 gap-9">
          <div>
            <h4 className="text-white text-2xl font-bold mb-4">Our Office</h4>
            {officeDetails.map((detail, index) => (
              <div key={index} className=" flex items-center">
                <i className="mr-3   ">{detail.icon}</i>
                <p className="mb-2" >{detail.text}</p>
              </div>
            ))}
            <div className="flex gap-3 pt-2 ">
              {socialLinks.map((link, index) => (
                <Link
                  className="text-white bg-blue-700 p-2 text-3xl rounded-full hover:bg-blue-400 cursor-pointer "
                  to={link.url}
                  key={index}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white text-2xl font-bold mb-4">Services</h4>
            {services.map((service, index) => (
              <Link className="block text-light hover:text-red-500 mb-2" to="" key={index}>
                {service}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="text-white text-2xl font-bold mb-4">Quick Links</h4>
            {quickLinks.map((link, index) => (
              <NavLink  
              className={({isActive}) => 
                `block px-4 py-2 hover:text-red-500 ${isActive ? "text-blue-700" : "text-white" } `
              }
               to={link.to} key={index}>
                {link.text}
              </NavLink>
            ))}
          </div>
          <div>
            <h4 className="text-white text-2xl font-bold mb-4">Newsletter</h4>
            <p className="mb-3">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <div className="relative w-full">
              <input
                className="bg-white border-0 w-full py-3 pl-4 pr-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="bg-blue-600 text-white p-2 absolute top-0 right-0 mt-1 rounded-md hover:bg-blue-800 mr-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
