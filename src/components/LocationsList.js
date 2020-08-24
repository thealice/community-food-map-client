import React from 'react';
import { Link } from 'react-router-dom';
import LocationCard from './LocationCard'

const LocationsList = ({ locations }) => {

    const renderLocationCards = locations.map(location => 
        <Link to={`/locations/${location.id}`} >
            <LocationCard location={location} />
        </Link>
    )
    
    return (
        <div className="locations-list">
            
            {renderLocationCards}

        </div>

    )
}

export default LocationsList;