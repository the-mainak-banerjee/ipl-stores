import React, { useEffect } from 'react'

export const HomePage = () => {


  useEffect(() => {
    document.title = 'IPLStores'
  },[])

  return (
    <div>
      This is Home Page
    </div>
  )
}

