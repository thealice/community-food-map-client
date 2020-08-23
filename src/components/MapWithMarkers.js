import React from "react"
import { compose } from "recompose"
import { withScriptjs, withGoogleMap } from "react-google-maps"

export const MapWithMarkers = compose(withScriptjs, withGoogleMap)(props => {

  return (
    "Hi, I'm a Google Map"
  )
})