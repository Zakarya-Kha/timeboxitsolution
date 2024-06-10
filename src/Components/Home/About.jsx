import React, { useState } from "react";
import AboutImage from "../../assets/img/about.jpg";
import { ImCross } from "react-icons/im";
import { FaUserFriends, FaPhone } from "react-icons/fa";

const tabs = [
  {
    id: "story",
    title: "Story",
    content:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.",
  },
  {
    id: "mission",
    title: "Mission",
    content:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.",
  },
  {
    id: "vision",
    title: "Vision",
    content:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.",
  },
];

const features = [
  {
    icon: <ImCross />,
    title: "No Hidden Cost",
    description: "Clita erat ipsum lorem sit sed stet duo justo",
  },
  {
    icon: <FaUserFriends />,
    title: "Dedicated Team",
    description: "Clita erat ipsum lorem sit sed stet duo justo",
  },
  {
    icon: <FaPhone />,
    title: "24/7 Available",
    description: "Clita erat ipsum lorem sit sed stet duo justo",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <div className="container mx-auto py-12 px-4 animate-slide-in-down">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={AboutImage}
            alt="About us"
            className="w-full h-auto rounded-md transform transition duration-500 hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <p className="inline-block border rounded text-primary font-semibold py-1 px-3 mb-4 text-blue-500">
            About Us
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            We Help Our Clients To Grow Their Business
          </h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>
          <div className="border rounded p-4">
            <nav>
              <div className="flex space-x-4 mb-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`font-semibold transition-colors duration-300 ${
                      activeTab === tab.id
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </nav>
            <div className="transition-opacity duration-500 ease-in-out">
              {tabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <div key={tab.id} className="animate-fade-in">
                      <p>{tab.content}</p>
                      <p className="mb-0">{tab.content}</p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-blue-700 text-white p-3 text-2xl rounded-full">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold">{feature.title}</h4>
                <span>{feature.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
