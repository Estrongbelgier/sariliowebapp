/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardAtivo from '~/components/CardAtivo/index.jsx';
import InnerHeader from '~/components/InnerHeader/index.jsx';
import api from '~/services/api';

import './styles.css';

export default function MeusAtivos() {
  const [ativos, setAtivos] = useState([]);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    async function handleGetMeusAtivos() {
      const { data } = await api.get('meusativos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAtivos(data);
    }
    handleGetMeusAtivos();
  }, []);

  return (
    <div className="ativos-page-container">
      <InnerHeader />
      <h1>Meus ativos</h1>
      {ativos.map((ativo) => (
        <div className="ativos-container">
          <CardAtivo
            key={ativo.id}
            id={ativo.id}
            nome={ativo.nome}
            valor={ativo.valor}
            quantidade={ativo.quantidade}
          />
        </div>
      ))}
    </div>
  );
}
