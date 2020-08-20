export const renderFoodSourceForm = () => {
    return {
        type: 'RENDER_FOODSOURCE_FORM',
        renderForm: true
    }
}

export const updateFoodSourceForm = (name, value) => {
    const formData = { name, value}
    return {
        type: 'UPDATE_FOODSOURCE_FORM', 
        formData
    }
}

export const resetFoodSourceForm = () => {
    return {
        type: 'RESET_FOODSOURCE_FORM',
        renderForm: false
    }
}