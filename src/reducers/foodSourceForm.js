const initialState = {
    formData: {
        name: "",
        notes: "",
        userId: 1,
        locationId: 0,
        available: true
    },
    renderForm: false
    
}

export default (state=initialState, action) => {
    // console.log(action)
    switch (action.type) {
    case 'UPDATE_FOODSOURCE_FORM':
        const returnVal = {
            ...state,
            formData: {...state.formData, [action.newFormData.name]: action.newFormData.value}
          }
        return returnVal
    case 'RESET_FOODSOURCE_FORM':
        return {
            ...initialState,
            renderForm: action.renderForm
        }
    case 'RENDER_FOODSOURCE_FORM':
        return {
            ...initialState,
            renderForm: true
        }
    default:
        return state
    }
}