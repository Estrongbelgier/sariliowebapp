import React from 'react';
import { Switch, Route } from 'react-router-dom';
import history from '~/services/history';
import Profile from '~/pages/Profile/index.jsx';
import Book from '~/pages/Book/index.jsx';
import Home from '~/pages/Home/index.jsx';
import Login from '~/pages/Login/index.jsx';
import AppPage from '~/pages/AppPage/index.jsx';
import Register from '~/pages/Register/index.jsx';
import MeusAtivos from '~/pages/MeusAtivos/index.jsx';

export default function Routes() {
  return (
    <Switch history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/app" component={AppPage} />
      <Route path="/register" component={Register} />
      <Route path="/book" component={Book} />
      <Route path="/meusativos" component={MeusAtivos} />
      <Route path="/profile" component={Profile} />
      <Route />
    </Switch>
  );
}
