import React from 'react'
import Slider from 'react-slick';
import './Hero.css';
export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
      <div>
      </div>
      <div>
       
      </div>
      <div>
       
      </div>
      <div>
       
      </div>
    </Slider>
    </div>
    
  );
}
