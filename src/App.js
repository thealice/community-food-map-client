import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from './actions/fetchLocations';
import LocationsContainer from './components/LocationsContainer';
import Location from './components/Location';
import NavBar from './components/NavBar'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends Component {

  componentDidMount() {
      this.props.fetchLocations()
  }

  render() {
    if(this.props.locations.loading) {
      return (
        <div className="loading">
                <p>Loading APP...</p>
        </div>
      )
    }
    return (

        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' render={routerProps => <LocationsContainer {...routerProps} locations={this.props.locations.locations} loading={this.props.locations.loading} />} />
            <Route exact path='/locations/:id' render={routerProps => <Location locations={this.props.locations.locations} place={this.props.locations.locations.find(place => (place.id === routerProps.match.params.id))}{...routerProps}/> } />
          </Switch>
          
        </div>


    )
  }


}

const mapStateToProps = state => {
  return {
      locations: state.locations
  }
}

export default connect(mapStateToProps, {fetchLocations})(App);
