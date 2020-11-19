import React from 'react';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import Logo from '~/assets/images/Header/Logo.png';
import './styles.css';

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Sarilio logo" />
      <a href="http://m.facebook.com" target="_blank" rel="noopener noreferrer">
        <SiFacebook size={25} color="#e6e6f0" />
      </a>
      <a
        href="https://www.instagram.com/sarilio.tech/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram size={25} color="#e6e6f0" />
      </a>
      <h4>
        Todos os direitos reservados.
        <br />
        Sarilio Keep Corp Ltda®
      </h4>
    </footer>
  );
}

export default Footer;
