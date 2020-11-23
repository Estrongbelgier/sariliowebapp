/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import InnerHeader from '~/components/InnerHeader/index.jsx';

import './styles.css';

import PFCard from '~/components/PFCard/index.jsx';
import PJCard from '~/components/PJCard/index.jsx';
import cepApi from '~/services/cepApi';
import Endereco from '~/components/Endereco/index.jsx';
import api from '~/services/api';
import history from '~/services/history';

function Profile() {
  const [qualidade, setQualidade] = useState(true);
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});
  const [money, setMoney] = useState(Number());

  const [cpf, setCpf] = useState('');
  const [titular, setTitular] = useState('');
  const [banco, setBanco] = useState();
  const [tipo, setTipo] = useState('');
  const [agencia, setAgencia] = useState();
  const [conta, setConta] = useState();

  async function handleBuscaCep() {
    const { data } = await cepApi.get(`/${cep}/json`);
    console.log(data);
    setEndereco(data);
  }

  function handleCep(e) {
    const typedCep = e.target.value;

    setCep(typedCep);
  }

  function handleDeposito(e) {
    const { value } = e.target;
    console.log(value);
    setMoney(value);
  }

  async function depositar() {
    const res = await api.post('deposito', {
      brl_saldo: money,
    });
    res
      ? toast.success('FAKE deposito realizado!!')
      : toast.error('FAKE desito não realizado');
  }

  async function handleContaBancaria() {
    try {
      const res = await api.post('/accban', {
        cpf,
        titular,
        numero_do_banco: banco,
        tipo_de_conta: tipo,
        agencia,
        numero_da_conta: conta,
      });
      toast.sucess('Conta registrada!');
      history.push('/app');
      window.location.reload();
    } catch (error) {
      toast.error('Algo deu errado! Tente novamente');
    }
  }

  return (
    <div className="profile-page-container">
      <InnerHeader />
      <div className="profile-container">
        <div className="input-block">
          <label htmlFor="open">
            <h1>Registre sua qualidade</h1>
          </label>
          <div className="button-select">
            <button
              type="button"
              className={qualidade ? 'active' : ''}
              onClick={() => setQualidade(true)}
            >
              Pessoa Fisica
            </button>
            <button
              type="button"
              className={!qualidade ? 'active' : ''}
              onClick={() => setQualidade(false)}
            >
              Pessoa Juridica
            </button>
          </div>
        </div>
        {qualidade ? <PFCard /> : <PJCard />}
        <div className="endereco-container">
          <h1>Endereço</h1>
          <div className="cep-line">
            <Input
              name="cep"
              minLength="8"
              maxLength="8"
              type="text"
              placeholder="Seu cep"
              onChange={handleCep}
            />
            <button type="button" onClick={handleBuscaCep}>
              Buscar
            </button>
          </div>
          {endereco ? (
            <Endereco
              cep={cep}
              localidade={endereco.localidade}
              bairro={endereco.bairro}
              logradouro={endereco.logradouro}
              uf={endereco.uf}
            />
          ) : (
            'nada encontrado'
          )}
        </div>
        <div className="conta-bancaria">
          <h1>Conta bancaria</h1>
          <div className="acc-item">
            <input
              type="text"
              placeholder="cpf"
              onChange={(e) => {
                setCpf(e.target.value);
              }}
            />
          </div>
          <div className="acc-item">
            <input
              type="text"
              placeholder="titular"
              onChange={(e) => {
                setTitular(e.target.value);
              }}
            />
          </div>
          <div className="acc-item">
            <input
              type="text"
              placeholder="numero_do_banco"
              onChange={(e) => {
                setBanco(Number(e.target.value));
              }}
            />
          </div>
          <div className="acc-item">
            <input
              type="text"
              placeholder="tipo_de_conta"
              onChange={(e) => {
                setTipo(e.target.value);
              }}
            />
          </div>
          <div className="acc-item">
            <input
              type="text"
              placeholder="agencia"
              onChange={(e) => {
                setAgencia(Number(e.target.value));
              }}
            />
          </div>
          <div className="acc-item">
            <input
              type="text"
              placeholder="numero_da_conta"
              onChange={(e) => {
                setConta(Number(e.target.value));
              }}
            />
          </div>
          <button type="button" onClick={handleContaBancaria}>
            Salvar
          </button>
        </div>
        <div className="fake-deposito">
          <h1>Fake deposito</h1>
          <input type="corruency" onChange={handleDeposito} />
          <button type="button" onClick={depositar}>
            Depositar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
