import React from 'react'
import { Link } from 'react-router-dom'

export const FourOFourPage = () => {
  return (
    <section 
      className='w-full pl-10 mt-10 lg:pl-36 font-poppins'>
      <div className='h-[60vh] flex flex-col items-center justify-center'>
          <h1 className='text-[2.5rem] font-bold font-lora text-red-600'>404</h1>
          <h4 className='text-xl font-bold font-lora pb-4'>The Page You Are Searching For Is Not available...<span role="img" aria-label="searching">🧐</span></h4> 
          <Link to='/'><button className='bg-primary text-white px-12 py-2 rounded-lg text-xl shadow-xl hover:bg-primaryHover hover:scale-105'>Back To Home</button></Link>
      </div> 
    </section>
  )
}

