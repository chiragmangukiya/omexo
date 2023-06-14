import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const banner={
     items:1,
}

const Banner = () => {
  return (
    <>
          {/* Start Banner */}
          <div className="banner">

               <OwlCarousel id='banner' className='owl-theme' {...banner} loop margin={10} nav>
                    <div class='item'>
                         <div className="slider_content">
                              <p className='h4'>Start learning from home</p>
                              <p className='h2'>Connect With Our Expert And Start Learning Today</p>
                              <p className=''>We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                         </div>
                    </div>
               </OwlCarousel>

          </div>
          {/* End Banner */}
    </>
  )
}

export default Banner