import React, { useState } from 'react';
import '../styles/Newsletter.css';
import httpClient from '../http-client';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  function handleChange({target}) {
    setEmail(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php'
    const data = JSON.stringify ({
      "email": email
    })
    httpClient
      .post(url, data)
      .then((res) => {
        setEmail('')
        console.log(res.data);
      })
      .catch(err => console.log(err.response.data))
  }

  return (
    <div className="newsletter-container">
      <div className="news-parent">
        <span>NEWSLETTER FOREVER BABY</span>
        <p>Cadastre-se agora para não perder nenhuma promoção
        </p>
      </div>
      <form onSubmit={handleSubmit} className="register">
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
