import React from "react";
import headerImage from "../assets/img/header.jpg";
import '../../src/index.css';
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92p0wGwEjRAFtQWjpGCZH_tZ3PjPZr6gEKa6OFrW3JUZSKteOj1c2BOrZTN54BoO8pYo&usqp=CAU",
    title: "Web Development",
    desc: "Our web development services cover everything from responsive websites to complex web applications. We utilize the latest technologies and best practices to build secure, scalable, and user-friendly websites that drive results.",
    link : "/WebDevelopment"
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_60i98z56qbS0CgZOHf6R7ublMF7ZyGl2A&s",
    title: "eBay Development",
    desc: "Unlock the full potential of your eBay store with our customized development services. From setting up your store to integrating advanced features, we ensure a seamless shopping experience for your customers.",
    link : "/EbayDevelop"
  },
  {
    id: 3,
    img: "https://terralogic.com/wp-content/uploads/2023/10/Banner1-1024x440.webp",
    title: " Walmart Development",
    desc: "Expand your reach with a professional Walmart marketplace store. Our team will help you navigate the complexities of Walmart's platform, ensuring your products stand out and attract more buyers.",
    link: '/WalmartDevelopment'
  },
  {
    id: 4,
    img: "https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/e68d5efae15f43e892c0d3694eeda8f7~tplv-6rr7idwo9f-image.image",
    title: "TikTok Shop Development",
    desc: "Leverage the power of social commerce with our TikTok Shop development services. We help you create engaging and high-converting shopping experiences directly within the TikTok app.",
    link: '/TiktokShop'
  },
  {
    id: 5,
    img: "https://i.pinimg.com/236x/48/99/1f/48991f90e9a0eed6f972f7c310bdd3e0.jpg",
    title: "Shopify Development",
    desc: "Whether you're starting a new online store or enhancing an existing one, our Shopify development services are designed to maximize your store’s performance and sales. From custom themes to app integrations, we handle it all.",
    link: '/ShopifyDevelopment'
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91UD6kNx6CCYby7E0eM3-iLiBrcnRD16WOw&s",
    title: "Amazon Development",
    desc: "Stand out on the world’s largest online marketplace with our comprehensive Amazon development services. We assist with everything from account setup and product listing optimization to creating custom solutions that boost your visibility and sales.",
    link: '/AmazonDevelopment'
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91UD6kNx6CCYby7E0eM3-iLiBrcnRD16WOw&s",
    title: "Mobile App Development",
    desc: 'In today’s mobile-first world, having a robust mobile app is crucial. Our team designs and develops high-performance mobile apps for iOS and Android that provide a seamless user experience and meet your business objectives.',
    link: '/MobileAppDevelopment'
  },
];

const Service = () => {

  return (
    <div className="animate-slide-in-down">
      <div className="relative flex flex-wrap">
        <div>
          <img
            src={headerImage}
            alt="Financial Status"
            className="w-full md:h-auto h-[50vh]"
          />
        </div>
        <div className="absolute inset-0 flex flex-col md:p-48 p-20 mt-12">
          <p className="text-3xl md:text-6xl font-bold text-black">
            Our Services
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-24">
        <div className="text-center py-4 w-[50vw]">
          <h1 className="text-5xl font-bold max-w-2xl mx-auto mb-7">
            What We Do?
          </h1>
          <p>
            We have a refined process after we have taken up a project. We offer
            the platform from where the projects take shape through stages of
            planning, testing and execution. In this aspect we follow an agile
            methodology and run the project through a loop of feedback and
            constant improvement. Our specialized services also have:
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center animate-fade-in">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[300px] flex flex-col items-center animate-slide-in-down  hover:text-white hover:bg-pink-400 text-center border p-6 shadow-md rounded-md my-6 transition-transform duration-500 ease-in-out hover:-translate-y-5 hover:scale-105"
            >
              <img
                className="w-[100px] mb-4 rounded-full h-[100px]"
                src={item.img}
                alt=""
              />
              <h1 className="text-2xl font-semibold mb-4">{item.title}</h1>
              <p className=" mb-4">{item.desc}</p>
              <Link to={item.link}><button className="hover:border hover:border-gray-700 p-2 mb-4 hover:text-blue-600">
                READ MORE
              </button></Link>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Service;
