import React from 'react'
import Slider from "react-slick";

const Trending = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="container">
                <div className="row mt-3 mb-5">
                    <Slider {...settings}>
                        <div>
                            <img src="images/cart.jpg" className="img-fluid" alt="" style={{ height: '200px'}} />
                        </div>
                        <div>
                            <img src="images/onbank.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/e-commerce.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/sogn.jfif" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/dodge.jpeg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/money.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/onbank.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/blade.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Trending
