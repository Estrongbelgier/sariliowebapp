/* eslint-disable object-curly-spacing */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '~/services/api';
import formatPrice from '~/utils/corruency';

export default function AtivoDaEmpresa({ id, nome, valor, quantidade }) {
  const [qtd, setQtd] = useState();
  console.log(qtd);
  async function handleCompra() {
    try {
      const res = await api.post(`ask?ativo_id=${id}`, {
        quantidade: qtd, // CONTINUAR aqui
      });
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
        <h1>{nome}</h1>
      </div>
      <div className="coin-props">
        <h2>Preço: {formatPrice(valor)}</h2>
        <h2>Disponivel: {quantidade}</h2>
        <input
          type="number"
          placeholder="Quantidade"
          onChange={(e) => setQtd(Number(e.target.value))}
        />
      </div>
      <div className="button-container">
        <button type="button" onClick={handleCompra}>
          Comprar
        </button>
      </div>
    </div>
  );
}
