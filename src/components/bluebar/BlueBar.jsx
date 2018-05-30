import React, { Component } from 'react';

import BreadInfo from '../breadinfo/BreadInfo';

import './bluebar.css';

class BlueBar extends Component {
  constructor() {
    super();
    this.state = {
      activeBreadinfo: 0,
      search: '',
    };
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }
  setActive = activeBreadinfo => {
    this.setState({ activeBreadinfo });
  };

  getAutomaten = () => {
    let { automaten } = this.props.automaten;
    automaten = automaten.filter(automaat => automaat.adres.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0);
    automaten = automaten.map(automaat => {
      const broden = this.props.items.items.filter(brood => brood.automaat_id === automaat.id);
      automaat.broden = broden;
      return automaat;
    });
    return automaten;
  };

  render() {
    const automaten = this.getAutomaten();
    return (
      <div className="blue">
        <span className="fa fa-search" />
        <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        {automaten.map((automaat, i) => {
          return <BreadInfo key={i} index={i} automaat={automaat} setActive={this.setActive} activeBreadinfo={this.state.activeBreadinfo === i} />;
        })}
      </div>
    );
  }
}

export default BlueBar;
