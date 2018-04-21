import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsername, logoutUser } from '../redux/user/actions';
import { Button } from '../components';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  logout = e => {
    this.props.logout(e.target.value);
    this.props.history.replace('/auth');
  };

  render() {
    return <h1>Home</h1>;
  }
}

const mapStateToProps = state => {
  return {
    username: state.user.username,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    changeUsername: value => dispatch(setUsername(value)),
    logout: () => dispatch(logoutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
