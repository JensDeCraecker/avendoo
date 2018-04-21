import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UnauthorizedLayout from './routes/UnauthorizedLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={UnauthorizedLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
