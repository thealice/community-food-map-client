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
        <div className="locations-list grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            
            {renderLocationCards}

        </div>

    )
}

export default LocationsList;