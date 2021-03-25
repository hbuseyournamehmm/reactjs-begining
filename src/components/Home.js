import React from 'react'
import Caraousel from './Caraousel'
import Footer from './Footer'
import Navbar from './Navbar'
import Product from './Product'
import Trending from './Trending'


function Home() {
    return (
        <>
          <Navbar/>
          <Caraousel/>
          <Product/>
          <Trending/>
          <Footer/>  
        </>
    )
}

export default Home
