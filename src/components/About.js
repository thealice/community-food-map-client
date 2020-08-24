import React from 'react';

const About = () => {

    return (
        <div className="about p-8 flex text-purple-100 bg-gray-900 rounded">
            <p>
                This food map is intended to be a mutual aid resource.
                <h2>Do you have extra food to share?</h2>
                Maybe there are too many veggies for one household to eat ready to harvest in your garden. Maybe you have a fruit tree or extra non-perishable food. This map is to help you share the bounty.<br/>
                <h3 className="text-purple-200">How it works</h3>
                <ol className="list-decimal list-inside">
                    <li> Add your location so it will show on the map. You can include notes about how/when/where to access the food and anything else those picking up should know so they can be respect your boundaries. For example 'Trees that can be accessed from the sidewalk are fair game. Please do not hop fence.' or 'Veggies will be in a box out front, help yourself.'</li>
                    <li> Add your food source(s). Include notes specific to the food source eg. 'Apricot tree fruits in early June' or 'Please limit to one bag of oranges'</li>
                    <li> Remove or deactivate your location once the food is no longer available.</li>
                </ol> 
                <h2>Do you need extra food?</h2>
                This map is for you! 
            </p>
        </div>
    )

}

export default About;