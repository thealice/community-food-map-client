import React from 'react';
import FoodSource from './FoodSource'

const Location = ({name, street, notes, food_sources}) => {

    const renderFoodSources = food_sources.map(f => 
        <li key={f.key}>
            <FoodSource name={f.name} notes={f.notes}/>
        </li>
    )
    return (
        <div className='location'>
            <h3>{name}</h3>
            <p>{street}</p>
            <p>{notes}</p>
            <ul>{renderFoodSources}</ul>
        </div>
    )
  }

  export default Location;