import React, { Component } from 'react';

import './place.css';

import UpperBar from '../../components/upperbar/UpperBar';
import NavBar from '../../components/navbar/NavBar';
import WhereBar from '../../components/wherebar/WhereBar';
import PlaceBlueBar from '../../components/placebluebar/PlaceBluebar';

import { connect } from 'react-redux';
import { allAutomaten } from '../../redux/automaten/actions';

import '../auth/Login.style.css';

class Place extends Component {
  componentDidMount() {
    this.props.dispatchers.allAutomaten();
  }
  render() {
    return (
      <div className="view">
        <NavBar />
        <UpperBar />
        <PlaceBlueBar automaten={this.props.automaten} />
        <WhereBar />
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
export default connect(mapStateToProps, mapDispatchToProps)(Place);
