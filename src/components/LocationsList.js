import React from 'react';
import Location from './Location'

const LocationsList = ({locations}) => {

    const renderLocations = locations.map(location => 
        <li className="p-2" key={location.id}>
            <Location name={location.name} street={location.street} notes={location.notes} food_sources={location.food_sources}/>
        </li>
    )
    
    return (
        <ul>
            {renderLocations}
        </ul> 
    )
}

export default LocationsList;