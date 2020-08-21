import React, { Component } from 'react';
import { connect } from 'react-redux'
import StyledForm from '../styles/index.js'
import { createFoodSource } from '../actions/createFoodSource'
import { updateFoodSourceForm } from '../actions/foodSourceForm';

class FoodSourceForm extends Component {

    handleOnSubmit = (e) => {
        e.preventDefault();
        const { formData, place } = this.props
        const locationId = place.id
        // prevent default
        // dispatch createFoodSource
        // reset form
        // set renderForm state back to false
        this.props.createFoodSource(formData, locationId)
    }

    handleOnChange = (e) => {
        const { name, value } = e.target
        this.props.updateFoodSourceForm(name, value)
    }


    render() {
        const { name, notes } = this.props
        console.log(this.props)

        return (
            <div className="foodsource-form flex-auto">
                
                <StyledForm>
                    <form onSubmit={this.handleOnSubmit}>
                        <label htmlFor="name" className="hidden" >Name:</label>
                        <input onChange={this.handleOnChange}type="text" placeholder="Name" name="name" value={name} required />

                        <label htmlFor="notes" className="hidden" >Notes:</label>
                        <textarea onChange={this.handleOnChange} placeholder="Notes...for example: 'Available Monday thru Thursday, 9am - 12pm" name="notes" value={notes} />

                        <button type="submit" className="button">Submit</button>
                    </form>
                </StyledForm>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        formData: state.foodSourceForm.formData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateFoodSourceForm: (name, value) => {
            dispatch(updateFoodSourceForm(name, value))
        },
        createFoodSource: (formData, locationId) => {
            dispatch(createFoodSource(formData, locationId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(FoodSourceForm);