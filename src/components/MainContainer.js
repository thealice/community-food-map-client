import React, { Component } from 'react';
import { fetchLocations } from '../actions/locationActions';
import { connect } from 'react-redux';
import LocationsList from './LocationsList'
import { MapContainer } from './MapContainer';

class MainContainer extends Component {
    
  componentDidMount() {
      this.props.fetchLocations()
  }
  
  render() {
    if(this.props.locations.loading) {
      return (
        <div className="loading">
                <p>Loading...</p>
        </div>
      )
    }
    return (
          <div className="main-container p-8 flex">
              <MapContainer apiKey={process.env.GMAPS_API_KEY} />
              {/* <MapContainer locations={this.props.locations.locations} /> */}
              <LocationsList locations={this.props.locations.locations}/>
          </div>
          )
  }

}

const mapStateToProps = state => {
  return {
      locations: state.locations
  }
}
export default connect(mapStateToProps, {fetchLocations})(MainContainer)
