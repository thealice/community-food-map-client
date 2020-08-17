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
    switch (action.type) {
    case "UPDATE_NEW_LOCATION_FORM":
        return action.formData
    case "RESET_NEW_LOCATION_FORM":
        return initialState
    default:
        return state
    }
}