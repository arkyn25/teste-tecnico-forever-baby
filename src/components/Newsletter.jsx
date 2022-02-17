import React from 'react';
import '../styles/Newsletter.css';

export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="news-parent">
        <span>NEWSLETTER FOREVER BABY</span>
        <p>Cadastre-se agora para não perder nenhuma promoção
        </p>
      </div>
      <form className="register">
        <input type="text" placeholder="Digite aqui o seu melhor e-mail"/>
        <button type="button" id="registerButton">
          CADASTRAR
        </button>
      </form>
    </div>
  )
}
