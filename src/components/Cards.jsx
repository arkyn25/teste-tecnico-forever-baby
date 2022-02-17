import React from 'react'
import './Cards.css'
import cartIcon from '../images/cartIcon.png';

export default function Cards() {
  return (
    <div className="card-container">
      <div className="card">
        <img src="https://foreverliss.vteximg.com.br/arquivos/ids/157027/LandingProdutoProtetorTermico.png?v=637602464348800000" class="card-img-top" alt="..." width="256px"/>
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum lorem ipsum</h5>
          <p class="card-text">R$ 99,99</p>
          <img className="star" src="https://cdn.discordapp.com/attachments/772550479057387532/943638864659087360/Group_2.png" alt="" />
          <button type="button">
            <img src={ cartIcon } alt="cart icon" />
            ADICIONAR AO CARRINHO 
          </button>
        </div>
      </div>
    </div>
  )
}
