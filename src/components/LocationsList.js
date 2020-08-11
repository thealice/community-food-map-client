import React from 'react';
import Location from './Location'

const LocationsList = ({locations}) => {

    const renderLocations = locations.map(location => 
        <li key={location.id}>
            <Location name={location.name} street={location.street} notes={location.notes} food_sources={location.food_sources}/>
        </li>
    )
    
    return (
        <ol>
            {renderLocations}
        </ol> 
    )
}

export default LocationsList;