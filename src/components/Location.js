import React, { Component } from 'react';
import Address from './Address'
import FoodSourceForm from './FoodSourceForm';

class Location extends Component {
    
    state = {
        renderForm: false
    }

    renderFoodSources = (food_sources) => {
       return food_sources.map(f => 
        <li className="py-2" key={f.id}>
            {f.name}<br/>
            {f.notes}<br />
        </li>)
    }

    handleOnClick = () => {
        this.setState({renderForm: true})
    }

    render() {
        const {place} = this.props

        return (
            <div className='location p-8 flex'>  
                <div className='flex-auto'>
                    <h1>{place.name}</h1>
                    <p><Address place={place} /></p>
                    <p>{place.notes}</p>
                    <h2>Food at this Location:</h2>
                    <ul>
                        {this.renderFoodSources(place.food_sources)}
                        <li className="py-2"><button onClick={this.handleOnClick}>Add new food-source at this location</button></li>
                    </ul>
                </div>

                {this.state.renderForm ? < FoodSourceForm place={place} /> : null}
            </div>
        );
    }
    
  }

  export default Location;