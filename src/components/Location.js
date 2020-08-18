import React from 'react';
import Address from './Address'

const Location = ({ match, place }) => {

    const {name, notes, street, city, state, zipcode} = place

    const renderFoodSources = place.food_sources.map(f => 
        <li className="py-2" key={f.id}>
            {f.name}<br/>
            {f.notes}<br />
        </li>
    )

    return (

        <div className='location p-8'>  
            <h1>{name}</h1>
            {console.log(place)}
            <p><Address place={place} /></p>
            <p>{notes}</p>
            <h2>Food at this Location:</h2>
            <ul>
                {renderFoodSources}
                <li className="py-2"><button>Add new food-source at this location</button></li>
            </ul>
        </div>
    )
  }

  export default Location;