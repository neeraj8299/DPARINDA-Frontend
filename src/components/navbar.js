import React from 'react'
import { Link } from 'react-router-dom'
import MyAccount from './LandingPage/myaccount'
import Mycart from './Mycart/Mycart'
import LandingPage from './LandingPage/LandingPage'
import Categories from './Categories/Categories'
import FirstPage from './FirstPage/FirstPage'
import SecondPage from './SecondPage/SecondPage'
function Navbar() {
    return (
    
            

                <div className= "p-3 mb-2 bg-info text-dark">
                    
                    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top ">
                        <nav class="navbar navbar-dark bg-primary"></nav>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"> <Link to="/landing">D-parinda </Link> </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/mycart">My Cart</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/myaccount">MyAccount</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/categories">Categories</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" to="./first">Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/second">Register</Link>
                                </li>

                            </ul>
              
                        </div>
                    </div>
                </nav>

                 
                </div>
            )
}

            export default Navbar