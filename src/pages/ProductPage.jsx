import React, { useEffect } from 'react'
import { Products } from '../backend/db'
import { FilterBar, ProductList, SubNavbar } from '../components'

export const ProductPage = () => {

  useEffect(() => {
    document.title = 'IPLStores-Products'
  },[])

  return (
    <>
      <section>
        <SubNavbar pageName='Products'/>
      </section>
      <section className='flex flex-col xl:flex-row w-full pl-10 mt-10 lg:pl-36'>
          <FilterBar />
          <ProductList 
            products = {Products}
          />
      </section>
    </>
  )
}

