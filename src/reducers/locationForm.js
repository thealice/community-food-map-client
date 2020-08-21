const initialState = {
    name: "",
    notes: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    zoom: 17,
    lat: 37.8712783,
    lng: -122.3714783,
    userId: 1,
    regionId: 3
}

export default (state=initialState, action) => {
    // console.log(action)
    switch (action.type) {
    case 'UPDATE_LOCATION_FORM':
        debugger
        return {
            ...state,
            formData: {[action.formData.name]: action.formData.value}
        }
    case 'RESET_LOCATION_FORM':
        return initialState
    default:
        return state
    }
}