import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from '~/pages/Home/index.jsx';
import Register from './pages/Register';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Investments from './pages/Investments';
import AppPage from './pages/AppPage';
import Transfer from './pages/Transfer';
import Tips from '~/pages/Tips/index.jsx';

function Routes() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/app" component={AppPage} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/investments" component={Investments} />
        <Route path="/transfer" component={Transfer} />
        <Route path="/tips" component={Tips} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
