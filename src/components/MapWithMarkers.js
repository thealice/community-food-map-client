import React from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"

export const MapWithMarkers = compose(withScriptjs, withGoogleMap)(props => {

  return (

    <GoogleMap defaultZoom={11} defaultCenter={{ lat: 37.804838, lng: -122.341980 }} >
  
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
                <div>
                  {marker.name}
                </div>
              </InfoWindow>
            }
          </Marker>
        )
      })}

    </GoogleMap>
    
  )
})