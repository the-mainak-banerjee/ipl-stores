import React from 'react'

export const PrimaryButton = ({children,onClick, disabled}) => {
  return (
    <button 
        className='bg-primary text-white px-12 py-2 rounded-lg text-xl shadow-xl hover:bg-primaryHover hover:scale-105 disabled:bg-[#909090] disabled:text-gray-600 mt-4 mb-2'
        onClick={onClick}    
        disabled={disabled}
    >
      {children}
    </button>
  )
}


