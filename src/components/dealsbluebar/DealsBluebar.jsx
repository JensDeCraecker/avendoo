import React, { Component } from 'react';
import moment from 'moment';

import './dealsbluebar.css';

import DealsBreadinfo from '../dealsbreadinfo/DealsBreadinfo';

class DealsBluebar extends Component {
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

  // getAutomaten = () => {
  //   let { automaten } = this.props.automaten;
  //   automaten = automaten.filter(automaat => console.log(automaat.adres));
  //   automaten = automaten.map(automaat => {
  //     const broden = this.props.items.items.filter(brood => brood.automaat_id === this.props.automaat.automaat.automaat_id);
  //     automaat.broden = broden;
  //     return automaat;
  //   });
  //   return automaten;
  // }

  render() {
    // const automaten = this.getAutomaten();
    // console.log('logger', automaten)
    return (
      <div className="blue">
        <input placeholder="Datum" />
        {this.props.aanbiedingen.aanbiedingen.map((automaat, i) => {
          const date = moment(automaat.geldigTot).format('DD/MM/YYYY');
          return <DealsBreadinfo key={i} index={i} aanbiedingen={this.props.aanbiedingen} actie={automaat.actie} geldigTot={date} setActive={this.setActive} activeBreadinfo={this.state.activeBreadinfo === i} />;
        })}
      </div>
    );
  }
}

export default DealsBluebar;
