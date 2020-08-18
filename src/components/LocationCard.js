import React from 'react';
import Address from './Address'

const LocationCard = ({location}) => {
    const {name, street, city, state, notes, food_sources} = location

    const renderFoodSources = food_sources.map(f => 
        <li key={f.id}>
            <div className="food-source">
                <h4 className="font-semibold">{f.name}</h4>
                <p>{f.notes}</p>
            </div>
        </li>

    )

    return (
        <div className='location-card'>
            
            <div className='text-center py-3 bg-blue-500 text-white font-bold' >
                <h3>{name}</h3>
            </div>
            
            <ul className="p-6 bg-white py-1 text-gray-900">
                <li><Address place={location} /></li>
                <li>{notes}</li>
                {renderFoodSources}
            </ul>
        </div>
    )
  }

  export default LocationCard;