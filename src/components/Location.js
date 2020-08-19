import React from 'react';
import { connect } from 'react-redux';
import Address from './Address'
import FoodSourceForm from './FoodSourceForm';

const Location = ( {match, locations, history} ) => {

    const place = locations.find( ({ id }) => id === Number(match.params.id) );

    const renderFoodSources = (food_sources) => {
       return food_sources.map(f => 
        <li className="py-2" key={f.id}>
            {f.name}<br/>
            {f.notes}<br />
        </li>)
    }

    const handleOnClick = () => {
        //update renderForm to true
        console.log("clicked!")
    }

        return (
            <div className='location p-8 flex'>  
                <div className='flex-auto'>
                    <h1>{place.name}</h1>
                    <p><Address place={place} /></p>
                    <p>{place.notes}</p>
                    <h2>Food at this Location:</h2>
                    <ul>
                        {renderFoodSources(place.food_sources)}
                        <li className="py-2"><button onClick={handleOnClick}>Add new food-source at this location</button></li>
                    </ul>
                </div>

                {/* {this.props.renderForm ? < FoodSourceForm place={place} /> : null} */}
            </div>
        );
    
    
  }

  export default Location;