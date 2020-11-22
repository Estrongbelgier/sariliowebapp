/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function Endereco({ cep, localidade, bairro, logradouro }) {
  function handleResgitraEnd() {
    /* TODO fazer iserçaõ */
  }
  return (
    <>
      <div className="end-item">
        <input type="text" value={logradouro} placeholder="Rua" />
      </div>
      <div className="end-item">
        <input type="text" placeholder="Numero" />
      </div>
      <div className="end-item">
        <input type="text" value={bairro} placeholder="Bairro" />
      </div>
      <div className="end-item">
        <input type="text" value={localidade} placeholder="Cidade" />
      </div>
      <button type="button" onSubmit onClick={handleResgitraEnd}>
        Guardar
      </button>
    </>
  );
}

export default Endereco;
