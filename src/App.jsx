import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import UnauthorizedLayout from './routes/UnauthorizedLayout';
import UnauthorizedRoute from './routes/UnauthorizedRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <UnauthorizedRoute path="/" component={UnauthorizedLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
