import React from 'react'
import Navbar from '../nav/Navbar'
import Footer from '../footer/Footer';


import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
    <div>

        <Navbar/>

        <Outlet></Outlet>

        <Footer/>




    </div>
  )
}
