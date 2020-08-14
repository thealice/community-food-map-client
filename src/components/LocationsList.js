import React from 'react';
import { Link } from 'react-router-dom';
import LocationCard from './LocationCard'

const LocationsList = ({ locations }) => {

    const renderLocationCards = locations.map(location => 
        <li className="mb-4 shadow-md bg-white max-w-sm" key={location.id}>
            <Link to={`/locations/${location.id}`} >
                <LocationCard name={location.name} street={location.street} notes={location.notes} food_sources={location.food_sources} />
            </Link>
        </li>
    )
    
    return (
        <ul>
            {renderLocationCards}
        </ul> 
    )
}

export default LocationsList;