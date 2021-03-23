import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-md-8">
        <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>

        <div className="col-md-4">
          <ul className="d-flex">
            <li className="list-unstyled"><Link className="text-decoration-none p-3" to="/signup">Signup</Link></li>
            <li className="list-unstyled"><Link className="text-decoration-none p-3" to="/signin">Signin</Link></li>

          </ul>

        </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">E-Commerce</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/offer">Offer</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
          </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" to="#">Action</Link></li>
                  <li><Link class="dropdown-item" to="#">Another action</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
