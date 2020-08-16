import React from 'react';
import { Link } from 'react-router-dom';
import LocationCard from './LocationCard'

const LocationsList = ({ locations }) => {

    const renderLocationCards = locations.map(location => 
        <li className="mb-4 shadow-md bg-white" key={location.id}>
            <Link to={`/locations/${location.id}`} >
                <LocationCard name={location.name} street={location.street} notes={location.notes} food_sources={location.food_sources} />
            </Link>
        </li>
    )
    
    return (
        <div className="locations-list flex-col max-w-sm">
            <ul>
                <li className="text-center"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-800 rounded mb-3">Add new Location</button></li>
                {renderLocationCards}
            </ul> 
        </div>

    )
}

export default LocationsList;