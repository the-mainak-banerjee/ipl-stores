import React, { useState } from 'react'
import { ProductCard } from './ProductCard'
import { BsList } from 'react-icons/bs'
import { BiBorderAll } from 'react-icons/bi'
import {v4 as uuidV4} from 'uuid'

export const ProductList = ({ products }) => {

  const [showBoxStyle, setShowBoxStyle] = useState(false)

  const allProducts = products.map(item => {
    return (
      <ProductCard
        key={uuidV4()}
        id={item.id}
        name= {item.name}
        description = {item.description}
        price = {item.price}
        src= {item.src}
        discount={item.discount}
        showBoxStyle = {showBoxStyle}
      />
    )
  })

  return (
    <div className='lg:px-36 lg:flex-1'>
      <div className='flex items-center pb-4'>
        <BiBorderAll className={!showBoxStyle ? 'cursor-pointer text-secondary': 'cursor-pointer'} size='30px'
          onClick={() => setShowBoxStyle(false)}
        />
        <BsList className={showBoxStyle ? 'cursor-pointer text-secondary' : 'cursor-pointer'} size='30px'
          onClick={() => setShowBoxStyle(true)}
        />
        <p className='font-poppins mx-2'>{products?.length} Products Found</p>
      </div>
      <hr/>
      <div className='flex flex-wrap'>
        {allProducts}
      </div>
    </div>
  )
}


