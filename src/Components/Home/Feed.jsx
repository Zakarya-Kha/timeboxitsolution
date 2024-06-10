import React from 'react';
import { useInView } from 'react-intersection-observer';
import feed1 from '../../assets/img/carousel-1.jpg';

const Feed = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className='relative flex flex-wrap'>
      <div>
        <img src={feed1} alt="Financial Status" className='w-full md:h-auto h-[60vh]' />
      </div>
      <div
        ref={ref}
        className={`absolute inset-0 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-1000 ${
          inView ? 'opacity-500' : 'opacity-0'
        }`}
      >
        <p className='text-lg md:text-xl text-blue-600'>Welcome to timeboxitsolution</p>
        <h1 className='text-2xl md:text-4xl font-bold mt-2 mb-4 text-black'>
          Your Financial Status Is Our Goal
        </h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Feed;
