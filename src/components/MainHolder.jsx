import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainHolder = () => {
  return (
    <div className='main-holder'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainHolder