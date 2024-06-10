import React from 'react';
import { FaUsers, FaCheck, FaUsersCog, FaAward } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Array of data objects for the facts
const factsData = [
  { id: 1, icon: FaUsers, end: 1234, text: 'Happy Clients' },
  { id: 2, icon: FaCheck, end: 1234, text: 'Projects Completed' },
  { id: 3, icon: FaUsersCog, end: 1234, text: 'Dedicated Staff' },
  { id: 4, icon: FaAward, end: 1234, text: 'Awards Achieved' },
];

const Facts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gray-800 my-5 py-5">
      <div className="container mx-auto py-5" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {factsData.map(({ id, icon: Icon, end, text }) => (
            <div key={id} className="text-center flex flex-col items-center">
              <Icon className="text-white text-6xl mb-3" />
              {inView && (
                <h1 className="text-4xl text-white">
                  <CountUp end={end} duration={3} />
                </h1>
              )}
              <span className="text-lg text-white">{text}</span>
              <hr className="bg-white w-1/4 mx-auto mb-0 mt-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
