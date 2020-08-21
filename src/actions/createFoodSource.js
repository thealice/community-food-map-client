import { resetFoodSourceForm } from './foodSourceForm'

export const createFoodSource = (foodData, locationId) => {
  
    const sendableFoodData = {
      name: foodData.name,
      notes: foodData.notes,
      location_id: parseInt(locationId),
      user_id: parseInt(foodData.userId),
      available: foodData.available
    }

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
            // load the location page
            // Either add currentLocation to state and use that in
            // individual location pages or ADD_FOODSOURCE_TO_LOCATION here    
          }
        })
      }

}