import React from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
import Address from './Address';
import { Link } from 'react-router-dom';

export const MapWithMarkers = compose(withScriptjs, withGoogleMap)(props => {

  return (

    <GoogleMap defaultZoom={11} mapId="b809c56ccaa0fad7" defaultCenter={{ lat: 37.804838, lng: -122.341980 }} >
  
      {props.markers.map(marker => {
        const onClick = props.onClick.bind(this, marker)
        return (
          <Marker
            key={marker.id}
            onClick={onClick}
            position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng)}}
          >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <>
                  <div className="font-bold uppercase underline">
                    <Link to={`/locations/${marker.id}`} >{marker.name}</Link>
                  </div>
                  <div>
                    <Address place={marker} />
                  </div>
                  <div className="food-sources mt-2">
                    {marker.food_sources.map(f => 
                      <div className="food-source">
                          <h4 className="font-semibold">{f.name}</h4>
                          <p>{f.notes}</p>
                      </div>
                    )}
                  </div>
                </>
              </InfoWindow>

            }
          </Marker>
        )
      })}

    </GoogleMap>

  )
})