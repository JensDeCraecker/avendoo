import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
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
    const { automaat } = this.props;
    const style = {
      width: '30vw',
      height: '35vh',
    };
    const x = automaat.xcoordinaten;
    const y = automaat.ycoordinaten;
    return (
      <Map item xs={12} style={style} google={this.props.google} onClick={this.onMapClick} zoom={12} initialCenter={{ lat: 51.2194475, lng: 4.40246430000002 }}>
        <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: x, lng: y }} name={'Changing Colors Garage'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  api: process.env.GOOGLE_API_KEY,
})(GoogleMapsContainer);
