import React from 'react';
import FoodSource from './FoodSource'


const Location = ({ match, locations, place }) => {

    // const renderFoodSources = place.food_sources.map(f => 
    //     <li key={f.key}>
    //         <FoodSource name={f.name} notes={f.notes}/>
    //     </li>
    // )
    return (

        <div className='location'>
            {console.log(locations.find(place => (place.id === match.params.id)))}
            
            {/* <h3>{place.name}</h3>
            {place.street}
            {place.city}, {place.state} {place.zipcode} {place.notes}*/}
            
            
            {/* <ul className="p-6 bg-white">{renderFoodSources}</ul> */}
        </div>
    )
  }

  export default Location;