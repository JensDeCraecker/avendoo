import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import UnauthorizedLayout from './routes/UnauthorizedLayout';
import UnauthorizedRoute from './routes/UnauthorizedRoute';
import logo from './images/avendoo_logo.png';

import './index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 500); // simulates an async action, and hides the spinner
  }
  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <div>
          <img src={logo} alt="avendoo_logo" className="loading" />
        </div>
      );
    }

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
