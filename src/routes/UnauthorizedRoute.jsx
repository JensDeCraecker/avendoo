import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ user: userState }) => ({
  pending: userState.pending,
});

export default connect(mapStateToProps)(UnauthorizedRoute);
