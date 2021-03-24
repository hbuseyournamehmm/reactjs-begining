import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center" style={{backgroundColor:'#131921'}}>
        <div className="col-md-8">
        <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>

        <div className="col-md-4">
          <ul className="d-flex">
            <li className="list-unstyled"><Link className="text-decoration-none p-3 text-white" to="/signup"><i className="bi bi-person-plus-fill" style={{color:'orange', fontSize:'20px'}}></i>&nbsp;Signup</Link></li>
            <li className="list-unstyled"><Link className="text-decoration-none p-3 text-white" to="/signin"><i className="bi bi-box-arrow-in-right" style={{color:'orange',fontSize:'20px'}}></i>&nbsp;Signin</Link></li>
            <li className="list-unstyled"><Link className="text-decoration-none p-2"><i className="bi bi-cart"style={{color:'orange',fontSize:'20px'}}></i><sup style={{color:'white',fontSize:'10px',backgroundColor:'orange',borderRadius:'50%',padding:'3px'}}>5</sup></Link></li>

          </ul>

        </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light "style={{backgroundColor:'#232f3e'}}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">E-Commerce</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/offer">Offer</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
          </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
