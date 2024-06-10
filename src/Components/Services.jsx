import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import servicesImage1 from "../assets/img/service-1.jpg";
import servicesImage2 from "../assets/img/service-2.jpg";
import servicesImage3 from "../assets/img/service-3.jpg";
import servicesImage4 from "../assets/img/service-4.jpg";

const Services = () => {
  const [activeTab, setActiveTab] = useState(1);

  const Heading = [
    {
      id: 1,
      name: "Financial Planning",
    },
    {
      id: 2,
      name: "Cash Investment",
    },
    {
      id: 3,
      name: "Financial Consultancy",
    },
    {
      id: 4,
      name: "Business Loans",
    },
  ];

  const tabs = [
    {
      id: 1,
      title: "25 Years Of Experience In Financial Support",
      img: servicesImage1,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      title: "Cash Investment",
      img: servicesImage2,
      content:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.",
    },
    {
      id: 3,
      title: "Financial Consultancy",
      img: servicesImage3,
      content:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.",
    },
    {
      id: 4,
      title: "Business Loans",
      img: servicesImage4,
      content:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.",
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="container mx-auto px-4 mt-16 transition-transform duration-500 ease-in-out hover:-translate-y-16">
      <div className="text-center py-4">
        <p className="inline-block border rounded font-semibold py-1 px-3 mb-6 text-blue-600">
          Our Services
        </p>
        <h1 className="text-5xl font-bold max-w-2xl mx-auto mb-7">
          Awesome Financial Services For Business
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="flex flex-col justify-center lg:w-1/3">
          {Heading.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 border p-6 text-2xl ${
                activeTab === item.id ? "bg-blue-600 text-white" : "text-gray-600"
              } cursor-pointer m-3 rounded-md`}
              onClick={() => handleTabClick(item.id)}
            >
              <GiHamburgerMenu />
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="flex flex-col lg:flex-row gap-9 lg:w-2/3">
                <div className="w-full lg:w-1/2">
                  <img className="rounded-md w-full" src={tab.img} alt={tab.title} />
                </div>
                <div className="flex flex-col justify-center px-3 w-full lg:w-1/2">
                  <h1 className="text-4xl font-bold mb-8">{tab.title}</h1>
                  <p className="mb-6">{tab.content}</p>
                  <p>
                    <span className="font-bold text-blue-600 mr-2">✓</span> Secured Loans
                  </p>
                  <p className="my-3">
                    <span className="font-bold text-blue-600 mr-2">✓</span> Credit Facilities
                  </p>
                  <p>
                    <span className="font-bold text-blue-600 mr-2">✓</span> Cash Advanced
                  </p>
                  <button className="mt-12 bg-blue-600 text-white mx-auto p-2 rounded-md cursor-pointer hover:bg-blue-800">
                    Read More
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Services;
