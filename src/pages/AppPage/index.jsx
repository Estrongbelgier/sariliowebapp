/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { CgProfile, CgCheckO, CgPin } from 'react-icons/cg';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { MdAccountBalance } from 'react-icons/md';

import { GiTwoCoins } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import InnerHeader from '~/components/InnerHeader/index.jsx';
import api from '~/services/api';
import formatPrice from '~/utils/corruency';

import './styles.css';
import Coin from '~/components/Coin/index.jsx';

function AppPage() {
  const [userData, setUserData] = useState();
  const { signed } = useSelector((state) => state.auth);

  useEffect(() => {
    api.get('usuario').then((res) => {
      setUserData(res.data);
    });
  }, []);

  function reload() {
    window.location.reload();
  }
  return (
    <div className="app-page-container">
      <InnerHeader />
      {!userData ? (
        <button type="button" onClick={reload}>
          <h1>Mostrar dados</h1>
        </button>
      ) : (
        <>
          {userData.PessoaFisica ? (
            <div className="app-container">
              <h1>Bem vindo</h1>
              <div className="icon-combo">
                <CgProfile color="#d3e2e5" size={60} />
                <h6>
                  {!userData.PessoaFisica
                    ? 'Vá no perfil e registr-se como PF ou PJ'
                    : userData.PessoaFisica.nome}
                </h6>
              </div>
              <div className="icon-combo">
                <CgCheckO color="#d3e2e5" size={48} />
                <h6>
                  {!userData.PessoaFisica
                    ? 'Inativo'
                    : !userData.Qualificacao
                    ? 'Inativo'
                    : userData.Qualificacao.status}
                </h6>
              </div>
              <div className="icon-combo">
                <CgPin color="#d3e2e5" size={50} />
                <h6>
                  {!userData.Endereco
                    ? 'Cadastre seu endereço'
                    : userData.Endereco.cep}
                </h6>
              </div>
            </div>
          ) : (
            <div className="app-container">
              <h1>Bem vindo</h1>
              <div className="icon-combo">
                <CgProfile color="#d3e2e5" size={60} />
                <h6>
                  {!userData.PessoaJuridica
                    ? 'Vá no perfil e registr-se como PF ou PJ'
                    : userData.PessoaJuridica.nome_fantasia}
                </h6>
              </div>
              <div className="icon-combo">
                <CgCheckO color="#d3e2e5" size={48} />
                <h6>
                  {!userData.PessoaJuridica
                    ? 'Inativo'
                    : userData.Qualificacao.status}
                </h6>
              </div>
              <div className="icon-combo">
                <CgPin color="#d3e2e5" size={50} />
                <h6>
                  {!userData.Endereco
                    ? 'Cadstre seu endereço'
                    : userData.Endereco.cep}
                </h6>
              </div>
            </div>
          )}
          <div className="app-container">
            <h1>Conta</h1>
            <div className="icon-combo">
              <MdAccountBalance color="#d3e2e5" size={50} />
              <h6>
                N° da conta:{' '}
                {!userData.ContaInterna
                  ? 'Sem conta'
                  : userData.ContaInterna.id}
              </h6>
            </div>
            <div className="icon-combo">
              <HiOutlineCurrencyDollar color="#d3e2e5" size={50} />
              <h6>
                Saldo:{' '}
                {!userData.ContaInterna
                  ? 'Sem saldo'
                  : formatPrice(userData.ContaInterna.brl_saldo)}
              </h6>
            </div>
            <div className="icon-combo">
              <GiTwoCoins color="#d3e2e5" size={50} />
              <h6>
                Ativos:{' '}
                {!userData.ContaInterna
                  ? 'Sem ativos'
                  : formatPrice(userData.ContaInterna.ativo_brl_saldo)}
              </h6>
            </div>
          </div>
          <div className="app-container">
            <h1>Ativos</h1>
            {userData.ClienteAtivos.map((ativos) => (
              <Coin
                key={ativos.id}
                nome={ativos.nome}
                valor={ativos.valor}
                quantidade={ativos.quantidade}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default AppPage;
