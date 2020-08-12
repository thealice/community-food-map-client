import React from 'react';
import LocationCard from './LocationCard'

const LocationsList = ({locations}) => {

    const renderLocations = locations.map(location => 
        <li className="mb-4 shadow-md bg-white" key={location.id}>
            <LocationCard name={location.name} street={location.street} notes={location.notes} food_sources={location.food_sources}/>
        </li>
    )
    
    return (
        <ul>
            {renderLocations}
        </ul> 
    )
}

export default LocationsList;