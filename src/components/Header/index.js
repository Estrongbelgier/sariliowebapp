/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./styles.css";
import Logo from "../../assets/images/Header/Logo.png";
import Login from "../../assets/images/Header/Login.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="Header">
      <img src={Logo} className="logo" alt="logo" />
      <Link to="/login" className="login">
        <img src={Login} alt="" />
      </Link>
    </header>
  );
}
