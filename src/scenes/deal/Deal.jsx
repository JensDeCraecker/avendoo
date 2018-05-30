import React, { Component } from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';
import DealsBluebar from '../../components/dealsbluebar/DealsBluebar';

import { connect } from 'react-redux';
import { allAanbiedingen } from '../../redux/aanbiedingen/actions';
import { allAutomaten } from '../../redux/automaten/actions';
import { allItems } from '../../redux/items/actions';

class Deal extends Component {
  componentDidMount() {
    this.props.dispatchers.allAutomaten();
    this.props.dispatchers.allAanbiedingen();
    this.props.dispatchers.allItems();
  }
  render() {
    return (
      <div className="view">
        <NavBar />
        <UpperBar />
        <DealsBluebar aanbiedingen={this.props.aanbiedingen} items={this.props.items} automaten={this.props.automaten} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  automaten: state.automaten,
  aanbiedingen: state.aanbiedingen,
  items: state.items,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchers: {
      allAutomaten: () => dispatch(allAutomaten()),
      allAanbiedingen: () => dispatch(allAanbiedingen()),
      allItems: () => dispatch(allItems()),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Deal);
