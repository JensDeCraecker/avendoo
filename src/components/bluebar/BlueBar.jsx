import React, { Component } from 'react';

import BreadInfo from '../breadinfo/BreadInfo';

import './bluebar.css';

class BlueBar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    let filteredInfo = this.props.automaten.automaten.filter(item => {
      return item.adres.toLowerCase().indexOf(this.state.search.toLowerCase()) !== 1;
    });
    return (
      <div className="blue">
        <span className="fa fa-search" />
        <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        {filteredInfo.map((item, i) => {
          return (
            <BreadInfo
              key={i}
              straat={item.adres}
              bakker={item.omschrijving}
              laatsteLevering={item.laatsteLevering}
              volgendeLevering={item.volgendeLevering}
              items={this.props.items}
              vendor={this.props.automaten}
            />
          );
        })}
      </div>
    );
  }
}

export default BlueBar;
