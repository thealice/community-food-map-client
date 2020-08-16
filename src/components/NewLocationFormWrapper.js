import React from 'react';
import LocationForm from './LocationForm'
import { createLocation } from '../actions/myLocations'
import { connect } from 'react-redux'

const NewLocationFormWrapper = ({ history, createLocation }) => {

  const handleSubmit = (locationData) => {
    createLocation({
      ...locationData
    }, history)
  }
  return  <LocationForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createLocation })(NewLocationFormWrapper);