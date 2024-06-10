import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from './Components/Home/Footer'
import Navbar from './Components/Navbar'
import Topbar from './Components/Topbar'

const Layout = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
