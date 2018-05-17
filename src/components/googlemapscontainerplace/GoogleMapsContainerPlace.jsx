import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import './googlemapscontainerplace.css';

class GoogleMapsContainerPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };
  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    const style = {
      width: '46vw',
      height: '76vh',
    };
    return (
      <section className="placegoogle">
        <Map item xs={12} style={style} google={this.props.google} onClick={this.onMapClick} zoom={14} initialCenter={{ lat: 51.2194475, lng: 4.40246430000002 }}>
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.217198, lng: 4.895167899999933 }} name={'Changing Colors Garage'} />
        </Map>
      </section>
    );
  }
}
export default GoogleApiWrapper({
  api: process.env.GOOGLE_API_KEY,
})(GoogleMapsContainerPlace);
