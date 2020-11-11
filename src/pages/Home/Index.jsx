import React from 'react';
import { Link } from 'react-router-dom';

import Thumb from '~/assets/images/Home/Thumbnail.png';
import Wallet from '~/assets/images/Sections/wallet.svg';
import Transfer from '~/assets/images/Sections/transfer.svg';
import Investments from '~/assets/images/Sections/investments.svg';
import Tipandtricks from '~/assets/images/Sections/tipandtricks.svg';

import Header from '~/components/Header/index.jsx';
import Footer from '~/components/Footer/index.jsx';

import './styles.css';

function Home() {
  return (
    <div>
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
              <label htmlFor="name">
                <input id="name" type="name" placeholder="Seu nome." />
              </label>
            </div>
            <div className="input-block">
              <label htmlFor="email">
                <input
                  id="email"
                  type="email"
                  placeholder="Seu e-mail válido."
                />
              </label>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
