export default (state={ locations: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_LOCATIONS':
            return {
                ...state,
                locations: [...state.locations],
                loading: true
            }
        case 'ADD_LOCATIONS':
            return {
                ...state,
                locations: action.locations,
                loading: false
            }
        case 'ADD_LOCATION':
            return {
                ...state,
                locations: [...state.locations, action.location],
                loading: false
            }
        default: 
            return state
    }
}
