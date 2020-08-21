import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyle = {
  width: '100%',
  height: '100%'
};
const containerStyle = {
  position: 'absolute',  
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  renderMarkers = () => {

    return this.props.locations.map(place => {
      return (
          <Marker 
            id={place.id}
            key={place.id}
            position={{ lat: parseFloat(place.lat), lng: parseFloat(place.lng)}}
            onClick={this.onMarkerClick}
            name={place.name}
          >
            < InfoWindow
               marker={this.state.activeMarker}
               visible={this.state.showingInfoWindow}
               onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Marker>
      )
    })
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={mapStyle}
        initialCenter={{
         lat: 37.853954,
         lng: -122.2512007
        }}
        containerStyle={containerStyle}
        
      >
        {this.renderMarkers()}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);