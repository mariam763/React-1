import React, { Component } from 'react';
import { createHashRouter, createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Layout from './components/layout/Layout.jsx';
import Start from './components/start/Start';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

let routers = createHashRouter ([
  { path:'' , element:<Layout/> , children:[    
    {path: 'start' , element:<Start/>},
    {path: 'portfolio' , element:<Portfolio/>},
    {path: 'about' , element:<About/>},
    {path: 'contact' , element:<Contacts/>},
  
]}
    
])

export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}


 



