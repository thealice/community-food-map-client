import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import locations from './reducers/locations.js'
import locationForm from './reducers/locationForm.js'
import foodSourceForm from './reducers/foodSourceForm.js'

const reducer = combineReducers({
  locations,
  locationForm,
  foodSourceForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;