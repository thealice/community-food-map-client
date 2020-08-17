const initialState = {
    name: "",
    notes: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    zoom: 17,
    lat: "",
    lng: "",
    user_id: 1
}

export default (state=initialState, action) => {
    // console.log(action)
    switch (action.type) {
    case "UPDATE_LOCATION_FORM":
        return {
            ...state,
            [action.formData.name]: action.formData.value
        }
    case "RESET_LOCATION_FORM":
        return initialState
    default:
        return state
    }
}