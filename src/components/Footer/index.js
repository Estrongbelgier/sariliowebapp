import React from "react";
import Logo from "../../assets/images/Header/Logo.png";

import "./styles.css";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Sarilio logo" />
      <h4>
        Todos os direitos reservados. <br />
        Sarilio Keep Corp Ltda®
      </h4>
    </footer>
  );
}

export default Footer;
