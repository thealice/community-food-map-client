import React from 'react';
import FoodSource from './FoodSource'


const Location = ({ match, locations, place}) => {
    console.log(place && place)
    const location = locations && locations.find(place => ((place.id === match.params.id)))

    console.log(location)
    // const renderFoodSources = place.food_sources.map(f => 
    //     <li key={f.key}>
    //         <FoodSource name={f.name} notes={f.notes}/>
    //     </li>
    // )
    return (

        <div className='location'>
            
    <h3>Hi this is an individual location {place.name}</h3>
            
            
            
            {/* <ul className="p-6 bg-white">{renderFoodSources}</ul> */}
        </div>
    )
  }

  Location.defaultProps = {
    locations: [],
    place: {}
  }

  export default Location;