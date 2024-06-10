import React, { useState } from "react";
import { Link , NavLink} from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    {
      name: "Pages",
      href: "#",
      subLinks: [
        { name: "Projects", href: "/projects" },
        { name: "Features", href: "/features" },
        { name: "Team Members", href: "/team-member" },
        { name: "Testimonial", href: "/testimonial" },
        { name: "404 Page", href: "/*" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: (
        <FaFacebookF className="text-white bg-blue-700 p-2 text-4xl rounded-full hover:bg-blue-400 cursor-pointer" />
      ),
      href: "https://www.facebook.com",
    },
    {
      icon: (
        <FaTwitter className="text-white bg-blue-700 p-2 text-4xl rounded-full hover:bg-blue-400 cursor-pointer" />
      ),
      href: "https://twitter.com",
    },
    {
      icon: (
        <FaLinkedinIn className="text-white bg-blue-700 p-2 text-4xl rounded-full hover:bg-blue-400 cursor-pointer" />
      ),
      href: "https://Linkedin.com/",
    },
  ];

  return (
    <div className="flex justify-between px-4 py-4 items-center border-b border-gray-400 bg-slate-400 text-white text-lg fixed w-full md:pt-16 z-10  pt-6">
      <div>
        <h1 className="text-2xl md:text-4xl text-blue-800 font-bold">
          timeboxitsolution
        </h1>
      </div>

      <div className="flex items-center md:gap-16">
        <div className="hidden md:flex">
          <ul className="flex gap-7">
            {navLinks.map((link, index) => (
              <li key={index} className={link.subLinks ? "relative  " : ""}>
                <NavLink
                  to={link.href}
                  className={({isActive}) =>
                    `flex py-2  items-center gap-1 ${isActive ? "text-blue-700" : "text-gray-700" } pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                  onMouseEnter={() => link.subLinks && setIsDropdownOpen(true)}
                  // onMouseLeave={() => link.subLinks && setIsDropdownOpen(false)}
                  onClick={() => link.subLinks && setIsDropdownOpen(!isDropdownOpen)}
                >
                  {link.name} {link.subLinks && <FaChevronDown />}
                </NavLink>
                {link.subLinks && isDropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white text-black p-2 border border-gray-300 whitespace-nowrap rounded-md mt-1">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={subLink.href}
                          className={({isActive}) => 
                            `block px-4 py-2 hover:bg-gray-200 ${isActive ? "text-blue-700" : "text-gray-700" } `
                          }
                        >
                          {subLink.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex gap-3 items-center text-xl">
          {socialLinks.map((social, index) => (
            <Link key={index} to={social.href}>
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[63px] left-0 w-full bg-slate-400 text-white p-4 md:hidden block">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="flex items-center gap-1"
                  onClick={() =>
                    link.subLinks && setIsDropdownOpen(!isDropdownOpen)
                  }
                >
                  {link.name} {link.subLinks && <FaChevronDown />}
                </a>
                {link.subLinks && isDropdownOpen && (
                  <ul className="bg-white text-black p-2 border border-gray-300 whitespace-nowrap rounded-md mt-1">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subLink.href}
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          {subLink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <div className="flex gap-3 items-center text-xl">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href}>
                  {social.icon}
                </a>
              ))}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
