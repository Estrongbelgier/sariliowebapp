/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as connectionAction from '~/store/modules/connection/actions';
import logo from '~/assets/images/Fav/Maozinha.png';
import './styles.css';
import CleanHeader from '~/components/CleanHeader/index.jsx';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Put a valid e-mail')
    .required('An e-mail is required'),
  password: Yup.string().required('Password is required'),
});

function Login({ conn }) {
  const { data, status } = conn;
  const dispatch = useDispatch();

  function handleApiConnection() {
    return dispatch(connectionAction.viewConnectionRequest());
  }
  console.tron.log(status);

  useEffect(() => {
    handleApiConnection();
  }, []);

  function showToast() {
    toast.success('FUNCIONOU');
  }
  return (
    <>
      <div className="grid grid-template-rows-1 login-page-container">
        <CleanHeader />
        <div className="login-form-container">
          <Form
            className="form-container"
            schema={schema}
            onSubmit={() => {
              showToast();
            }}
          >
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

            <button type="submit">Entrar</button>
            <Link to="/register" className="login-cadastro-link">
              Cadastre-se
            </Link>
          </Form>
        </div>
        {!status ? (
          <div id="login-footer-off">Conectando...</div>
        ) : (
          <div id="login-footer">{data.usuarios} Clientes | Online</div>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  conn: state.conn,
});

export default connect(mapStateToProps)(Login);
// REDUX conectar ao store
