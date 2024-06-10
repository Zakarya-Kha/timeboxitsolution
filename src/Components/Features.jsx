import React from 'react';
import 'animate.css/animate.min.css';
import { FaCheck } from 'react-icons/fa';
import '../../src/index.css'

const features = [
  {
    title: 'Fast Executions',
    description: 'Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet',
    linkText: 'Read More',
    linkUrl: '',
  },
  {
    title: 'Guide & Support',
    description: 'Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet',
    linkText: 'Read More',
    linkUrl: '',
  },
  {
    title: 'Financial Secure',
    description: 'Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet',
    linkText: 'Read More',
    linkUrl: '',
  },
];

const Feature = () => {
  return (
    <div className="container-xxl feature py-5 p-9 animate-slide-in-">
      <div className="container mx-auto py-5">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-1/2 px-4">
            <p className="inline-block border rounded font-semibold py-1 px-3 mb-6 text-blue-600">Why Choosing Us!</p>
            <h1 className="text-5xl font-bold mb-7">Few Reasons Why People Choosing Us!</h1>
            <p className="mb-6">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
              lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <a className="btn btn-primary py-3 px-5 bg-blue-600 hover:bg-blue-800 text-white rounded" href="">
              Explore More
            </a>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap -mx-4 items-center">
              {features.map((feature, index) => (
                <div className={`w-full ${index < 2 ? 'md:w-1/2' : ''} px-4 mt-8 ${index === 0 ? '' : 'lg:mt-0'} transition-transform duration-500 ease-in-out hover:-translate-y-4`} key={index}>
                  <div className="feature-box border rounded p-4 bg-white shadow hover:bg-blue-600 hover:text-white mb-4">
                    <FaCheck className="text-primary text-6xl mb-3" />
                    <h4 className="mb-3 text-xl font-bold">{feature.title}</h4>
                    <p className="mb-3">{feature.description}</p>
                    <a className="font-semibold text-blue-600 read-more-link" href={feature.linkUrl}>
                      {feature.linkText} <FaCheck className="inline ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
