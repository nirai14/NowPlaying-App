import React from 'react'
import Header from'../../Components/Header/Header'
import Footer from'../../Components/Footer/Footer'
import { Outlet } from 'react-router'

function Layout({handleLogin}) {
  return (
    <div>
      <Header handleLogin={handleLogin}/>
      <Outlet/>
     
      <Footer/>
    </div>
  )
}

export default Layout