import React, { useEffect } from 'react'
import { Carousel, ProductList } from '../components'
import { Products } from '../backend/db'
import { Catagories } from '../backend/catagories'
import { Link } from 'react-router-dom'
import { useFilter } from '../context/filter-context'

export const HomePage = () => {

  const featuredProducts = Products.filter(item => item.featured === true)
  const { dispatch } = useFilter()


  const popularCatagoris = Catagories.map(item => {
    return (
      <div key={item.id} className='w-96 sm:w-1/3 sm:h-96 mx-2 my-8 cursor-pointer hover:shadow-2xl hover:scale-105' onClick={() => dispatch({type:'CAT', payload:`${item.catagory}`})}>
      <Link to='/products'>
          <img src={item.src} alt={item.name} className='w-full h-full '/>     
          <p className='text-center w-full bg-secondary text-xl font-poppins px-4 py-2'>{item.name}</p>    
      </Link>
      </div>
    )
  })


  useEffect(() => {
    document.title = 'IPLStores'
  },[])


  return (
    <>
      <Carousel/>
      <section className='px-4 py-16 bg-white'>
        <h3 className='text-center font-lora text-3xl py-8'>Featured Product</h3>
        <ProductList products={featuredProducts}/>
      </section>
      <section className='my-16 mx-4'>
        <h3 className='text-center font-lora text-3xl py-8'>Popular Catagories</h3>
        <div className='flex flex-col md:flex-row items-center justify-evenly'>
          {popularCatagoris}
        </div>
      </section>
    </>
  )
}

