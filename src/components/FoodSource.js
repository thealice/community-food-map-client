import React from 'react';

const FoodSource = ({name, notes}) => {

    return (
        <div className="food_source">
            <h4>{name}</h4>
            <p>{notes}</p>
        </div>
    )
  }

  export default FoodSource;