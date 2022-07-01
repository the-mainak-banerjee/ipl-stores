import React from 'react'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
  return (
    <div className='px-10 lg:px-36 lg:flex-1'>
      <div>
        <p className='pb-4'>23 Products Found</p>
        <hr/>
      </div>
      <ProductCard/>
    </div>
  )
}


