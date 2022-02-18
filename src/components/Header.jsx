import React, { useState } from 'react'
import '../styles/Header.css';
import logoForeverLiss from "../images/logoForeverLiss.png"
import profileIcon from "../images/profileIcon.png";
import cartIcon from "../images/cartIcon.png";

export default function Header() {
  const [input, setInput] = useState('');
  const [disable, setDisable] = useState(true);


  const verifySearch = () => {
    const format = /[\W_]/;
    const specialChars = format.test(input);
    if (input.length < 3 || specialChars) {
      setDisable(true)
    } else {
      setDisable(false)
    }
  }
  const handleChange = ({ target }) => {
    setInput(target.value);
    verifySearch();
  }
  
  return (
    <div className="header">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          
          <span></span>
          <span></span>
          <span></span>
          
          <ul id="menu">
            <a href="#"><li>PERFUME INFANTIL</li></a>
            <a href="#"><li>SABONETES</li></a>
            <a href="#"><li>PÓS-BANHO</li></a>
            <a href="#"><li>ASSADURAS</li></a>
            <a href="#"><li>HIDRATANTES</li></a>
            <a href="#"><li>LENÇOS UMEDECIDOS</li></a>
          </ul>
         </div>
       </nav>
      <a href="https://www.foreverliss.com.br/">
        <img src={ logoForeverLiss } alt="logo" id="logo" />
      </a>
      <form className="forms">
        <input
            type="text"
            placeholder="Qual o mimo de hoje para o seu anjinho?"
            onChange={handleChange}
            >
        </input>
        <button type="submit" id="searchButton"
          disabled={disable}
        >
            BUSCAR
        </button>
      </form>
      <div className="userSection">
        <div>
          <button id="userButtons">
            <img
              src= { profileIcon }
              alt="profile button"
              id="profileIcon"
            />
          </button>
          MINHA CONTA
        </div> 
          <div>
            <button id="userButtons">
              <img
                src= { cartIcon }
                alt="cart button"
              />
            </button>
            CARRINHO
          </div>
      </div>
  </div>
  )
}
