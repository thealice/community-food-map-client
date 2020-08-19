import React from 'react';
import Address from './Address'
import FoodSourceForm from './FoodSourceForm';

const Location = ({ match, place }) => {

    const {name, notes} = place

    const renderFoodSources = place.food_sources.map(f => 
        <li className="py-2" key={f.id}>
            {f.name}<br/>
            {f.notes}<br />
        </li>
    )

    return (

        <div className='location p-8 flex'>  
            <div className='flex-auto'>
                <h1>{name}</h1>
                <p><Address place={place} /></p>
                <p>{notes}</p>
                <h2>Food at this Location:</h2>
                <ul>
                    {renderFoodSources}
                    <li className="py-2"><button>Add new food-source at this location</button></li>
                </ul>
            </div>
           

            <FoodSourceForm /> 
        </div>
    )
  }

  export default Location;