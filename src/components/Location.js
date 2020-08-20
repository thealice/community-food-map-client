import React, { Component } from 'react';
import { connect } from 'react-redux';
import Address from './Address';
import FoodSourceForm from './FoodSourceForm';
import { updateFoodSourceForm, renderFoodSourceForm, resetFoodSourceForm } from '../actions/foodSourceForm';
import { createFoodSource } from '../actions/createFoodSource';


class Location extends Component {
    
    // componentWillUnmount() {
    //     this.props.resetFoodSourceForm()
    // }
    

    renderFoodSources = (food_sources) => {
       return food_sources.map(f => 
        <li className="py-2" key={f.id}>
            {f.name}<br/>
            {f.notes}<br />
        </li>)
    }

    handleOnClick = () => {
        // this.props.resetFoodSourceForm();
        this.props.renderFoodSourceForm();
    }

    render() {
    
        const { match, history } = this.props
        const place = this.props.locations.find( ({ id }) => id === Number(match.params.id) );

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

                {(this.props.renderForm) ? < FoodSourceForm place={place} /> : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        formData: state.foodSourceForm.formData,
        renderForm: state.foodSourceForm.renderForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetFoodSourceForm: () => {
            dispatch(resetFoodSourceForm())
        },
        renderFoodSourceForm: () => {
            dispatch(renderFoodSourceForm())
        },
        updateFoodSourceForm: (name, value) => {
            dispatch(updateFoodSourceForm(name, value))
        },
        createFoodSource: (formData, history) => {
            dispatch(createFoodSource(formData, history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);