import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../components'

export const FourOFourPage = () => {
  return (
    <section 
      className='w-full pl-10 mt-10 lg:pl-36 font-poppins'>
      <div className='h-[60vh] flex flex-col items-center justify-center'>
          <h1 className='text-[2.5rem] font-bold font-lora text-red-600'>404</h1>
          <h4 className='text-xl font-bold font-lora'>The Page You Are Searching For Is Not available...<span role="img" aria-label="searching">🧐</span></h4> 
          <Link to='/'><PrimaryButton>Back To Home</PrimaryButton></Link>
      </div> 
    </section>
  )
}

