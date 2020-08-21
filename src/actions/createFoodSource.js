import { resetFoodSourceForm } from './foodSourceForm'

export const createFoodSource = (foodData, locationId, history) => {
  
    const sendableFoodData = {
      name: foodData.name,
      notes: foodData.notes,
      location_id: parseInt(locationId),
      user_id: parseInt(foodData.userId),
      available: foodData.available
    }
    console.log(sendableFoodData)

    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/food_sources', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendableFoodData)
        })
        .then(response => response.json())
        .then(responseJSON => {
          if (responseJSON.error) {
            alert(responseJSON.error)
          } else {
            // reset foodSource form values
            dispatch(resetFoodSourceForm())
            // reroute to the location page
            history.push(`/locations/${responseJSON.data.attributes.location_id}`)
          }
        })
      }

}