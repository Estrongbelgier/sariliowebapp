/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { MdMonetizationOn } from 'react-icons/md';
import { BiCoinStack } from 'react-icons/bi';
import { toast } from 'react-toastify';
import formatPrice from '~/utils/corruency';

import api from '~/services/api';

import './styles.css';

export default function CardAtivo({ id, nome, valor, quantidade }) {
  const [tipo, setTipo] = useState('Venda');

  async function handleVenda() {
    try {
      const res = await api.post(`book?ativo_id=${id}`, {
        tipo_de_ordem: tipo,
        preco_limite: valor,
        quantidade,
      });

      console.log(res);
      toast.success('Adiconado ao Livro de Ofertas');
    } catch (error) {
      console.log(error);
      toast.error('Verifique e tente novamente');
    }
  }
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
        <button type="button" onClick={handleVenda}>
          Vender
        </button>
      </div>
    </div>
  );
}
