/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import OutlinedCard from '~/components/Card/index.jsx';
import InnerHeader from '~/components/InnerHeader/index.jsx';

import './styles.css';

function Book() {
  const array = [
    {
      id: 1,
      tipo_de_ordem: 'Venda',
      preco_limite: 10,
      valor_total: 50,
      comissao: 1,
      quantidade: 5,
      status: 'Aberta',
      createdAt: '2020-09-20T16:08:38.076Z',
      updatedAt: '2020-09-20T16:08:38.076Z',
      conta_interna_id: 1,
      Ativos: [
        {
          id: 1,
          nome_do_ativo: 'SarilioCoin',
          valor: 10,
          quantidade_disponivel: 1000,
          createdAt: '2020-09-03T23:17:47.097Z',
          updatedAt: '2020-09-09T00:04:33.842Z',
          categoria_id: 1,
          ContaAtivo: {
            ordem_id: 10,
            ativo_id: 1,
            createdAt: '2020-09-20T16:08:38.111Z',
            updatedAt: '2020-09-20T16:08:38.111Z',
          },
        },
      ],
    },
    {
      id: 2,
      tipo_de_ordem: 'Venda',
      preco_limite: 10,
      valor_total: 50,
      comissao: 1,
      quantidade: 5,
      status: 'Aberta',
      createdAt: '2020-09-20T16:08:38.076Z',
      updatedAt: '2020-09-20T16:08:38.076Z',
      conta_interna_id: 1,
      Ativos: [
        {
          id: 1,
          nome_do_ativo: 'SarilioCoin',
          valor: 10,
          quantidade_disponivel: 1000,
          createdAt: '2020-09-03T23:17:47.097Z',
          updatedAt: '2020-09-09T00:04:33.842Z',
          categoria_id: 1,
          ContaAtivo: {
            ordem_id: 10,
            ativo_id: 1,
            createdAt: '2020-09-20T16:08:38.111Z',
            updatedAt: '2020-09-20T16:08:38.111Z',
          },
        },
      ],
    },
    {
      id: 2,
      tipo_de_ordem: 'Venda',
      preco_limite: 10,
      valor_total: 50,
      comissao: 1,
      quantidade: 5,
      status: 'Aberta',
      createdAt: '2020-09-20T16:08:38.076Z',
      updatedAt: '2020-09-20T16:08:38.076Z',
      conta_interna_id: 1,
      Ativos: [
        {
          id: 1,
          nome_do_ativo: 'SarilioCoin',
          valor: 10,
          quantidade_disponivel: 1000,
          createdAt: '2020-09-03T23:17:47.097Z',
          updatedAt: '2020-09-09T00:04:33.842Z',
          categoria_id: 1,
          ContaAtivo: {
            ordem_id: 10,
            ativo_id: 1,
            createdAt: '2020-09-20T16:08:38.111Z',
            updatedAt: '2020-09-20T16:08:38.111Z',
          },
        },
      ],
    },
    {
      id: 2,
      tipo_de_ordem: 'Venda',
      preco_limite: 10,
      valor_total: 50,
      comissao: 1,
      quantidade: 5,
      status: 'Aberta',
      createdAt: '2020-09-20T16:08:38.076Z',
      updatedAt: '2020-09-20T16:08:38.076Z',
      conta_interna_id: 1,
      Ativos: [
        {
          id: 1,
          nome_do_ativo: 'SarilioCoin',
          valor: 10,
          quantidade_disponivel: 1000,
          createdAt: '2020-09-03T23:17:47.097Z',
          updatedAt: '2020-09-09T00:04:33.842Z',
          categoria_id: 1,
          ContaAtivo: {
            ordem_id: 10,
            ativo_id: 1,
            createdAt: '2020-09-20T16:08:38.111Z',
            updatedAt: '2020-09-20T16:08:38.111Z',
          },
        },
      ],
    },
  ];
  return (
    <div className="book-page-container">
      <InnerHeader />
      <div className="book-container">
        <ul>
          {array.map((item) => (
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
    </div>
  );
}

export default Book;
