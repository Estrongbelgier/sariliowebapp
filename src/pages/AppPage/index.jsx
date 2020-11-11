/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import InnerHeader from '~/components/InnerHeader/index.jsx';
import { signOut } from '~/store/modules/auth/actions';
import './styles.css';

function AppPage({ conn }) {
  const { data } = conn;
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <div className="grid grid-template-rows-1 app-page-container">
      <InnerHeader />
      <div className="app-container">
        <h1>App</h1>
        <h6>Feature não implementada</h6>
        <button type="button" onClick={handleSignOut}>
          sinOut
        </button>
        {/* <div id="login-footer">{data.usuarios} Clientes | Online</div> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  conn: state.conn,
});

export default connect(mapStateToProps)(AppPage);
