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
               <div className="position-relative">
                    <div className="container">
                         <nav className="navbar navbar-expand-lg py-0">
                              <div className="container-fluid px-0 align-items-center">
                                   <a className="navbar-brand main_logo order-1 order-lg-1" href="#">
                                        <img src={require('../assets/image/logo_dark.png')}></img>
                                   </a>
                                   <button className="navbar-toggler order-3 order-lg-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                   </button>
                                   <div className="collapse navbar-collapse mob_menu order-2" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 main_menu">
                                             <li className="nav-item">
                                                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                                             </li>
                                             <li className="nav-item">
                                                  <a className="nav-link dropdown-toggle" href="#">Pages</a>
                                                  <ul className="sub_menu">
                                                       <li><a href="#">About Us</a></li>
                                                       <li><a href="#">Membership Plans</a></li>
                                                       <li><a href="#">Instructors</a></li>
                                                       <li><a href="#">FAQs</a></li>
                                                  </ul>
                                             </li>
                                             <li className="nav-item ">
                                                  <a className="nav-link dropdown-toggle" href="#">
                                                  Courses
                                                  </a>
                                                  <ul class="sub_menu">
                                                       <li><a href="#">Courses</a></li>
                                                       <li><a href="#">Course Single</a></li>
                                                       <li><a href="#">Become An Instructor</a></li>
                                                       <li><a href="#">Instructor Profile</a></li>
                                                       <li><a href="#">Student Registration</a></li>
                                                       <li><a href="#">Instructor Registration</a></li>
                                                  </ul>
                                             </li>
                                             <li className="nav-item">
                                                  <a href="#" className="nav-link dropdown-toggle">Webinars</a>
                                                  <ul class="sub_menu">
                                                       <li><a href="#">Upcoming Webinars</a></li>
                                                       <li><a href="#">Webinar Single</a></li>
                                                  </ul>
                                             </li>
                                             <li className="nav-item">
                                                  <a href="#" className="nav-link dropdown-toggle">Blog</a>
                                                  <ul class="sub_menu">
                                                       <li><a href="#">Blog Page</a></li>
                                                       <li><a href="#">Blog Single</a></li>
                                                  </ul>
                                             </li>
                                             <li className="nav-item">
                                                  <a href="#" className="nav-link">Contact</a>
                                             </li>
                                        </ul>                                   
                                   </div>
                                   <div className='btn btn-theme ms-5 d-none d-md-block order-2 order-lg-3'>
                                        <a href="#">Login</a>
                                        <a href="#">Register</a>
                                   </div>
                              </div>
                         </nav>
                    </div>
               </div>

          </header>
          {/* End Header */}
    </>
  )
}

export default Header
