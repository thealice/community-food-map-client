import React from 'react';

const Location = ({ match, place }) => {

    const renderFoodSources = place.food_sources.map(f => 
        <li className="py-2" key={f.key}>
            {f.name}<br/>
            {f.notes}<br />
            <button className="btn">Edit Food Source</button>
        </li>
    )
    let address;
    if(place.street && place.city) {
        address = `${place.street}, ${place.city}, ${place.state} ${place.zipcode}`
    }
    return (

        <div className='location p-8'>  
            <h1>{place.name}</h1>
            <p>{address}</p>
            <p>{place.notes}</p>
            <h2>Food at this Location:</h2>
            <ul>{renderFoodSources}</ul>
        </div>
    )
  }

  Location.defaultProps = {
    locations: [],
    place: {}
  }

  export default Location;