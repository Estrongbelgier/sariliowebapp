import React from 'react';

import { toast } from 'react-toastify';
import Thumb from '~/assets/images/Home/Thumbnail.png';
import Wallet from '~/assets/images/Sections/wallet.svg';
import Transfer from '~/assets/images/Sections/transfer.svg';
import Investments from '~/assets/images/Sections/investments.svg';
import Tipandtricks from '~/assets/images/Sections/tipandtricks.svg';

import Header from '~/components/Header/index.jsx';
import Footer from '~/components/Footer/index.jsx';

import './styles.css';

function Home() {
  async function handleSubmit(e) {
    e.preventDefault();
    toast.success('Obrigado pelo interesse!');
  }
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

            <img src={Wallet} alt="" />

            <p>
              Em nossa digital wallet você tem acesso ao seus ativos e as
              informações a ele pertencente.
            </p>
          </li>
          <li>
            <h3>Transações</h3>
            <img src={Transfer} alt="" />
            <p>
              Em nosso ambiente interno você tem acesso as operações em livro de
              oferta de ativos, e suas informaçoes estão assegurados pela LGPD.
            </p>
          </li>
          <li>
            <h3>Investimentos</h3>
            <img src={Investments} alt="" />
            <p>
              Conosco você pode aderir nossos ativos ao seu portifólio de
              investimento de maneira descomplicada.
            </p>
          </li>
          <li>
            <h3>Dicas e truques</h3>
            <img src={Tipandtricks} alt="" />
            <p>
              Nossos funcionários sempre estão apostos para lhe fornecer dicas e
              truques do mundo financeiro.
            </p>
          </li>
        </ul>
      </section>
      <section className="formsection">
        <form className="contatoform" onSubmit={handleSubmit}>
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
            <div className="input-block">
              <label htmlFor="name">
                <textarea
                  id="name"
                  maxLength={300}
                  placeholder="Sua mensagem."
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
