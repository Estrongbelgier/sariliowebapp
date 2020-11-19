/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import './styles.css';

export default function PFCard() {
  const schema = Yup.object().shape({
    cnpj: Yup.string().required('CNPJ é obrigatório').max(16),
    razao_social: Yup.string().required('Razão social é obrigatório'),
    nome_fantasia: Yup.string().required('Nome fantasia'),
    inscricao_estadual: Yup.number().required('Obrigatório'),
    telefone: Yup.string().required('Obrigatório'),
  });

  function handleSubmit() {
    toast.success('deu certo');
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Pessoa juridica</h1>
        <Input name="cnpj" type="text" placeholder="CNPJ" />
        <Input name="razao_social" type="text" placeholder="Razão social" />
        <Input name="nome_fantasia" type="text" placeholder="Nome fantasia" />
        <Input
          name="inscricao_estadual"
          type="number"
          placeholder="Inscrição estadual"
        />
        <Input name="telefone" type="tel" placeholder="Telefone" />
        <button type="submit">Registrar</button>
      </Form>
    </>
  );
}
