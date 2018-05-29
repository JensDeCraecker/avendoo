import React, { Component } from 'react';

import NavBar from '../../components/navbar/NavBar';
import UpperBar from '../../components/upperbar/UpperBar';
import BlueBar from '../../components/bluebar/BlueBar';

import { connect } from 'react-redux';
import { allAutomaten } from '../../redux/automaten/actions';
import { allItems } from '../../redux/items/actions';
import InfoBar from '../../components/infobar/InfoBar';

class Bread extends Component {
  componentDidMount() {
    this.props.dispatchers.allAutomaten();
    this.props.dispatchers.allItems();
  }
  render() {
    return (
      <div className="view">
        <NavBar />
        <UpperBar />
        <BlueBar automaten={this.props.automaten} items={this.props.items} />
        {/* <InfoBar /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  automaten: state.automaten,
  items: state.items,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchers: {
      allAutomaten: () => dispatch(allAutomaten()),
      allItems: () => dispatch(allItems()),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Bread);
