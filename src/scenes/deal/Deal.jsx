import React, { Component } from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';
import DealsBluebar from '../../components/dealsbluebar/DealsBluebar';
import DealBar from '../../components/dealbar/DealBar';

import { connect } from 'react-redux';
import { allAanbiedingen } from '../../redux/aanbiedingen/actions';
import { allAutomaten } from '../../redux/automaten/actions';

class Deal extends Component {
  componentDidMount() {
    this.props.dispatchers.allAutomaten();
    this.props.dispatchers.allAanbiedingen();
  }
  render() {
    return (
      <div className="view">
        <NavBar />
        <UpperBar />
        <DealsBluebar aanbiedingen={this.props.aanbiedingen} automaat={this.props.automaten} />
        <DealBar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  automaten: state.automaten,
  aanbiedingen: state.aanbiedingen,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchers: {
      allAutomaten: () => dispatch(allAutomaten()),
      allAanbiedingen: () => dispatch(allAanbiedingen()),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Deal);
