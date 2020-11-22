/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/images/Header/Logo.png';
import './styles.css';

export default function InnerHeader() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const handleSingOut = () => {
    dispatch(signOut());
  };
  return (
    <header className="InnerHeader">
      <Link to="/">
        <img src={logo} className="Logo" alt="logo" />
      </Link>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link to="/app">Home</Link>
          <Link to="/book">Book</Link>
          <Link to="/meusativos">Meus Ativos</Link>
          <Link to="/profile">Perfil</Link>
          <button type="button" onClick={handleSingOut}>
            Sair
          </button>
        </nav>
      </CSSTransition>
      <button type="button" onClick={toggleNav} className="Burger">
        {isNavVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
    </header>
  );
}
