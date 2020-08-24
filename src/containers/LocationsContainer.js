import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions/fetchLocations';
import { Route, Switch } from 'react-router-dom'
import LocationsList from '../components/LocationsList'
import Location from '../components/Location';
import MapContainer from './MapContainer';
import LocationForm from '../components/LocationForm'
import About from '../components/About'

class LocationsContainer extends Component {
  
  componentDidMount() {
      this.props.fetchLocations()
  }
  
  render() {

    const locations = this.props.locations

    if(locations.length > 0) {
      return ( 
          <Switch>

            <Route exact path='/locations/new' component={LocationForm} />
            <Route exact path='/about' component={About} />
            <Route exact path='/locations/:id' render={routerProps => {
              return <Location locations={this.props.locations} {...routerProps} />;
            } } />

            <Route path='/' render={routerProps => {
              return (
                <div className="locations-container pt-4">
                    <MapContainer locations={this.props.locations} />
                    <LocationsList {...routerProps} locations={this.props.locations} />
                </div> )}
            }/>
 
          </Switch>      
      )
    }
    return (
      <div className="loading">
        <div className="p-8 flex text-purple-100">Loading Locations...</div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return state.locations
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLocations: () => dispatch(fetchLocations())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsContainer)
