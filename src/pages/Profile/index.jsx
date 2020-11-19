/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import InnerHeader from '~/components/InnerHeader/index.jsx';

import './styles.css';

import PFCard from '~/components/PFCard/index.jsx';
import PJCard from '~/components/PJCard/index.jsx';
import cepApi from '~/services/cepApi';
import Endereco from '~/components/Endereco/Endereco/index.jsx';

function Profile() {
  const [qualidade, setQualidade] = useState(true);
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});

  function handleCep(e) {
    const typedCep = e.target.value;

    setCep(typedCep);
  }

  async function handleBuscaCep() {
    const { data } = await cepApi.get(`/${cep}/json`);
    console.log(data);
    setEndereco(data);
  }

  return (
    <div className="profile-page-container">
      <InnerHeader />
      <div className="profile-container">
        <div className="input-block">
          <label htmlFor="open_on_weekends">
            <h1>Registre-se sua qualidade</h1>
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
          {endereco ? (
            <Endereco
              cep={endereco.cep}
              localidade={endereco.localidade}
              bairro={endereco.bairro}
              logradouro={endereco.llogradouro}
            />
          ) : (
            'nada encontrado'
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
