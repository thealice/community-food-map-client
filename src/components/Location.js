import React, { Component } from 'react';
import { connect } from 'react-redux';
import Address from './Address';
import FoodSourceForm from './FoodSourceForm';
import { updateFoodSourceForm, renderFoodSourceForm, resetFoodSourceForm } from '../actions/foodSourceForm';
import { createFoodSource } from '../actions/createFoodSource';
import { StyledButton } from '../styles/index.js'


class Location extends Component {
    

    renderFoodSources = (food_sources) => {
       return food_sources.map(f => 
        <li className="py-2" key={f.id}>
            <span className="text-purple-400">{f.name}</span>
            <ul>
                <li >{f.notes}</li>
            </ul>
        </li>)
    }

    handleOnClick = () => {
        // this.props.resetFoodSourceForm();
        this.props.renderFoodSourceForm();
    }

    render() {
    
        const { match, history } = this.props
        const place = this.props.locations.find( ({ id }) => id === match.params.id );

        return (
            <div className='location p-8 max-w-lg bg-gray-900 rounded-lg h-screen'>  
                <div className='text-gray-200'>
                    <h1 className="text-gray-300">{place.name}</h1>
                    <hr className="mb-3" />
                    <p><Address place={place} /></p>
                    <hr className="my-3" />
                    <p>{place.notes}</p>
                    <h2 className="mt-4">Food at this Location:</h2>
                    <ul className="list-inside mx-4">
                        {this.renderFoodSources(place.food_sources)}
                    </ul>
                    <hr className="my-3" />
                    <StyledButton>
                        <button onClick={this.handleOnClick}>Add Food</button>
                    </StyledButton>
                </div>

                {(this.props.renderForm) ? < FoodSourceForm place={place} history={history} /> : null}
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