import React from 'react';
import photo1 from '../../assets/shirt/shirt.png';
import photo2 from '../../assets/shirt/shirt2.png';
import photo3 from '../../assets/shirt/shirt3.png';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
    {
        id: 1,
        img: photo1,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, mollitia!",
    },
    {
        id: 2,
        img: photo2,
        title: "Printed Shirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, mollitia!",
    },
    {
        id: 3,
        img: photo3,
        title: "Women Shirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, mollitia!",
    },
];
const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}

        <div className='text-left mb-24'>
        <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
        <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
        <p data-aos="fade-up"  className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate, totam consequuntur maiores id eveniet.</p>
        </div>

        {/* Body Section */}    
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
            {ProductsData.map((data) => (
              <div key={data.id}>
                <div 
                data-aos="zoom-in"
                className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                {/* image section*/}
                <div className='h-[100px]'>
                    <img src={data.img} 
                    alt="" 
                    className='max-w-[140px] mx-auto block transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
                </div>

                {/* details section */}
                <div className='p-4 text-center'>
                    {/* star rating */}
                    <div className='flex justify-center items-center gap-1 w-full'>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                </div>
                <h1 className='text-xl font-bold'>{data.title}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                <button
                className='bg-primary text-white w-full rounded-full py-1 px-4 mt-4 hover:scale-105 group-hover:text-primary group-hover:bg-white duration-300' onClick={handleOrderPopup}>Order Now</button>
                </div>
            </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts
