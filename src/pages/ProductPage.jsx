import React, { useEffect } from 'react'
import { ProductList, SubNavbar } from '../components'

export const ProductPage = () => {

  useEffect(() => {
    document.title = 'IPLStores-Product'
  },[])

  return (
    <>
      <section>
        <SubNavbar pageName='Products'/>
      </section>
      <section className='flex flex-col lg:flex-row w-full'>
          <div>Filter Box</div>
          <ProductList/>
      </section>
    </>
  )
}

