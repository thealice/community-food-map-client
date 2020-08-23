import React, { Component } from 'react';
import { MapWithMarkers } from '../components/MapWithMarkers'

class MapContainer extends Component {
  
  state = {
      selectedMarker: false
  }

  handleOnClick = (marker, event) => {
    this.setState({ selectedMarker: marker })
  }

  render() {

    return (
      <MapWithMarkers
        selectedMarker={this.state.selectedMarker}
        markers={this.props.locations}
        onClick={this.handleOnClick}
        // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_GMAPS_API_KEY}&libraries=geometry,drawing,places`}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
  
}
export default MapContainer;