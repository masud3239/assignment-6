
// import { ToastContainer, toast } from 'react-toastify'

import React, { useState } from "react";
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Status from './components/Status'
import Steps from './components/Steps'
import ToggleSection from "./components/ToggleSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
 const [cartCount, setCartCount] = useState(0);

  return (
    <>
  <Navbar cartCount={cartCount} /> 
  
  <Banner></Banner>
    <Status/>
     <ToggleSection setCartCount={setCartCount} />
    <Steps></Steps>
    <Pricing></Pricing>
    <Footer></Footer>
   
      <ToastContainer />
    </>
  )
}

export default App
