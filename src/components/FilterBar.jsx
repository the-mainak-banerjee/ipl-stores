import React from 'react'

export const FilterBar = () => {
  

  return (
      <aside className='font-poppins lg:sticky lg:top-0 lg:h-screen mb-10'>
        <div className='flex flex-col items-start mb-4'>
          <label className='mb-2 font-lora text-xl'>Catagory</label>
          <span><input type='checkbox' name='catagory' value='jersy'/> Jersy </span>
          <span><input type='checkbox' name='catagory' value='jersy'/> Cap </span>
          <span><input type='checkbox' name='catagory' value='jersy'/> Mask </span>
        </div>

        <div className='flex flex-col items-start mb-4'>
          <label className='mb-2 font-lora text-xl'>Team</label>
          <select className='bg-gray-200 px-4'>
            <option>All</option>
            <option>CSK</option>
          </select>
        </div>

        <div className='flex flex-col items-start mb-4'>
          <label className='mb-2 font-lora text-xl' htmlFor='slide'>Price</label>
          <input type='range' max='400' min='50' step='50' id='slide'/>
        </div>

        <div className='flex flex-col items-start mb-6'>
          <label className='mb-2 font-lora text-xl'>Sort By</label>
          <span><input type='checkbox' name='sort' value='Low'/> Price- Low to High </span>
          <span><input type='checkbox' name='sort' value='High'/> Price- High to Low </span>
          <span><input type='checkbox' name='sort' value='A-Z'/> A-Z </span>
          <span><input type='checkbox' name='sort' value='Z-A'/> Z-A </span>
        </div>

        <div>
          <button className='bg-primary text-white px-4 py-2 hover:bg-secondary hover:text-black'>Clear Filter</button>
        </div>

      </aside>
  )
}
