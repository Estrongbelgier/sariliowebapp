import React from 'react';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

function CleanHeader() {
  const history = useHistory();
  function getBack() {
    history.goBack();
  }
  return (
    <header className="login-header-container">
      <div id="icon">
        <Link to="/">
          <FiHome color="azure" size={60} />
        </Link>
        <h6>Home</h6>
      </div>
      <div id="icon-back">
        <FiArrowLeft
          onClick={() => {
            getBack();
          }}
          color="Azure"
          size={60}
        />
      </div>
    </header>
  );
}

export default CleanHeader;
