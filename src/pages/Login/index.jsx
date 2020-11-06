/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/Fav/Maozinha.png';

import './styles.css';
import CleanHeader from '~/components/CleanHeader/index.jsx';
import api from '~/services/api';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Put a valid e-mail')
    .required('An e-mail is required'),
  password: Yup.string().required('Password is required'),
});

const loading = false;

function Login() {
  const [conn, setConn] = useState();

  useEffect(() => {
    api.get('/').then((response) => {
      const { data } = response;
      setConn(data);
      console.log(data);
    });
  }, [conn]);

  return (
    <>
      <div className="grid grid-template-rows-1 login-page-container">
        <CleanHeader />
        <div className="login-form-container">
          <Form className="form-container" schema={schema} onSubmit={() => {}}>
            <img src={logo} alt="Sarilio logo" />
            <Input
              className="login-form-input"
              name="email"
              type="email"
              color="#ccc"
              placeholder="Seu e-mail cadastrado"
            />
            <Input
              className="login-form-input"
              name="password"
              type="password"
              color="#ccc"
              placeholder="Senha senha cadastrada"
            />

            <button type="submit">{loading ? 'Loading...' : 'Entrar'}</button>
            <Link to="/register" className="login-cadastro-link">
              Cadastre-se
            </Link>
          </Form>
        </div>
        {conn ? (
          <div id="login-footer">0 Clientes | Online</div>
        ) : (
          <div id="login-footer-off">Offline</div>
        )}
      </div>
    </>
  );
}

export default Login;
