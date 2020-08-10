import React from 'react';
import Location from './Location'

const LocationsList = ({locations}) => {

    const renderLocations = locations.map(location => 
        <li key={location.id}>
            <Location name={location.name} street={location.street} notes={location.notes} />
        </li>
    )
    
    return (
        <ul>
            {renderLocations}
        </ul> 
    )
}

export default LocationsList;