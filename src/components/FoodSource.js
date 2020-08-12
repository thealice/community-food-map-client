import React from 'react';

const FoodSource = ({name, notes}) => {

    return (
        <div className="food-source px-6 py-1 text-gray-900">
            <h4 className="font-semibold">{name}</h4>
            <p>{notes}</p>
        </div>
    )
  }

  export default FoodSource;