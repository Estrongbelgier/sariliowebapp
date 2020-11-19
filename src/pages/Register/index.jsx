/* eslint-disable no-unused-expressions */
import React from 'react';
import { useDispatch, connect } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { signUpRequest } from '~/store/modules/auth/actions';
import './styles.css';
import CleanHeader from '~/components/CleanHeader/index.jsx';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('O e-mail deve ser válido!')
    .required('O email é obrigatório!'),
  senha: Yup.string()
    .min(6, 'No mínimo 6 caracteres!')
    .max(16, 'No máximo 16 caracteres!')
    .required('A senha é obrigatória!'),
});

function Register() {
  const dispatch = useDispatch();

  function handleSubmnit({ email, senha }) {
    dispatch(signUpRequest(email, senha));
  }

  return (
    <div className="register-grid register-grid-template-rows-1 register-page-container">
      <CleanHeader />
      <div className="register-form-container">
        <legend className="form-legend">Faça seu cadastro.</legend>
        <Form
          className="register-form-container"
          schema={schema}
          onSubmit={handleSubmnit}
        >
          <Input
            className="register-login-form-input"
            name="email"
            type="email"
            placeholder="Insira um e-mail válido."
          />
          <Input
            className="register-login-form-input"
            name="senha"
            type="password"
            placeholder="Cria uma senha forte."
          />

          <button type="submit">Enviar</button>
        </Form>
      </div>
    </div>
  );
}

export default connect()(Register);
