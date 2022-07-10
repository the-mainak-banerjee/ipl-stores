import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiUserPlus } from 'react-icons/fi'
import { BsList } from 'react-icons/bs'
import { SideNavBar } from './SideNavBar'

export const Navbar = () => {

  const [showSideBar,setShowSideBar] = useState(false)

  function handleSideBar(){
    setShowSideBar(prevState => !prevState)
  }

  return (
    <>
      <div 
        className='lg:px-36 px-10 flex justify-between items-center h-20 w-full'>
        <NavLink to='/'>
          <h2 
            className='font-extrabold font-lora text-[2rem]'>
              IPL<span className='text-primaryHover'>Stores</span>
          </h2>
        </NavLink>
        <ul 
          className='hidden lg:flex items-center font-poppins tracking-wider'>
          <NavLink 
            to='/' 
            className={(navData) => navData.isActive ? 'underline font-semibold text-secondary' : ''}>
              <li 
                className='mr-8 hover:text-secondary'>
                Home
              </li>
          </NavLink>
          <NavLink 
            to='/products' 
            className={(navData) => navData.isActive ? 'underline font-semibold text-secondary' : ''}>
            <li 
              className='mr-8 hover:text-secondary'>
              Products
            </li>
          </NavLink>
        </ul>
        <ul 
          className='hidden lg:flex items-center font-poppins tracking-wider text-[1.5rem]'>
          <NavLink to='/cart'
            className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover' : ''}>
            <li 
              className='mr-4 hover:text-primaryHover flex items-center'>
              <p className='mr-2'>Cart</p>
              <AiOutlineShoppingCart/>
            </li>
          </NavLink>
          <NavLink to='/login'
            className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover' : ''}>
            <li 
              className='mr-4 hover:text-primaryHover flex items-center'>
              <p className='mr-2'>Login</p>
              <FiUserPlus/>
            </li>
          </NavLink>
        </ul>
        <BsList 
          size='40px' 
          color='#AB7B60' 
          className='block lg:hidden cursor-pointer'
          onClick={handleSideBar}
          />
      </div>
      {showSideBar && <SideNavBar handleSideBar={handleSideBar}/>}
    </>
  )
}


