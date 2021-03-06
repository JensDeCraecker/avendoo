import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class UnauthorizedRoute extends Component {
  render() {
    const { component: Component, pending, logged, ...otherProps } = this.props;
    return (
      <Route
        {...otherProps}
        render={props => {
          if (this.props.pending) return <div>Loading...</div>;
          return <Component {...this.props} />;
        }}
      />
    );
  }
}

export default UnauthorizedRoute;
