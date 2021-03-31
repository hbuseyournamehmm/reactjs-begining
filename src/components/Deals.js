import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Day from './Day'
import Week from './Week'

const Deals = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <h2>Deals and Promotion</h2>
                    <span>Shop Today's Deals, Ligthning Deals, and Limited-time Discount</span>
                    <div className="col-md-2 shadow" style={{backgroundColor:'#f5f5f5'}}>
                        <h4>Categories</h4>
                        <form><div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                            mobile
  </label>
                        </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Laptop
  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Books
  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Clothes
  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                <label class="form-check-label" for="flexCheckChecked">
                                    sshoes
  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Stuffs
  </label>
                            </div>
                            <Link className="text-decoration-non btn btn-info">see more</Link>
                            </form>

                            <div className='mt-2'>
                                <h4>Deal type</h4>
                                <Link to='#' className="text-decoration-none"> Deal of the Day</Link> <br/>
                                <Link to='#' className="text-decoration-none"> Lightening Deals</Link> <br/>
                                <Link to='#' className="text-decoration-none"> Saving and Sales</Link> <br/>
                                <Link to='#' className="text-decoration-none"> Weekend Deals</Link> <br/>
                                

                            </div>




                    </div>
                    <div className="col-md-10">
                        <div className="shadow p-2">
                            <center><h3>Deals of the Day</h3></center>
                        </div>
                        <Day/>
                        <div className="shadow p-2">
                            <center><h3>Deals of the Week</h3></center>
                        </div>
                        <Week/>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Deals
