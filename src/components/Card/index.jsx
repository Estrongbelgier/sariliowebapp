/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import formatPrice from '~/utils/corruency';
import './styles.css';

export default function OutlinedCard({
  title,
  price,
  comissao,
  quantidade,
  status,
  owner,
  order,
}) {
  function handleCompra() {
    const order_id = order;
    console.log(order_id);
  }
  return (
    <div className="card-container">
      <div>
        <h1>{title}</h1>
      </div>
      <div className="coin-props">
        <h2>Preço: {formatPrice(price)}</h2>
        <h2>Comissão: {formatPrice(comissao)}</h2>
        <h2>Quantidade: {quantidade}</h2>
        <h2>{status}</h2>
      </div>
      <div className="button-container">
        <button type="button" onClick={handleCompra}>
          Comprar
        </button>
        {/* TODO colcar acao aqui */}
      </div>
    </div>
  );
}
