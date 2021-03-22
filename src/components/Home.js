import React from 'react'
import Caraousel from './Caraousel'
import Footer from './Footer'
import Navbar from './Navbar'
import Product from './Product'


function Home() {
    return (
        <>
          <Navbar/>
          <Caraousel/>
          <Product/>
          <Footer/>  
        </>
    )
}

export default Home
