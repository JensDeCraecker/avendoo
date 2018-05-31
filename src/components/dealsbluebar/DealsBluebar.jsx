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

  render() {
    let filteredInfo = this.props.aanbiedingen.aanbiedingen;
    return (
      <div className="blue">
        <input placeholder="Actie" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        {filteredInfo
          .filter(item => {
            return item.actie.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0;
          })
          .map((automaat, i) => {
            const date = moment(automaat.geldigTot).format('DD/MM/YYYY');
            return <DealsBreadinfo key={i} index={i} automaat={automaat} aanbiedingen={this.props.aanbiedingen} actie={automaat.actie} geldigTot={date} setActive={this.setActive} activeBreadinfo={this.state.activeBreadinfo === i} />;
          })}
      </div>
    );
  }
}

export default DealsBluebar;
