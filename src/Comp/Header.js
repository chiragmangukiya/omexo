import React from 'react'
import { FaSearch,FaEnvelope,FaPhoneAlt,FaTwitter,FaLinkedinIn,FaDribbble } from "react-icons/fa";

const Header = () => {
  return (
    <>
          {/* Start Header */}
          <header>

               {/* Top Header */}
               <div className='bgBlue d-lg-block d-none py-3'>
                    <div className="container">
                         <div className="row align-items-center justify-content-between">
                              <div className="col-auto position-relative">
                                   <input type="text" name="" placeholder='Search Courses' id="" className='search_box'/>
                                   <FaSearch className='search_icon position-absolute top-50 translate-middle-y'></FaSearch>
                              </div>
                              <div className="col-auto contact_info">
                                   <ul className='d-flex'>
                                        <li className='me-3'>
                                             <FaEnvelope className='me-2'></FaEnvelope>
                                             <span>support@example.com</span>
                                        </li>
                                        <li className='me-5'>
                                             <FaPhoneAlt className='me-2'></FaPhoneAlt>
                                             <span>+98 012345 6789</span>
                                        </li>
                                        <li className='ms-end social_icon ms-5'>
                                             <a href="#"><FaTwitter></FaTwitter></a>
                                             <a href="#"><FaLinkedinIn></FaLinkedinIn></a>
                                             <a href="#"><FaDribbble></FaDribbble></a>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Logo Header */}
               <div className="container">
                    <nav className="navbar navbar-expand-lg py-0">
                         <div className="container-fluid px-0 align-items-center">
                              <a className="navbar-brand main_logo" href="#">
                                   <img src={require('../assets/image/logo_dark.png')}></img>
                              </a>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon" />
                              </button>
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                   <ul className="navbar-nav ms-auto mb-2 mb-lg-0 main_menu">
                                        <li className="nav-item">
                                             <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Pages</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                             <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Courses
                                             </a>
                                             <ul className="dropdown-menu">
                                                  <li><a className="dropdown-item" href="#">Action</a></li>
                                                  <li><a className="dropdown-item" href="#">Another action</a></li>
                                                  <li><hr className="dropdown-divider" /></li>
                                                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                                             </ul>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link">Webinars</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link">Contact</a>
                                        </li>
                                   </ul>
                                   <div className='btn btn-theme ms-5'>
                                        <a href="">Login</a>
                                        <a href="">Register</a>
                                   </div>
                              </div>
                         </div>
                    </nav>

               </div>

          </header>
          {/* End Header */}
    </>
  )
}

export default Header
