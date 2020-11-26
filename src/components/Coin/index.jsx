import React from 'react';

import { ImCoinDollar } from 'react-icons/im';
import { RiCopperCoinFill } from 'react-icons/ri';
import { BiCoinStack } from 'react-icons/bi';
import formatPrice from '~/utils/corruency';

import './styles.css';

export default function Coin({ nome, valor, quantidade }) {
  return (
    <div className="coin-container">
      <div className="icon-combo">
        <RiCopperCoinFill color="#d3e2e5" size={50} />
        <h6>{nome}</h6>
      </div>
      <div className="icon-combo">
        <ImCoinDollar color="#d3e2e5" size={45} />
        <h6>{formatPrice(valor)}</h6>
      </div>
      <div className="icon-combo">
        <BiCoinStack color="#d3e2e5" size={45} />
        <h6>{quantidade}</h6>
      </div>
    </div>
  );
}
