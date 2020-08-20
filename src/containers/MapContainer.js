import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyle = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyle}
        initialCenter={{
         lat: 37.853954,
         lng: -122.2512007
        }}
        
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);