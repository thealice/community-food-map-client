import React, { Component } from 'react';
import { connect } from 'react-redux';
import StyledForm from '../styles/index.js'

class LocationForm extends Component {
    render() {
        return (
            <div className="location-input p-8">
                
                <StyledForm>
                    <h1>Add a new Location</h1>
                    <form>
                        <label for="name" className="hidden" >Name:</label>
                        <input type="text" placeholder="Name" name="name" value=""/>

                        <label for="notes" className="hidden" >Notes:</label>
                        <textarea placeholder="Notes...for example: 'Fruit accessible from sidewalk is free to take, please do not hop fence.'" name="notes"/>
                        
                        <label for="street" className="hidden">Street Address</label>
                        <input type="text" placeholder="Street" name="street" value=""/>

                        <label for="city" className="hidden">City</label>
                        <input type="text" placeholder="City" name="city" value=""/>

                        <label for="state" className="hidden">State</label>
                        <input type="text" placeholder="State" name="state" value=""/>

                        <label for="zipcode" className="hidden">Zipcode</label>
                        <input type="text" placeholder="Zipcode" name="zipcode" value=""/>

                        <label for="latitude" className="hidden">Latitude:</label>
                        <input type="number" placeholder="Latitude (required)" name="lat" value="" required />
                        
                        <label for="longitude" className="hidden">Longitude:</label>
                        <input type="number" placeholder="Longitude (required)" name="lng" value="" required /> 
                        
                        <label for="zoom" className="hidden">Zoom:</label>
                        <input type="number" className="hidden" placeholder="Zoom" name="zoom" value="17"/>

                        <button type="submit" classname="button">Submit</button>
                    </form>
                </StyledForm>
            </div>
        )
    }
}

export default LocationForm;

