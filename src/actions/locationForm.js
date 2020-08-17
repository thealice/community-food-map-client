export const updateLocationForm = (name, value) => {
    const formData = { name, value}
    return {
        type: 'UPDATE_LOCATION_FORM', 
        formData
    }
}