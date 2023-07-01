import React from 'react'
import {Carousel} from "react-responsive-carousel"
import img1 from "../assets/artichoke-slide.jpg";
import img2 from "../assets/fish-slide.jpg";
import img3 from "../assets/peppers-slide.jpg";
import img4 from "../assets/veal-milanese-close-slide.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"
function Services() {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus = {false} showArrows = {false} interval = {1500}>
        <div>
          <img src={img1} alt="Item1"/>
          <p>Panko Solman</p>
        </div>
        <div>
          <img src={img2} alt="Item1"/>
          <p>White Delicacy</p>
        </div>
        <div>
          <img src={img3} alt="Item1"/>
          <p>Mussels Marinara</p>
        </div>
        <div>
          <img src={img4} alt="Item1"/>
          <p>Crispy Fries</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services