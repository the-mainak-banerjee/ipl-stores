import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiUserPlus } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'


export const SideNavBar = (props) => {
  return (
    <div className='w-full h-full fixed top-4 left-0 bg-white'>
        <div className='flex justify-between px-10'>
            <h2 
                className='font-extrabold font-lora text-[2rem]'>
                IPL<span className='text-primaryHover'>Stores</span>
            </h2>  
            <ImCross 
                size='35px'
                color='#AB7B60' 
                className='block cursor-pointer'
                onClick={props.handleSideBar}
            />
        </div>
        <div>
            <ul 
                className='font-poppins tracking-wider text-lg px-10'>
                <NavLink 
                to='/' 
                className={(navData) => navData.isActive ? 'underline font-semibold text-secondary' : ''}>
                    <li 
                        className='mt-4 hover:text-secondary'
                        onClick={props.handleSideBar}    
                    >
                        Home
                    </li>
                </NavLink>
                <NavLink 
                to='/products' 
                className={(navData) => navData.isActive ? 'underline font-semibold text-secondary' : ''}>
                    <li 
                        className='mt-4 hover:text-secondary'
                        onClick={props.handleSideBar}
                    >
                        Products
                    </li>
                </NavLink>
            </ul>
        </div>
        <div className='w-full mx-auto mt-8'>
            <ul 
                className='flex justify-center items-center font-poppins tracking-wider text-[1.5rem]'>
                <NavLink to='/cart'
                    className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover' : ''}>
                    <li 
                        className='mr-4 hover:text-primaryHover flex items-center'
                        onClick={props.handleSideBar}
                    >
                            <p className='mr-2'>Cart</p>
                        <AiOutlineShoppingCart/>
                    </li>
                </NavLink>
                <NavLink to='/login'
                    className={(navData) => navData.isActive ? 'underline font-semibold text-primaryHover' : ''}>
                    <li 
                        className='mr-4 hover:text-primaryHover flex items-center'
                        onClick={props.handleSideBar}    
                    >
                        <p className='mr-2'>Login</p>
                        <FiUserPlus/>
                    </li>
                </NavLink>
            </ul>
        </div>
    </div>
  )
}

