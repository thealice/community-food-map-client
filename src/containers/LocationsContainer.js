import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions/fetchLocations';
import { Route, Switch, withRouter } from 'react-router-dom'
import LocationsList from '../components/LocationsList'
import Location from '../components/Location';
import { MapContainer } from './MapContainer';

class LocationsContainer extends Component {

  componentDidMount() {
      this.props.fetchLocations()
  }
  
  render() {
    const locations = this.props.locations
    if(locations.length > 0) {
      return (
            <div className="locations-container p-8 flex">
              <Switch>
                <Route exact path='/' render={routerProps => <LocationsList {...routerProps} locations={this.props.locations} />} />
                <Route exact path='/locations/:id' render={routerProps => {
                  const place = this.props.locations.find( ({ id }) => id === Number(routerProps.match.params.id) );
                  return <Location locations={this.props.locations} place={place} {...routerProps} /> 
                }} /> 
              </Switch>    
              
            </div>
            )
    }
    return (
      <div className="loading">
            <div className="p-8 flex">Loading Locations...</div>
      </div>
    )
  }

}

LocationsContainer.defaultProps = {
  locations: []
}


const mapStateToProps = state => {
  return state.locations
}

export default connect(mapStateToProps, {fetchLocations})(LocationsContainer)
