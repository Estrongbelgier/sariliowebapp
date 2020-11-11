/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Link, Redirect } from 'react-router-dom';
import * as connectionAction from '~/store/modules/connection/actions';
import { singInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/images/Fav/Maozinha.png';
import './styles.css';
import CleanHeader from '~/components/CleanHeader/index.jsx';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório!'),
  senha: Yup.string().required('Senha é obrigatório'),
});

function Login({ conn, auth }) {
  const { signed } = auth;
  const { data, status } = conn;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleApiConnection() {
    return dispatch(connectionAction.viewConnectionRequest());
  }

  useEffect(() => {
    handleApiConnection();
  }, []);

  function handleSubmit({ email, senha }) {
    dispatch(singInRequest(email, senha));
  }

  return (
    <>
      {signed ? (
        <Redirect to="/app" />
      ) : (
        <div className="grid grid-template-rows-1 login-page-container">
          <CleanHeader />
          <div className="login-form-container">
            <Form
              className="form-container"
              schema={schema}
              onSubmit={handleSubmit}
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
                name="senha"
                type="password"
                color="#ccc"
                placeholder="Senha senha cadastrada"
              />

              <button type="submit">
                {loading ? 'Carregando...' : 'Entrar'}
              </button>
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
      )}
    </>
  );
}

const mapStateToProps = (state, auth) => ({
  conn: state.conn,
  auth: state.auth,
});

export default connect(mapStateToProps)(Login);
// REDUX conectar ao store
