export const createLocation = (locationData) => {
  
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
    .catch(console.log)
    .then(responseJSON => {
      console.log(responseJSON)

      // add new location to state
      // return dispatch({ type: 'ADD_LOCATION', locations})
      // reroute to the new location show page

    })
  }
}

export const addLocation = location => {
  return {
    type: 'ADD_LOCATION',
    location
  }
}


