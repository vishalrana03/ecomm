import React from 'react'
import BannerImg from '../../assets/women/women2.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
        {/* image section */}
        <div data-aos="zoom-in">
            <img src={BannerImg} alt="" 
            className='w-full h-[350px] object-cover max-w-[400px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] duration-300 hover:scale-105 hover:drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.5)]'/>
        </div>

        {/* text section */}
        <div className='flex flex-col gap-6 justify-center sm:pt-0'>
            <h1 className='text-3xl sm:text-4xl font-bold' data-aos="fade-up">Winter Sale upto 50% off</h1>
            <p className='text-sm text-gray-500 tracking-wide leading-5' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, porro!</p>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 items-center' data-aos="fade-up">
                    <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                    <p className='hover:scale-110 duration-300 transition-all'>Quality Products</p>
                </div>
                <div data-aos="fade-up" className='flex items-center gap-4'>
                    <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                    <p className='hover:text-2xl duration-300 transition-all'>Fast Delivery</p>
                </div>
                <div data-aos="fade-up" className='flex items-center gap-4'>
                    <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'/>
                    <p className='hover:text-2xl duration-300 transition-all'>Easy Payment method</p>
                </div>
                <div data-aos="fade-up" className='flex items-center gap-4'>
                    <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400'/>
                    <p className='hover:text-2xl duration-300 transition-all'>Get Offers</p>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Banner
