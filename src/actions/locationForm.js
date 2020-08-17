export const updateLocationForm = (name, value) => {
    const formData = { name, value}
    console.log(formData)
    return {
        type: 'UPDATE_LOCATION_FORM', 
        formData
    }
}

export const resetLocationForm = () => {
    return {
        type: 'RESET_LOCATION_FORM'
    }
}