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
    const locations = this.props.locations.locations
    if(locations.length > 0) {
      return (
            <div className="App">
              <NavBar />
              <Switch>
                <Route exact path='/' render={routerProps => <LocationsContainer {...routerProps} locations={this.props.locations.locations} loading={this.props.locations.loading} />} />
                <Route exact path='/locations/:id' render={routerProps => {
                  const place = this.props.locations.locations.find( ({ id }) => id === Number(routerProps.match.params.id) );
                  return <Location locations={this.props.locations.locations} place={place} {...routerProps} /> 
                }} /> 
              </Switch>    
            </div>
        )
    }
    return (
      <div className="loading">
           <NavBar />
            <div className="p-8 flex">Loading APP...</div>
      </div>
    )
    


    }
    




}

// App.defaultProps = {
//   locations: {
//     locations: []
//   }
// }

const mapStateToProps = state => {
  
  return {
      locations: state.locations
  }
}

export default connect(mapStateToProps, {fetchLocations})(App);
