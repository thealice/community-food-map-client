import React, { Component } from 'react';
import { connect } from 'react-redux';
import StyledForm from '../styles/index.js'
import { updateLocationForm } from '../actions/locationForm'
import { resetLocationForm } from '../actions/locationForm'
import { createLocation } from '../actions/createLocation'

class LocationForm extends Component {
    
    handleOnChange = (e) => {
        const { name, value } = e.target
        // dispatch the action created by the action creator
        this.props.updateLocationForm(name, value)
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        //async post fetch to api and
        //add new location to state and
        //reset form values and
        //redirect to location show page
        this.props.createLocation(this.props.formData, this.props.history)
    }

    render() {

        const { name, notes, street, city, state, zipcode, lat, lng} = this.props
        
        return (
            <div className="location-input p-8">
                
                <StyledForm>
                    <form onSubmit={this.handleOnSubmit}>
                        <label htmlFor="name" className="hidden" >Name:</label>
                        <input onChange={this.handleOnChange} type="text" placeholder="Name" name="name" value={name}/>

                        <label htmlFor="notes" className="hidden" >Notes:</label>
                        <textarea onChange={this.handleOnChange} placeholder="Notes...for example: 'Fruit accessible from sidewalk is free to take, please do not hop fence.'" name="notes" value={notes} />
                        
                        <label htmlFor="street" className="hidden">Street Address</label>
                        <input onChange={this.handleOnChange} type="text" placeholder="Street" name="street" value={street}/>

                        <label htmlFor="city" className="hidden">City</label>
                        <input onChange={this.handleOnChange} type="text" placeholder="City" name="city" value={city}/>

                        <label htmlFor="state" className="hidden">State</label>
                        <input onChange={this.handleOnChange} type="text" placeholder="State" name="state" value={state}/>

                        <label htmlFor="zipcode" className="hidden">Zipcode</label>
                        <input onChange={this.handleOnChange} type="text" placeholder="Zipcode" name="zipcode" value={zipcode}/>

                        <label htmlFor="latitude" className="hidden">Latitude:</label>
                        <input onChange={this.handleOnChange} type="number" step="any" placeholder="Latitude (required)" name="lat" value={lat} required />
                        
                        <label htmlFor="longitude" className="hidden">Longitude:</label>
                        <input onChange={this.handleOnChange} type="number" step="any" placeholder="Longitude (required)" name="lng" value={lng} required /> 

                        <button type="submit" className="button">Submit</button>
                    </form>
                </StyledForm>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        formData: state.locationForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateLocationForm: (name, value) => {
            dispatch(updateLocationForm(name, value))
        },
        resetLocationForm: () => {
            dispatch(resetLocationForm())
        },
        createLocation: (formData, history) => {
            dispatch(createLocation(formData, history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);

