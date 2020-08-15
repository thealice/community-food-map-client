import React, { Component } from 'react';
import LocationsList from './LocationsList'
import { MapContainer } from './MapContainer';

class LocationsContainer extends Component {
    
  render() {

    return (
      
          <div className="locations-container p-8 flex">
            <LocationsList locations={this.props.locations} {...this.props.routerProps} />
            {/* <Switch>
              <Route path='/locations/:id' render={props => {
                  const location = this.props.locations.find(location => location.id === props.match.params.id)
                  console.log(location)
                  return <Location location={location} food_sources={location.food_sources} {...props} />
                }
              }/>
            </Switch> */}

              {/* <MapContainer apiKey={process.env.GMAPS_API_KEY} /> */}
              {/* <MapContainer locations={this.props.locations} /> */}
             
          </div>
          )
  }



}

export default LocationsContainer
