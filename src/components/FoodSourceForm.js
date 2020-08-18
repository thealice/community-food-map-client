import React, { Component } from 'react';
import StyledForm from '../styles/index.js'

class FoodSourceForm extends Component {

    render() {
        
        return (
            <div className="location-input p-8">
                
                <StyledForm>
                    <form>
                        <label htmlFor="name" className="hidden" >Name:</label>
                        <input type="text" placeholder="Name" name="name" value={}/>

                        <label htmlFor="notes" className="hidden" >Notes:</label>
                        <textarea placeholder="Notes...for example: 'Available Monday thru Thursday, 9am - 12pm" name="notes" value={} />

                        <button type="submit" className="button">Submit</button>
                    </form>
                </StyledForm>
            </div>
        )
    }

}

export default FoodSourceForm;