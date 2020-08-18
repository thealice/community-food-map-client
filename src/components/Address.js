import React from 'react'

const Address = ({ place }) => {

    const { street, city, state, zipcode } = place
    
    if(street && city && state) {
        return (
            <>
                {street}<br />
                {city}, {state} {zipcode}
            </>
        )

    } else if(!street && city && state) {
        return <>{city}, {state} {zipcode}</>
    } else {
        return <>{city}</>
    }
}

export default Address;