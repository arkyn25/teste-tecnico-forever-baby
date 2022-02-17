import React from 'react';
import Slider from 'react-slick';
import '../styles/Hero.css';

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
      <img src="https://foreverliss.vteximg.com.br/arquivos/ids/164118/fullbanner-ofertassecretas-16fev-GIF.gif?v=637806170872430000" style={{ "background-position": "cover"}} alt="" />
      </div>
      <div>
      <img src="https://foreverliss.vteximg.com.br/arquivos/ids/164043/sem-reconstrucao-f0-03fev2022.png?v=637795202828130000" style={{ "background-position": "cover"}} alt="" />
      </div>
      <div>
      <img src="https://foreverliss.vteximg.com.br/arquivos/ids/164102/f1-descontosprogressivos-fev2022.gif?v=637805325596970000" style={{ "background-position": "cover"}} alt="" />
      </div>
      <div>
      <img src="https://foreverliss.vteximg.com.br/arquivos/ids/164106/f10off-produtos-lista-f0-15fev2022.png?v=637805347134200000" alt="" />
      </div>
    </Slider>
    </div>
    
  );
}
