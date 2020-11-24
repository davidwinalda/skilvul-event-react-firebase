import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ROUTES from './Router.routes';
import { Home, Signup } from '../pages';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.SIGNUP} component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default Router;
