/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { MdMonetizationOn } from 'react-icons/md';
import { BiCoinStack } from 'react-icons/bi';
import formatPrice from '~/utils/corruency';

import './styles.css';

export default function CardAtivo({ nome, valor, quantidade }) {
  return (
    <div className="ativo-card-container">
      <div>
        <h1>{nome}</h1>
      </div>
      <div className="ativo-coin-props">
        <h2>
          <MdMonetizationOn />
          {formatPrice(valor)}
        </h2>
        <h2>
          <BiCoinStack />
          {quantidade} und
        </h2>
      </div>
      <div className="button-container">
        <button type="button">Vender</button>
        {/* TODO colcar acao aqui */}
      </div>
    </div>
  );
}
