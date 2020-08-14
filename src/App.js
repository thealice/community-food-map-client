import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLocations } from './actions/fetchLocations';
import LocationsContainer from './components/LocationsContainer';
import NavBar from './components/NavBar'

class App extends Component {

  componentDidMount() {
      this.props.fetchLocations()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' render={routerProps => <LocationsContainer {...routerProps} locations={this.props.locations.locations} loading={this.props.locations.loading} />} />
        </div>
      </Router>

    )
  }


}

const mapStateToProps = state => {
  return {
      locations: state.locations
  }
}

export default connect(mapStateToProps, {fetchLocations})(App);
