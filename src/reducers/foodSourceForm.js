const initialState = {
    name: "",
    notes: "",
    userId: 1,
    locationId: 0
}

export default (state=initialState, action) => {
    // console.log(action)
    switch (action.type) {
    case 'UPDATE_FOODSOURCE_FORM':
        return {
            ...state,
            [action.formData.name]: action.formData.value
        }
    case 'RESET_FOODSOURCE_FORM':
        return initialState
    default:
        return state
    }
}