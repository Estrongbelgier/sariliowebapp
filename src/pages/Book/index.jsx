/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import OutlinedCard from '~/components/Card/index.jsx';
import InnerHeader from '~/components/InnerHeader/index.jsx';
import Ativo from '~/components/AtivoDaEmpresa/index.jsx';
import api from '~/services/api';

import './styles.css';

function Book() {
  const [orders, setOrder] = useState([]);
  const [ativos, setAtivos] = useState([]);

  useEffect(() => {
    async function hanleListOrders() {
      const { data } = await api.get('book');
      setOrder(data);
    }
    hanleListOrders();
  }, []);

  useEffect(() => {
    async function hanleListAtivos() {
      const { data } = await api.get('ativos');
      setAtivos(data);
    }
    hanleListAtivos();
  }, []);

  return (
    <div className="book-page-container">
      <InnerHeader />
      <div className="book-container">
        <h1>Livro de ofertas</h1>
        <ul>
          {orders.map((item) => (
            <li key={item.id}>
              <div>
                <OutlinedCard
                  title={item.Ativos.map((item2) => item2.nome_do_ativo)}
                  price={item.valor_total}
                  comissao={item.comissao}
                  quantidade={item.quantidade}
                  status={item.status}
                  owner={item.conta_interna_id}
                  order={item.id}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="book-container">
        <h1>Ativos da Empresa</h1>
        <ul>
          {ativos.map((ativo) => (
            <li key={ativo.id}>
              <Ativo
                id={ativo.id}
                nome={ativo.nome_do_ativo}
                quantidade={ativo.quantidade_disponivel}
                valor={ativo.valor}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Book;
