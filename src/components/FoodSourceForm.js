import React, { Component } from 'react';
import StyledForm from '../styles/index.js'

class FoodSourceForm extends Component {

    handleOnSubmit = (e) => {
        e.preventDefault();
        // prevent default
        // dispatch createFoodSource
        // reset form
        // set renderForm state back to false so form doesn't show on location page unless button is clicked
    }

    handleOnChange = (e) => {

    }

    render() {
        
        return (
            <div className="foodsource-form flex-auto">
                
                <StyledForm>
                    <form>
                        <label htmlFor="name" className="hidden" >Name:</label>
                        <input type="text" placeholder="Name" name="name" value=""/>

                        <label htmlFor="notes" className="hidden" >Notes:</label>
                        <textarea placeholder="Notes...for example: 'Available Monday thru Thursday, 9am - 12pm" name="notes" value="" />

                        <button type="submit" className="button">Submit</button>
                    </form>
                </StyledForm>
            </div>
        )
    }

}

export default FoodSourceForm;