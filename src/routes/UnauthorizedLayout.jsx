import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage } from '../scenes/auth/Auth.container';

const UnauthorizedLayout = props => {
  return (
    <div className="unauth-layout">
      <section className="unauth-action-view">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      </section>
    </div>
  );
};

export default UnauthorizedLayout;
