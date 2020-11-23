/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '~/assets/images/Header/Logo.png';
import Login from '~/assets/images/Header/Login.png';

import './styles.css';

export default function Header() {
  return (
    <header className="Header">
      <img src={Logo} className="logo" alt="logo" />
      <Link to="/login" className="login">
        <img src={Login} alt="Login" />
        <h6>Login/Cadastro</h6>
      </Link>
    </header>
  );
}
