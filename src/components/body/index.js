import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../home";
import Linker from "../linker";
import adopta from "../adopta";
import Error404 from '../error404'

import { rutas } from "../routes";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/linker" component={Linker} />
      <Route exact path="/adopta" component={adopta} />
      <Route component={Error404}/>
    </Switch>
  );
};
