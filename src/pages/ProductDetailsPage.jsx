import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../backend/db';
import { ProductDetailsCard, ProductList } from '../components';

export const ProductDetailsPage = () => {
  const params = useParams();
  const product = Products.find(item => item.id === params.productId)
  const relatedProducts = Products.filter(item => item.catagory === product?.catagory)
  const productIndex = relatedProducts.findIndex(item => item.id === params.productId)
  relatedProducts.splice(productIndex,1)

  useEffect(() => {
    document.title = `IPLStores-Products || ${product?.name}`
  },[product?.name])

  return (
    <>
      {product ? <ProductDetailsCard
        product={product}
      /> : <p className='text-center font-lora text-xl'>No Product Found</p>}
      {product && <section className='py-10 px-4'>
        <h3 className='text-center font-lora text-3xl'>Related Products</h3>
        <ProductList
          products={relatedProducts.slice(0,4)}
        />
      </section>}
    </>
  )
}

