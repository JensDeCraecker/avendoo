import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Bread from '../scenes/bread/Bread';
import Place from '../scenes/place/Place';
import Deal from '../scenes/deal/Deal';

const UnauthorizedLayout = props => {
  return (
    <div className="unauth-layout">
      <section className="unauth-action-view">
        <Switch>
          <Route path="/" exact component={Bread} />
          <Route path="/waar" component={Place} />
          <Route path="/aanbiedingen" component={Deal} />
          <Redirect to="/" />
        </Switch>
      </section>
    </div>
  );
};

export default UnauthorizedLayout;
