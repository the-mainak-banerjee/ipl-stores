import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({id,name,description,price,src,discount, showBoxStyle}) => {
  
  
  return (
    <>
      {!showBoxStyle && <div className='mr-4 mt-4 w-96 sm:w-60 font-poppins transition-all'>
        <Link to={`/products/${id}`}>
          <div 
            className='h-auto sm:h-80 flex items-center justify-center bg-ternary p-2'>
            <img 
              src={src} 
              alt='CSK Jersy' 
              className='transition-all w-full h-full object-cover cursor-pointer hover:scale-125 hover:shadow-xl hover:rounded-md'  
            />
          </div>
        </Link>
          <div className='px-2 py-4 bg-white border-x-2 border-ternary'>
            <h3 className='font-lora text-xl'>{name}</h3>
            <p className='sm:h-20'>{description}</p>
            <h2 className='text-2xl'>&#8377; {price} <span className='text-sm font-light'>{discount}% Discount</span></h2>
          </div>
          <button 
            className='bg-secondary px-8 py-2 font-light w-full hover:bg-secondaryHover hover:font-semibold'>
              Add To Cart
          </button>
      </div>}
      {showBoxStyle && <div className='flex flex-wrap m-4 w-full p-4 border-2 border-ternary rounded-lg '>
        <Link to={`/products/${id}`}>
          <div>
            <img 
              src={src} 
              alt='CSK Jersy' 
              className='hover:scale-105  hover:shadow-xl hover:rounded-md transition-all w-60 h-full object-fit cursor-pointer'
            />
          </div>
        </Link>
        <div className='self-center p-4 mx-4'>
            <h3 className='font-lora text-xl'>{name}</h3>
            <p className='mb-2'>{description}</p>
            <h2 className='text-2xl'>&#8377; {price} <span className='text-sm font-light'>{discount}% Discount</span></h2>
            <button 
            className='bg-secondary mt-4 px-10 py-2 font-light hover:bg-secondaryHover hover:font-semibold'>
              Add To Cart
          </button>
        </div>
      </div>}
    </>
  )
}


// hover:shadow-lg hover:translate-y-1