/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { CgProfile, CgCheckO, CgPin } from 'react-icons/cg';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { MdAccountBalance } from 'react-icons/md';
import { ImCoinDollar } from 'react-icons/im';
import { RiCopperCoinFill } from 'react-icons/ri';
import { BiCoinStack } from 'react-icons/bi';
import { GiTwoCoins } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import InnerHeader from '~/components/InnerHeader/index.jsx';
import api from '~/services/api';
import pacManLoading from '~/assets/images/Loading/pacmanLoading.svg';
import formatPrice from '~/utils/corruency';

import './styles.css';

function AppPage() {
  const [userData, setUserData] = useState();
  const { signed } = useSelector((state) => state.auth);

  useEffect(() => {
    async function loadUserData() {
      const { data } = await api.get('/usuario');

      setUserData(data);
      console.tron.log(data);
    }
    loadUserData();
  }, []);

  return (
    <div className="app-page-container">
      <InnerHeader />
      {!userData ? (
        <img src={pacManLoading} alt="loading" />
      ) : (
        <>
          <div className="app-container">
            <h1>Bem vindo</h1>
            <div className="icon-combo">
              <CgProfile color="#d3e2e5" size={60} />
              <h6>{userData.PessoaFisica.nome}</h6>
            </div>
            <div className="icon-combo">
              <CgCheckO color="#d3e2e5" size={48} />
              <h6>{userData.Qualificacao.status}</h6>
            </div>
            <div className="icon-combo">
              <CgPin color="#d3e2e5" size={50} />
              <h6>{userData.Endereco.cep}</h6>
            </div>
          </div>
          <div className="app-container">
            <h1>Conta</h1>
            <div className="icon-combo">
              <MdAccountBalance color="#d3e2e5" size={50} />
              <h6>N° da conta: {userData.ContaInterna.id}</h6>
            </div>
            <div className="icon-combo">
              <HiOutlineCurrencyDollar color="#d3e2e5" size={50} />
              <h6>Saldo: {formatPrice(userData.ContaInterna.brl_saldo)}</h6>
            </div>
            <div className="icon-combo">
              <GiTwoCoins color="#d3e2e5" size={50} />
              <h6>
                Ativos: {formatPrice(userData.ContaInterna.ativo_brl_saldo)}
              </h6>
            </div>
          </div>
          <div className="app-container">
            <h1>Ativos</h1>
            {/* TODO colcoar um corrosel */}
            {userData.ClienteAtivos.map((ativos) => (
              <div key={ativos.id}>
                <div className="icon-combo">
                  <RiCopperCoinFill color="#d3e2e5" size={50} />
                  <h6>{ativos.nome}</h6>
                </div>
                <div className="icon-combo">
                  <ImCoinDollar color="#d3e2e5" size={45} />
                  <h6>{ativos.valor}</h6>
                </div>
                <div className="icon-combo">
                  <BiCoinStack color="#d3e2e5" size={45} />
                  <h6>{ativos.quantidade}</h6>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default AppPage;
