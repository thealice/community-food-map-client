import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  render() {
    return (
      <div className="map-container flex-col max-w-md" >
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: -37.7586346,
          lng: -122.3753923,
          }}

        >
        {/* <Marker
            onClick={this.onMarkerClick}
            name={this.state.locations[1].name}
            address={this.state.locations[1].address}
          />
          <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
          >
              <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <p>{this.state.selectedPlace.address}</p>
              </div>
          </InfoWindow>     */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'YOUR_GOOGLE_API_KEY_GOES_HERE'
  })(MapContainer);

