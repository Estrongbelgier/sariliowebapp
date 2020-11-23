/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

function Endereco({ cep, localidade, bairro, logradouro, uf }) {
  const [numero, setNumero] = useState('');

  console.log(numero);

  async function handleResgitraEnd() {
    try {
      await api.post('/end', {
        cep,
        logradouro,
        bairro,
        localidade,
        uf,
        numero,
      });

      toast.success('Endereco registrado');
      history.push('/app');
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error('Aldo deu errado tente novamente');
    }
  }

  return (
    <>
      <div className="end-item">
        <input type="text" value={logradouro} placeholder="Rua" />
      </div>
      <div className="end-item">
        <input
          type="text"
          placeholder="Numero"
          onChange={(e) => {
            setNumero(e.target.value);
          }}
        />
      </div>
      <div className="end-item">
        <input type="text" value={bairro} placeholder="Bairro" />
      </div>
      <div className="end-item">
        <input type="text" value={localidade} placeholder="Cidade" />
      </div>
      <div className="end-item">
        <input type="text" value={uf} placeholder="Estado" />
      </div>
      <button type="button" onSubmit onClick={handleResgitraEnd}>
        Guardar
      </button>
    </>
  );
}

export default Endereco;
