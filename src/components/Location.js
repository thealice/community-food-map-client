import React from 'react';
import FoodSource from './FoodSource'

const Location = (props) => {

    const renderFoodSources = props.food_sources.map(f => 
        <li key={f.key}>
            <FoodSource name={f.name} notes={f.notes}/>
        </li>
    )

    return (
        <div className='location'>
            
            <h3>{props.name}</h3>
            {props.street}
            
            
            <ul className="p-6 bg-white"><li>{notes}</li>{renderFoodSources}</ul>
        </div>
    )
  }

  export default Location;