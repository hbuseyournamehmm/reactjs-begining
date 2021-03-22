import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Product from './Product'

const Offer = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="col md-12 shadow-lg text-center mt-3 mb-3 p-3">
                    <h1>Todays Offer</h1>
                </div>
            </div>
            <Product />
            <Footer />
        </>
    )
}

export default Offer
