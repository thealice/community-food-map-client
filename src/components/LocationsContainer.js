import React, { Component } from 'react';
import LocationsList from './LocationsList'
import Location from './Location'
import { MapContainer } from './MapContainer';

class LocationsContainer extends Component {
    
  
  render() {
    if(this.props.loading) {
      return (
        <div className="loading">
                <p>Loading...</p>
        </div>
      )
    }
    
    return (
          <div className="locations-container p-8 flex">
            <LocationsList locations={this.props.locations}/>
           
            {/* <Switch>
              <Route path='/locations/:id' render={props => {
                  const location = this.props.locations.find(location => location.id === props.match.params.id)
                  console.log(location)
                  return <Location location={location} food_sources={location.food_sources} {...props} />
                }
              }/>
            </Switch> */}
            {/* add routing here, so if on hompage it will show maps container and
            locations list, if on about show about, if on individual location show page, etc. */}
              {/* <MapContainer apiKey={process.env.GMAPS_API_KEY} /> */}
              {/* <MapContainer locations={this.props.locations} /> */}
             
          </div>
          )
  }

}



export default LocationsContainer
