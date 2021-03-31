import React from 'react'

const Day = () => {
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5 mb-3">
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/sogn.jfif" className="card-img-top" alt="..." style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <button className="btn btn-primary">Add Cart</button>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/cart.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <button className="btn btn-primary">Add Cart</button>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/onbank.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <button className="btn btn-primary">Add Cart</button>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/money.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <button className="btn btn-primary">Add Cart</button>

                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </>
    )
}

export default Day
