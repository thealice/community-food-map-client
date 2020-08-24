import React from 'react';
// import Address from './Address'

const LocationCard = ({location}) => {
    const {name, street, city, state, notes, food_sources} = location

    const renderFoodSources = food_sources.map(f => 
        <div className="food-source">
            <h4 className="font-semibold">{f.name}</h4>
            <p>{f.notes}</p>
        </div>
    )

    return (
        <div className='location-card'>
            
            <div className='text-center py-3 bg-transparent text-purple-100 border-2 hover:border-purple-600 hover:text-purple-200 rounded-lg' >
                <h2 className="text-purple-100 hover:text-purple-200">{name}</h2>
                <p>{notes}</p>
                {/* <Address place={location} /> */}
                {/* {renderFoodSources} */}
            </div>
        </div>
    )
  }

  export default LocationCard;