import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientImage from '../../assets/img/testimonial-1.jpg'; 
import clientImage1 from '../../assets/img/testimonial-2.jpg'; 
import clientImage2 from '../../assets/img/testimonial-3.jpg'; 
import clientImage3 from '../../assets/img/testimonial-4.jpg'; 



const Testimonials = [
  {
    id:1,
    desc: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    name: "John",
    img: clientImage3,
    prop: "Propession",
  },
  {
    id:2,
    desc: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    name: "John",
    img: clientImage2,
    prop: "Propession",
  },
  {
    id:3,
    desc: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    name: "John",
    img: clientImage1,
    prop: "Propession",
  },
  {
    id:4,
    desc: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    name: "John",
    img: clientImage,
    prop: "Propession",
  }
]


const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=' my-16 animate-slide-in-down'>
      <div className="text-center py-4">
        <p className="inline-block border rounded font-semibold py-1 px-3 mb-6 text-blue-600">
          Testimonial
        </p>
        <h1 className="text-5xl font-bold max-w-2xl mx-auto mb-7">
          What Our Clients Say!
        </h1>
      </div>

      <div className="w-[80%] md:w-[80%] lg:w-[80%] mx-auto">
        <style>
          {`
            .slick-slide > div {
              position: relative;
              padding-right: 20px;
            }

            .slick-prev:before,
            .slick-next:before {
              color: #000000;
            }

            .slick-slide > div:not(:last-child)::after {
              content: "";
              position: absolute;
              top: 0;
              right: 10px;
              width: 1px;
              height: 100%;
              background-color: #ccc;
            }
          `}
        </style>
        <Slider {...settings}>
          {
            Testimonials.map((item) => (
              <div key={item.id} className="flex flex-col items-center p-6 border rounded-lg transition-transform duration-500 ease-in-out hover:-translate-y-12 shadow-lg max-w-md mx-auto my-16">
            <div className="relative p-6 text-center bg-gray-100 rounded-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 1C4.477 1 0 5.477 0 11s4.477 10 10 10 10-4.477 10-10S15.523 1 10 1zM8 14H6V8h2v6zm4 0h-2V8h2v6z"></path>
                </svg>
              </div>
              <p className="mt-6 text-lg italic">
                {item.desc}
              </p>
            </div>
            <img src={item.img} alt="Client" className="w-24 h-24 rounded-full mt-6 shadow-md mx-auto" />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-600">{item.prop}</p>
            </div>
          </div>
            ))
          }
          
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
