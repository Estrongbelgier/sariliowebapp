import React from "react";

import Home from "./pages/Home/Index";
import Login from "./pages/Login";
import Wallet from "./pages/Wallet";
import Investments from "./pages/Investments";
import Transfer from "./pages/Transfer";
import Tips from "./pages/Tips";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/investments" component={Investments} />
        <Route path="/transfer" component={Transfer} />
        <Route path="/tips" component={Tips} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
