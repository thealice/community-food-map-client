import React from 'react';
import FoodSource from './FoodSource'

const LocationCard = ({name, street, notes, food_sources}) => {

    const renderFoodSources = food_sources.map(f => 
        <li key={f.key}>
            <FoodSource name={f.name} notes={f.notes}/>
        </li>
    )
    return (
        <div className='location-card'>
            <div className='text-center py-3 bg-blue-500 text-white font-bold' >
            <h3>{name}</h3>
            {street}
            </div>
            
            <ul className="p-6 bg-white"><li>{notes}</li>{renderFoodSources}</ul>
        </div>
    )
  }

  export default LocationCard;