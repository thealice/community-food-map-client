import React, { Component } from 'react';
import { fetchLocations } from '../actions/fetchLocations';
import { connect } from 'react-redux';
import LocationsList from './LocationsList'
import { MapContainer } from './MapContainer';

class MainContainer extends Component {
    
  componentDidMount() {
      this.props.fetchLocations()
  }
  
  render() {
    if(this.props.loading) {
      return (
        <div className="loading">
                <p>Loading...</p>
        </div>
      )
    }
    return (
          <div className="main-container p-8 flex">
            {/* add routing here, so if on hompage it will show maps container and
            locations list, if on about show about, if on individual location show page, etc. */}
              {/* <MapContainer apiKey={process.env.GMAPS_API_KEY} /> */}
              {/* <MapContainer locations={this.props.locations} /> */}
              <LocationsList locations={this.props.locations}/>
          </div>
          )
  }

}

const mapStateToProps = state => {
  return {
      locations: state.locations.locations,
      loading: state.locations.loading
  }
}

export default connect(mapStateToProps, {fetchLocations})(MainContainer)
