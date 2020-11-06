import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import './styles.css';
import CleanHeader from '~/components/CleanHeader/index.jsx';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Put a valid e-mail')
    .required('An e-mail is required'),
  password: Yup.string().required('Password is required'),
});

function Register() {
  return (
    <div className="register-grid register-grid-template-rows-1 register-page-container">
      <CleanHeader />
      <div className="register-form-container">
        <legend className="form-legend">Faça seu cadastro.</legend>
        <Form
          className="register-form-container"
          schema={schema}
          onSubmit={() => {}}
        >
          <Input
            className="register-login-form-input"
            name="email"
            type="email"
            color="#ccc"
            placeholder="Insira um e-mail válido."
          />
          <Input
            className="register-login-form-input"
            name="password"
            type="password"
            color="#ccc"
            placeholder="Cria uma senha forte."
          />
          <Input
            className="register-login-form-input"
            name="password"
            type="password"
            color="#ccc"
            placeholder="Repita a senha."
          />

          <button type="submit">Enviar</button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
