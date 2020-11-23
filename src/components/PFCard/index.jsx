/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import history from '~/services/history';
import './styles.css';
import api from '~/services/api';

export default function PFCard() {
  const schema = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    cpf: Yup.string().required('CPF é obrigatório').max(14),
    celular: Yup.string(),
    data_de_nascimento: Yup.date(),
    nome_da_mae: Yup.string(),
  });
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [data, setData] = useState('');
  const [mae, setMae] = useState('');
  const [celular, setCelular] = useState('');

  console.log({ nome, cpf, data, mae, celular });

  async function handleSubmit() {
    try {
      await api.post('pf', {
        nome,
        cpf,
        data_de_nascimento: data,
        nome_da_mae: mae,
        celular,
      });

      toast.success('deu certo');
      history.push('/app');
      window.location.reload();
    } catch (err) {
      toast.error('errado!');
      console.log(err);
    }
  }
  return (
    <>
      <Form id="pf-form-container">
        <h1>Pessoa fisíca</h1>
        <div className="input-item">
          <Input
            name="nome"
            type="text"
            placeholder="Seu nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="input-item">
          <Input
            name="cpf"
            type="text"
            placeholder="Seu CPF"
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div className="input-item">
          <Input
            name="data_de_nascimento"
            type="date"
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div className="input-item">
          <Input
            name="nome_da_mae"
            type="text"
            placeholder="Nome da sua mãe"
            onChange={(e) => setMae(e.target.value)}
          />
        </div>

        <div className="input-item">
          <Input
            name="celular"
            type="tel"
            placeholder="Numero de celular"
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Registrar
        </button>
      </Form>
    </>
  );
}
