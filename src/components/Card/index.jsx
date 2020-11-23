/* eslint-disable object-curly-spacing */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { toast } from 'react-toastify';
import api from '~/services/api';
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
  async function handleCompra() {
    const ordem_id = order;
    console.log(ordem_id);

    const params = { ordem_id };

    try {
      const res = await api.post(`bind?ordem_id=${ordem_id}`); // TODO estavamos aqui
      console.log(res);
      toast.success('Ativo comprado !');
    } catch (error) {
      console.log(error);
      toast.error('Compra não realizada!');
    }
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
