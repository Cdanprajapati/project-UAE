import React from 'react';
import Img from '../assets/header.png';
import { FaSearch } from 'react-icons/fa';
import Location from '../assets/location.png';
import Case from '../assets/case.png';

const Carousel = () => {
  return (
    <div className="relative h-[500px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${Img})` }}>
      <div className="absolute inset-0 flex items-center justify-center bg-transparent">
        <div className="flex flex-col text-center items-center justify-center text-white p-6">
          <h1 className="text-5xl font-bold mb-2 text-white leading-2">Are You a Supplier?</h1>
          <div className='flex flex-col space-y-7'>
            <p className="text-5xl leading-2">Explore Matching Opportunities.</p>
            <div className='flex space-x-2 justify-center'>
              <div className="flex items-center border border-gray-300 rounded-[3px] px-4 py-2 max-w-md bg-slate-100 space-x-2">
                <img className="h-4 w-4" src={Case} alt="exp" />
                <input
                  type="text"
                  placeholder="Search your required service here"
                  className="w-full focus:outline-none text-gray-700 bg-transparent text-xs"
                />
              </div>

              <div className="flex items-center border border-gray-300 rounded-[3px] px-4 py-2 max-w-md bg-slate-100 space-x-2">
                <img className="h-4 w-4" src={Location} alt="case" />
                <input
                  type="text"
                  placeholder="Search your desired location here"
                  className="w-full focus:outline-none text-gray-700 bg-transparent text-xs"
                />
              </div>
              <button className='bg-green-700 rounded-[3px] text-sm font-semibold text-white px-7'>
                Search
              </button>
            </div>
            <p className='font-bold text-white text-lg'>Are you a buyer? <span className='text-sm font-normal underline'>Click here if you are looking to post a requirements</span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel