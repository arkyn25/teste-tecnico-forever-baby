import React from 'react';
import '../styles/Footer.css';
import face from '../images/face.png';
import insta from '../images/insta.png';
import tiktok from '../images/tiktok.png';
import ytube from '../images/ytube.png';
import payment from '../images/payment.png';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <div className="visit-title">
          <span>VISITE NOSSAS REDES SOCIAIS</span>
        </div>
        <div className="visit-social">
          <a href="https://www.instagram.com/foreverliss/" target="_blank" rel="norefer noreferrer">
            <img src={insta} alt="insta-icon" />
          </a>
          <a href="https://www.facebook.com/foreverliss"
          target="_blank" rel="norefer noreferrer">
            <img src={face} alt="face-icon" />
          </a>
          <a href="https://www.youtube.com/c/ForeverLissOficial"
          target="_blank" rel="norefer noreferrer">
            <img src={ytube} alt="youtube-icon" />
          </a>
          <a href="https://www.tiktok.com/@foreverlissprofessional"
          target="_blank" rel="norefer noreferrer">
            <img src={tiktok} alt="tiktok-icon" />
          </a>
        
        </div>
        
        <nav className="navbar-footer">
          <a href="#">PERFUME INFANTIL</a>
          <a href="#">SABONETES</a>
          <a href="#">PÓS-BANHO</a>
          <a href="#">ASSADURAS</a>
          <a href="#">HIDRATANTES</a>
          <a href="#">LENÇOS UMEDECIDOS</a>
        </nav>
        <div className="payment-title">
          <span>FORMA DE PAGAMENTO</span>
        </div>
        <div>
          <img src={payment} alt="payment-flags" />
        </div>
      </div>
    </div>
  )
}
