import React, { Component } from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';
import BlueBar from '../../components/bluebar/BlueBar';
import InfoBar from '../../components/infobar/InfoBar';

import { connect } from 'react-redux';
import { allAutomaten } from '../../redux/automaten/actions';

class Bread extends Component {
  componentDidMount() {
    this.props.dispatchers.allAutomaten();
  }
  render() {
    return (
      <div className="view">
        <NavBar />
        <UpperBar />
        <BlueBar automaten={this.props.automaten} />
        <InfoBar automaten={this.props.automaten} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  automaten: state.automaten,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchers: {
      allAutomaten: () => dispatch(allAutomaten()),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Bread);
