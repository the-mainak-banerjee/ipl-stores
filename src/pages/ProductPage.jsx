import React, { useEffect } from 'react'
import { FilterBar, ProductList, SubNavbar } from '../components'
import { useFilter } from '../context/filter-context'

export const ProductPage = () => {

  const { filteredProducts } = useFilter()

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
            products = {filteredProducts}
          />
      </section>
    </>
  )
}

