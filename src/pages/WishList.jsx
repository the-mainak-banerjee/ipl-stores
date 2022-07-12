import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton, ProductList } from '../components'

export const WishList = () => {

    const wishListItems = [
      //   {
      //     id: 10,
      //     name: "CSK Jersy ",
      //     description:"Official Match Jersy Of Chennai Super Kings",
      //     price: 1299,
      //     team: 'csk',
      //     catagory: 'jersy',
      //     rating: 4.8,
      //     discount: 25,
      //     src: '../../assets/images/csk/jersy.jpg'
      // },
      //   {
      //     id: 10,
      //     name: "CSK Jersy ",
      //     description:"Official Match Jersy Of Chennai Super Kings",
      //     price: 1299,
      //     team: 'csk',
      //     catagory: 'jersy',
      //     rating: 4.8,
      //     discount: 25,
      //     src: '../../assets/images/csk/jersy.jpg'
      // },
      //   {
      //     id: 10,
      //     name: "CSK Jersy ",
      //     description:"Official Match Jersy Of Chennai Super Kings",
      //     price: 1299,
      //     team: 'csk',
      //     catagory: 'jersy',
      //     rating: 4.8,
      //     discount: 25,
      //     src: '../../assets/images/csk/jersy.jpg'
      // },
      // {
      //     id: 12,
      //     name: "DC Jersy ",
      //     description:"Official Match Jersy Of Delhi Capitals",
      //     price: 1999,
      //     team: 'dc',
      //     catagory: 'jersy',
      //     rating: 4.8,
      //     discount: 20,
      //     src: '../../assets/images/dc/jersy.jpg'
      // }
    ]

  return (
    <>
        {wishListItems.length>0 
          ? <section className='my-8'>
                <ProductList products={wishListItems}/>
            </section> 
          : <section 
                  className='w-full pl-10 mt-10 lg:pl-36 font-poppins'>
                  <div className='h-[60vh] flex flex-col items-center justify-center'>
                      <h3 className='text-2xl font-bold font-lora'>Your Wishlist Is Empty</h3> 
                      <Link to='/products'><PrimaryButton>Fill It</PrimaryButton></Link>
                  </div> 
              </section>
        }
    </>
  )
}


