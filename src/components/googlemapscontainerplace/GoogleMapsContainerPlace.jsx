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
        <Map item xs={12} style={style} google={this.props.google} onClick={this.onMapClick} zoom={13} initialCenter={{ lat: 51.2194475, lng: 4.40246430000002 }}>
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.2194475, lng: 4.40246430000002 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.22978819999999, lng: 4.417160400000057 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.200305, lng: 4.395790000000034 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.2314587, lng: 4.434389399999986 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.20481710000001, lng: 4.395703700000013 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.2016418, lng: 4.408292999999958 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.2102073, lng: 4.393025599999987 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.2096526, lng: 4.399745800000005 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.21329519999999, lng: 4.393017399999962 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.2037954, lng: 4.413829899999996 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.2145093, lng: 4.40345769999999 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.22510140000001, lng: 4.402637700000014 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.22615, lng: 4.420499999999947 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.22640910000001, lng: 4.430485099999942 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.2240851, lng: 4.439358800000036 }} name={'Changing Colors Garage'} />
          <Marker onClick={this.onMarkerClick} title={'Changing Colors Garage'} position={{ lat: 51.2188559, lng: 4.431994499999973 }} name={'Changing Colors Garage'} />
        </Map>
      </section>
    );
  }
}
const key = 'AIzaSyCSFyI_4pzu903BlxsqinAXl-NI7yIJbtE';

export default GoogleApiWrapper({
  apiKey: key,
})(GoogleMapsContainerPlace);
