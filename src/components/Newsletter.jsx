import React, { useState } from 'react';
import '../styles/Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  function handleChange({target}) {
    setEmail(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('')
  }

  return (
    <div className="newsletter-container">
      <div className="news-parent">
        <span>NEWSLETTER FOREVER BABY</span>
        <p>Cadastre-se agora para não perder nenhuma promoção
        </p>
      </div>
      <form action="https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php" onSubmit={handleSubmit} method="post"  className="register">
        <input type="email"
         value={email}
         id="input"
         required
         onChange={handleChange}
         placeholder="Digite aqui o seu melhor e-mail"/>
        <button type="submit" id="registerButton">
          CADASTRAR
        </button>
      </form>
    </div>
  )
}
