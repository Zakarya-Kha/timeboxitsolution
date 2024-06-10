import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectImage1 from '../../assets/img/service-1.jpg';
import servicesImage2 from "../../assets/img/service-2.jpg";
import servicesImage3 from "../../assets/img/service-3.jpg";
import servicesImage4 from "../../assets/img/service-4.jpg";



const slider = [
  {
    id:1,
    img:projectImage1,
    name: 'Financial Planning',
  },
  {
    id:2,
    img:servicesImage2,
    name: 'Cast Investment',
  },
  {
    id:3,
    img:servicesImage3,
    name: 'Financial Consultancy',
  },
  {
    id:4,
    img:servicesImage4,
    name: 'Busniess Loans',
  },
]



const Projects = () => {
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
    <div className="flex flex-col items-center py-4 animate-slide-in-down">
      <div className="text-center py-4">
        <p className="inline-block border rounded font-semibold py-1 px-3 mb-6 text-blue-600">
          Our Projects
        </p>
        <h1 className="text-5xl font-bold max-w-2xl mx-auto mb-7">
          Awesome Financial Services For Business
        </h1>
      </div>

      <div className="w-[80%]  md:w-[80%] lg:w-[80%]">
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
            slider.map((slide) => (
              <div key={slide.id} className='bg-white hover:bg-blue-600 hover:text-white transition-transform duration-500 ease-in-out hover:-translate-y-12  rounded-md border my-9 shadow-md'>
            <img className='rounded-t-md' src={slide.img} alt="Project" />
            <h1 className='text-2xl p-3 font-bold whitespace-nowrap'>{slide.name}</h1>
          </div>
            ))
          }
          
         
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
