import React from "react";
import { Link } from "react-router-dom";

import Thumb from "../../assets/images/Home/Thumbnail.png";
import Wallet from "../../assets/images/Sections/wallet.svg";
import Transfer from "../../assets/images/Sections/transfer.svg";
import Investments from "../../assets/images/Sections/investments.svg";
import Tipandtricks from "../../assets/images/Sections/tipandtricks.svg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Logo from "../../assets/images/Header/Logo.png";

import "./styles.css";

function Home() {
  return (
    <body>
      <Header />
      <section className="thumbsection">
        <img src={Thumb} alt="" />
      </section>
      <section className="listsection">
        <ul>
          <li>
            <h3>Digital Wallet</h3>
            <Link to="/wallet">
              <img src={Wallet} alt="" />
            </Link>
          </li>
          <li>
            <h3>Transações</h3>
            <Link to="/transfer">
              <img src={Transfer} alt="" />
            </Link>
          </li>
          <li>
            <h3>Investimentos</h3>
            <Link to="/investments">
              <img src={Investments} alt="" />
            </Link>
          </li>
          <li>
            <h3>Dicas e truques</h3>
            <Link to="/tips">
              <img src={Tipandtricks} alt="" />
            </Link>
          </li>
        </ul>
      </section>
      <section className="formsection">
        <form className="contatoform">
          <fieldset>
            <legend>Entre em contado</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>
            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input id="email" />
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </section>
      <Footer />
    </body>
  );
}

export default Home;
