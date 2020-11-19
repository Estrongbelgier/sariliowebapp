/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import './styles.css';

export default function PFCard() {
  const schema = Yup.object().shape({
    cpf: Yup.string().required('CPF é obrigatório').max(14),
    nome: Yup.string().required('Nome é obrigatório').max(),
    data_de_nascimento: Yup.date().required('Data de nascimento é obrigatório'),
    nome_da_mae: Yup.string().required('Obrigatório').max(14),
    genero: Yup.string().required('Obrigatório').max(14),
  });

  function handleSubmit() {
    toast.success('deu certo');
  }
  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Pessoa fisíca</h1>
        <Input name="cpf" type="text" placeholder="Seu CPF" />
        <Input name="nome" type="text" placeholder="Seu nome" />
        <Input name="data_de_nascimento" type="date" />
        <Input name="nome_da_mae" type="text" placeholder="Nome da sua mãe" />
        <Input name="celular" type="tel" placeholder="Numero de celular" />
        <div>
          <Input name="genero" type="radio" id="male" value="Masculino" />
          <label htmlFor="Masculino">Masculino</label>
        </div>
        <div>
          <Input name="genero" type="radio" id="female" value="Feminino" />
          <label htmlFor="Feminino">Feminino</label>
        </div>
        <button type="submit">Registrar</button>
      </Form>
    </>
  );
}
