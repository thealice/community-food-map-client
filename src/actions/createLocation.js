import { resetLocationForm } from './locationForm'

export const createLocation = (locationData, history) => {
  
  const sendableLocationData = {
    name: locationData.name,
    notes: locationData.notes,
    street: locationData.street,
    city: locationData.city,
    state: locationData.state,
    zipcode: locationData.zipcode,
    zoom: parseInt(locationData.zoom),
    lat: parseFloat(locationData.lat),
    lng: parseFloat(locationData.lng),
    user_id: parseInt(locationData.userId),
    region_id: parseInt(locationData.regionId)
  }

  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendableLocationData)
    })
    .then(response => response.json())
    .then(responseJSON => {
      if (responseJSON.error) {
        alert(responseJSON.error)
      } else {
        // add new location to state
        dispatch(addLocation(responseJSON.data.attributes))
        // reset location form values
        dispatch(resetLocationForm())
        // reroute to the new location show page
        history.push(`/locations/${responseJSON.data.attributes.id}`)
      }
    })
  }
}

export const addLocation = location => {
  return {
    type: 'ADD_LOCATION',
    location
  }
}


