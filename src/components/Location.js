import React from 'react';

const Location = ({name, street, notes}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{street}</p>
            <p>{notes}</p>
        </div>
    )
  }

  export default Location;