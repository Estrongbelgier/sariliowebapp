/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function Endereco({ cep, localidade, bairro, logradouro }) {
  return (
    <>
      <h1> {cep}</h1>
      <h1> {localidade}</h1>
      <h1> {bairro}</h1>
      <h1> {logradouro}</h1>
    </>
  );
}

export default Endereco;
